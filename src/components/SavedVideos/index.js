import NxtwatchContext from '../../context/NxtwatchContext'
import {
  SavedVideosContainer,
  BodySection,
  SidebarContainer,
  BodyContainer,
  SavedVideosListContainer,
  NoSavedVideosContainer,
  NoSavedVideosHeading,
  NoSavedVideosText,
  Image,
  HeaderContainer,
  Icon,
  SavedVideosHeading,
  IconContainer,
  SavedVideosView,
} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'
import SavedVideosSectionData from '../SavedVideosSectionData'

const SavedVideos = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {darkTheme, savedVideosList} = value
      console.log(savedVideosList)

      const renderSavedVideosList = () => {
        const savedVideosListLength = savedVideosList.length
        return savedVideosListLength === 0 ? (
          <NoSavedVideosContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading color={darkTheme ? '#ffffff' : '#1e293b'}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosText color={darkTheme ? '#ffffff' : '#475569'}>
              You can save your videos while watching them
            </NoSavedVideosText>
          </NoSavedVideosContainer>
        ) : (
          <SavedVideosView data-testid="savedVideos">
            <HeaderContainer bgColor={darkTheme ? '#231f20' : '#f1f5f9'}>
              <IconContainer bgColor={darkTheme ? '#181818' : '#ebebeb'}>
                <Icon color="#ff0000" fontSize={30} />
              </IconContainer>
              <SavedVideosHeading color={darkTheme ? '#ffffff' : '#00306e'}>
                Saved Videos
              </SavedVideosHeading>
            </HeaderContainer>
            <SavedVideosListContainer
              bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}
            >
              {savedVideosList.map(eachObject => (
                <SavedVideosSectionData
                  key={eachObject.id}
                  trendingApiDetails={eachObject}
                />
              ))}
            </SavedVideosListContainer>
          </SavedVideosView>
        )
      }

      return (
        <SavedVideosContainer data-testid="savedVideos">
          <Header />
          <BodySection>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <BodyContainer>{renderSavedVideosList()}</BodyContainer>
          </BodySection>
        </SavedVideosContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SavedVideos
