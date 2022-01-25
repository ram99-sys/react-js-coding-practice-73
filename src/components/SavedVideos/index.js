import NxtwatchContext from '../../context/NxtwatchContext'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  BodyContainer,
  SavedVideosListContainer,
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
          <h1>No data</h1>
        ) : (
          <SavedVideosListContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
            {savedVideosList.map(eachObject => (
              <SavedVideosSectionData
                key={eachObject.id}
                trendingApiDetails={eachObject}
              />
            ))}
          </SavedVideosListContainer>
        )
      }

      return (
        <HomeContainer data-testid="home">
          <Header />
          <BodySection>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <BodyContainer>{renderSavedVideosList()}</BodyContainer>
          </BodySection>
        </HomeContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SavedVideos
