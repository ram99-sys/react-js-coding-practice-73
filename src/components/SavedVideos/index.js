import NxtwatchContext from '../../context/NxtwatchContext'
import {HomeContainer, BodySection, SidebarContainer} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'

const SavedVideos = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {darkTheme, savedVideosList} = value
      console.log(savedVideosList)
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
    }}
  </NxtwatchContext.Consumer>
)

export default SavedVideos
