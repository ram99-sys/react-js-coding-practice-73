import {Component} from 'react'
import Cookies from 'js-cookie'
import {HomeContainer, BodySection, SidebarContainer} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'

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
    }
    console.log(videoItemData)
  }

  render() {
    return (
      <HomeContainer data-testid="home">
        <Header />
        <BodySection>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default VideoItemDetails
