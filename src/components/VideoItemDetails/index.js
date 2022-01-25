import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
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
import VideoItem from '../VideoItem'
import NxtwatchContext from '../../context/NxtwatchContext'

const videoItemDetailsApiConstants = {
  initial: 'initial',
  failure: 'failure',
  success: 'success',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: videoItemDetailsApiConstants.initial,
    videoItemApiData: [],
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({apiStatus: videoItemDetailsApiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        videoDetails: data.video_details,
      }
      console.log(updatedData)

      const videoItemData = {
        name: updatedData.videoDetails.channel.name,
        profileImageUrl: updatedData.videoDetails.channel.profile_image_url,
        subscriberCount: updatedData.videoDetails.channel.subscriber_count,
        description: updatedData.videoDetails.description,
        id: updatedData.videoDetails.id,
        publishedAt: updatedData.videoDetails.published_at,
        thumbnailUrl: updatedData.videoDetails.thumbnail_url,
        title: updatedData.videoDetails.title,
        videoUrl: updatedData.videoDetails.video_url,
        viewCount: updatedData.videoDetails.view_count,
        isSaved: false,
      }
      // console.log(videoItemData)
      this.setState({
        apiStatus: videoItemDetailsApiConstants.success,
        videoItemApiData: videoItemData,
      })
    } else {
      this.setState({apiStatus: videoItemDetailsApiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoItemApiData} = this.state

    return (
      <>
        <VideoItem videoItemDetails={videoItemApiData} />
      </>
    )
  }

  onClickFailureRetryButton = () => {
    this.getVideoItemData()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureViewContainer bgColor={darkTheme ? '#000000' : '#f9f9f9'}>
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
            bgColor={darkTheme ? '#000000' : '#f9f9f9'}
          >
            <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderApiView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case videoItemDetailsApiConstants.success:
        return this.renderSuccessView()
      case videoItemDetailsApiConstants.failure:
        return this.renderFailureView()
      case videoItemDetailsApiConstants.inProgress:
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
          <BodyContainer>{this.renderApiView()}</BodyContainer>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default VideoItemDetails
