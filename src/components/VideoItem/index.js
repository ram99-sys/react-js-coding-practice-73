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

const VideoItem = props => {
  const {videoItemDetails} = props
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
  } = videoItemDetails

  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
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
                <IconButton type="button">
                  <LikeIcon
                    fontSize={20}
                    color={darkTheme ? '#7e858e' : '#64748b'}
                  />
                  <LikeText color={darkTheme ? '#7e858e' : '#64748b'}>
                    Like
                  </LikeText>
                </IconButton>
                <IconButton type="button">
                  <DislikeIcon
                    fontSize={20}
                    color={darkTheme ? '#7e858e' : '#64748b'}
                  />
                  <LikeText color={darkTheme ? '#7e858e' : '#64748b'}>
                    Dislike
                  </LikeText>
                </IconButton>
                <IconButton type="button">
                  <SaveIcon
                    fontSize={20}
                    color={darkTheme ? '#7e858e' : '#64748b'}
                  />
                  <LikeText color={darkTheme ? '#7e858e' : '#64748b'}>
                    Save
                  </LikeText>
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

export default VideoItem
