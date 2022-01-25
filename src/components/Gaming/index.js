import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  DataContainer,
  HeaderContainer,
  Icon,
  IconContainer,
  GamingHeading,
  GamingApiListContainer,
  BodyContainer,
} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'
import GamingApiData from '../GamingApiData'

const gamingSectionApiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: gamingSectionApiConstants.initial, gamingApiData: []}

  componentDidMount() {
    this.getGamingApiData()
  }

  getGamingApiData = async () => {
    this.setState({apiStatus: gamingSectionApiConstants.inProgress})
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok) {
      console.log(response)
      const data = await response.json()
      console.log(data)

      const gamingVideosApiData = data.videos.map(eachObject => ({
        id: eachObject.id,
        thumbnailUrl: eachObject.thumbnail_url,
        title: eachObject.title,
        viewCount: eachObject.view_count,
      }))
      console.log(gamingVideosApiData)
      this.setState({
        apiStatus: gamingSectionApiConstants.success,
        gamingApiData: gamingVideosApiData,
      })
    } else {
      this.setState({apiStatus: gamingSectionApiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingApiData} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <GamingApiListContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
              {gamingApiData.map(eachObject => (
                <GamingApiData
                  key={eachObject.id}
                  gamingApiDetails={eachObject}
                />
              ))}
            </GamingApiListContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  renderFailureView = () => {}

  renderInProgressView = () => {}

  renderApiData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case gamingSectionApiConstants.success:
        return this.renderSuccessView()
      case gamingSectionApiConstants.failure:
        return this.renderFailureView()
      case gamingSectionApiConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeContainer data-testid="home">
        <Header />
        <BodySection>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <BodyContainer>
            <HeaderContainer>
              <IconContainer>
                <Icon color="#ff0000" fontSize={30} />
              </IconContainer>
              <GamingHeading>Gaming</GamingHeading>
            </HeaderContainer>
            <DataContainer>{this.renderApiData()}</DataContainer>
          </BodyContainer>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default Gaming
