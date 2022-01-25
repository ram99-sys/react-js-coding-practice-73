import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  BodyContainer,
  HeaderContainer,
  Icon,
  IconContainer,
  TrendingHeading,
  DataContainer,
  TendingApiListContainer,
} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'
import TrendingSectionData from '../TrendingSectionData'

const trendingSectionApiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {apiStatus: trendingSectionApiConstants.initial, trendingApiData: []}

  componentDidMount() {
    this.getTrendingSectionApiData()
  }

  getTrendingSectionApiData = async () => {
    this.setState({apiStatus: trendingSectionApiConstants.inProgress})
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const trendingSectionApiData = data.videos.map(eachObject => ({
        name: eachObject.channel.name,
        profileImageUrl: eachObject.channel.profile_image_url,
        publishedAt: eachObject.published_at,
        id: eachObject.id,
        thumbnailUrl: eachObject.thumbnail_url,
        viewCount: eachObject.view_count,
        title: eachObject.title,
      }))
      console.log(trendingSectionApiData)
      this.setState({
        apiStatus: trendingSectionApiConstants.success,
        trendingApiData: trendingSectionApiData,
      })
    } else {
      this.setState({apiStatus: trendingSectionApiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingApiData} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <TendingApiListContainer
              bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
            >
              {trendingApiData.map(eachObject => (
                <TrendingSectionData
                  key={eachObject.id}
                  trendingApiDetails={eachObject}
                />
              ))}
            </TendingApiListContainer>
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
      case trendingSectionApiConstants.success:
        return this.renderSuccessView()
      case trendingSectionApiConstants.failure:
        return this.renderFailureView()
      case trendingSectionApiConstants.inProgress:
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
              <TrendingHeading>Trending</TrendingHeading>
            </HeaderContainer>
            <DataContainer>{this.renderApiData()}</DataContainer>
          </BodyContainer>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default Trending
