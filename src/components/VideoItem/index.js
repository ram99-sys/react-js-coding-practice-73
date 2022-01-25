import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoContainer,
  VideoItemContainer,
  VideoText,
  ViewsAndPublishedDate,
  NoOfViews,
  Dot,
  DotContainer,
  PublishedDate,
  ViewsAndLikeContainer,
  LikeAndDislikeContainer,
  LikeText,
  IconButton,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  Line,
  ProfileAndSubscribers,
  ProfileImage,
  SubscribersAndTitleContainer,
  Name,
  SubscribersCount,
  DescriptionText,
} from './styledComponents'
import NxtwatchContext from '../../context/NxtwatchContext'

class VideoItem extends Component {
  state = {liked: false, disliked: false}

  onClickLikeButton = async () => {
    const {disliked, liked} = this.state
    if (disliked) {
      await this.setState(prevState => ({disliked: !prevState.disliked}))
    }
    if (liked) {
      await this.setState(prevState => ({liked: !prevState.liked}))
    } else {
      await this.setState(prevState => ({liked: !prevState.liked}))
    }
  }

  onClickDislikeButton = async () => {
    const {disliked, liked} = this.state
    if (liked) {
      await this.setState(prevState => ({liked: !prevState.liked}))
    }
    if (disliked) {
      await this.setState(prevState => ({disliked: !prevState.disliked}))
    } else {
      await this.setState(prevState => ({disliked: !prevState.disliked}))
    }
  }

  render() {
    const {videoItemDetails} = this.props
    const {liked, disliked} = this.state
    let saved = false
    const {
      name,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      thumbnailUrl,
      title,
      id,
      videoUrl,
      viewCount,
      isSaved,
    } = videoItemDetails

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {
            darkTheme,
            addingOrRemovingSavedVideo,
            isVideoSaved,
            savedVideosList,
            savedVideosListStatus,
          } = value

          const onClickToVideo = async () => {
            await addingOrRemovingSavedVideo(videoItemDetails)
          }

          // console.log(savedVideosListStatus)

          const findStatus = savedVideosListStatus.find(
            eachVideo => eachVideo.id === id,
          )
          // console.log(findStatus)
          if (
            !(savedVideosListStatus.length === 0 || findStatus === undefined)
          ) {
            saved = findStatus.isSaved
          }

          // console.log(saved)

          return (
            <VideoItemContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
              <VideoContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width={`${100}%`}
                  height={`${100}%`}
                />
              </VideoContainer>
              <VideoText color={darkTheme ? '#ffffff' : '#000000'}>
                {title}
              </VideoText>
              <ViewsAndLikeContainer>
                <ViewsAndPublishedDate>
                  <NoOfViews color={darkTheme ? '#7e858e' : '#64748b'}>
                    {viewCount} views
                  </NoOfViews>
                  <DotContainer>
                    <Dot color={darkTheme ? '#7e858e' : '#64748b'}>.</Dot>
                    <PublishedDate color={darkTheme ? '#7e858e' : '#64748b'}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </PublishedDate>
                  </DotContainer>
                </ViewsAndPublishedDate>
                <LikeAndDislikeContainer>
                  <IconButton
                    type="button"
                    onClick={this.onClickLikeButton}
                    color={liked ? '#2563eb' : '#64748b'}
                  >
                    <LikeIcon fontSize={20} />
                    <LikeText>Like</LikeText>
                  </IconButton>
                  <IconButton
                    type="button"
                    onClick={this.onClickDislikeButton}
                    color={disliked ? '#2563eb' : '#64748b'}
                  >
                    <DislikeIcon fontSize={20} />
                    <LikeText>Dislike</LikeText>
                  </IconButton>
                  <IconButton
                    type="button"
                    onClick={onClickToVideo}
                    color={saved ? '#2563eb' : '#64748b'}
                  >
                    <SaveIcon fontSize={20} />
                    <LikeText>{saved ? 'Saved' : 'Save'}</LikeText>
                  </IconButton>
                </LikeAndDislikeContainer>
              </ViewsAndLikeContainer>
              <Line bgColor={darkTheme ? '#606060' : '#64748b'} />
              <ProfileAndSubscribers>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <SubscribersAndTitleContainer>
                  <Name color={darkTheme ? '#ffffff' : '#000000'}>{name}</Name>
                  <SubscribersCount color={darkTheme ? '#7e858e' : '#64748b'}>
                    {subscriberCount} subscribers
                  </SubscribersCount>
                </SubscribersAndTitleContainer>
              </ProfileAndSubscribers>
              <DescriptionText color={darkTheme ? '#ffffff' : '#64748b'}>
                {description}
              </DescriptionText>
            </VideoItemContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoItem
