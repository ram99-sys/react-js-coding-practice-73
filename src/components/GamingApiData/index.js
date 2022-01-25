import {
  GamingVideosItem,
  Image,
  Title,
  ViewCount,
  NavLink,
} from './styledComponents'

const GamingApiData = props => {
  const {gamingApiDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gamingApiDetails

  return (
    <NavLink to={`/videos/${id}`}>
      <GamingVideosItem>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <Title>{title}</Title>
        <ViewCount>{viewCount} Watching Worldwide</ViewCount>
      </GamingVideosItem>
    </NavLink>
  )
}

export default GamingApiData
