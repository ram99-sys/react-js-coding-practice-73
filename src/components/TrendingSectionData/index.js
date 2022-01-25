import {formatDistanceToNow} from 'date-fns'
import {
  Image,
  TrendingSectionListItems,
  ContentSection,
  Heading,
  ChannelName,
  ViewsAndPublishedDate,
  NoOfViews,
  PublishedDate,
  DotContainer,
  Dot,
  NavLink,
} from './styledComponents'

const TrendingSectionData = props => {
  const {trendingApiDetails} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = trendingApiDetails

  return (
    <NavLink to={`/videos/${id}`}>
      <TrendingSectionListItems>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <ContentSection>
          <Heading>{title}</Heading>
          <ChannelName>{name}</ChannelName>
          <ViewsAndPublishedDate>
            <NoOfViews>{viewCount} views</NoOfViews>
            <DotContainer>
              <Dot>.</Dot>
              <PublishedDate>
                {formatDistanceToNow(new Date(publishedAt))}
              </PublishedDate>
            </DotContainer>
          </ViewsAndPublishedDate>
        </ContentSection>
      </TrendingSectionListItems>
    </NavLink>
  )
}
export default TrendingSectionData
