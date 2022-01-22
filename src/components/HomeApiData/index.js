import {formatDistanceToNow} from 'date-fns'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  VideoItem,
  Image,
  ContentContainer,
  ThumbNail,
  ChannelContentContainer,
  Content,
  Name,
  ViewsAndPublishedDate,
  NoOfViews,
  PublishedDate,
  DotContainer,
  Dot,
  NavLink,
} from './styledComponents'

const HomeApiData = props => {
  const {videoDetails} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  return (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoItem>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <ContentContainer>
                <ThumbNail src={profileImageUrl} alt="channel logo" />
                <ChannelContentContainer>
                  <Content color={darkTheme ? '#ffffff' : '#181818'}>
                    {title}
                  </Content>
                  <Name>{name}</Name>
                  <ViewsAndPublishedDate>
                    <NoOfViews>{viewCount} views</NoOfViews>
                    <DotContainer>
                      <Dot>.</Dot>
                      <PublishedDate>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </PublishedDate>
                    </DotContainer>
                  </ViewsAndPublishedDate>
                </ChannelContentContainer>
              </ContentContainer>
            </VideoItem>
          </NavLink>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default HomeApiData
