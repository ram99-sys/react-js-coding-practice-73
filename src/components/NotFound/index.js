import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  ContentSection,
  Image,
  NotFoundText,
  NotFoundHeading,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtwatchContext from '../../context/NxtwatchContext'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <HomeContainer data-testid="home">
          <Header />
          <BodySection>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <ContentSection bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
              <Image
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading color={darkTheme ? '#ffffff' : '#1e293b'}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText color={darkTheme ? '#64748b' : '#7e858e'}>
                we are sorry, the page you requested could not be found.
              </NotFoundText>
            </ContentSection>
          </BodySection>
        </HomeContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound
