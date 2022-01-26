import NxtwatchContext from '../../context/NxtwatchContext'

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
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NavLink to={`/videos/${id}`}>
            <GamingVideosItem>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <Title color={darkTheme ? '#ffffff' : '#181818'}>{title}</Title>
              <ViewCount color={darkTheme ? '#7e858e' : '#909090'}>
                {viewCount} Watching Worldwide
              </ViewCount>
            </GamingVideosItem>
          </NavLink>
        )
      }}
    </NxtwatchContext.Consumer>
  )
}

export default GamingApiData
