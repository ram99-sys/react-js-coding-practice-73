import {formatDistanceToNow} from 'date-fns'
import NxtwatchContext from '../../context/NxtwatchContext'
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
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <TrendingSectionListItems>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <ContentSection>
                <Heading color={darkTheme ? '#ffffff' : '#181818'}>
                  {title}
                </Heading>
                <ChannelName color={darkTheme ? '#7e858e' : '#909090'}>
                  {name}
                </ChannelName>
                <ViewsAndPublishedDate>
                  <NoOfViews color={darkTheme ? '#7e858e' : '#909090'}>
                    {viewCount} views
                  </NoOfViews>
                  <DotContainer>
                    <Dot color={darkTheme ? '#7e858e' : '#909090'}>.</Dot>
                    <PublishedDate color={darkTheme ? '#7e858e' : '#909090'}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </PublishedDate>
                  </DotContainer>
                </ViewsAndPublishedDate>
              </ContentSection>
            </TrendingSectionListItems>
          </NavLink>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}
export default TrendingSectionData
