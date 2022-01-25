import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
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
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryButton,
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

  onClickFailureRetryButton = () => {
    this.getTrendingSectionApiData()
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
                    <IconContainer bgColor={darkTheme ? '#181818' : '#ebebeb'}>
                      <Icon color="#ff0000" fontSize={30} />
                    </IconContainer>
                    <TrendingHeading color={darkTheme ? '#ffffff' : '#00306e'}>
                      Trending
                    </TrendingHeading>
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

export default Trending
