import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
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
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryButton,
  LoaderContainer,
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

  onClickFailureRetryButton = () => {
    this.getGamingApiData()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureViewContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
            <FailureViewImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureViewHeading color={darkTheme ? '#ffffff' : '#1e293b'}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewText color={darkTheme ? '#64748b' : '#7e858e'}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewText>
            <FailureViewRetryButton
              type="button"
              onClick={this.onClickFailureRetryButton}
            >
              Retry
            </FailureViewRetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderInProgressView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderContainer
            className="loader-container"
            data-testid="loader"
            bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
          >
            <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

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
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomeContainer data-testid="home">
              <Header />
              <BodySection>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <BodyContainer>
                  <HeaderContainer bgColor={darkTheme ? '#231f20' : '#f1f5f9'}>
                    <IconContainer bgColor={darkTheme ? '#000000' : '#ebebeb'}>
                      <Icon color="#ff0000" fontSize={30} />
                    </IconContainer>
                    <GamingHeading color={darkTheme ? '#ffffff' : '#00306e'}>
                      Gaming
                    </GamingHeading>
                  </HeaderContainer>
                  <DataContainer>{this.renderApiData()}</DataContainer>
                </BodyContainer>
              </BodySection>
            </HomeContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Gaming
