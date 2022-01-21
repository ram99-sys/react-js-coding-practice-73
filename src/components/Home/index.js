import {Component} from 'react'
import Header from '../Header'
import Banner from '../Banner'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  ContentSection,
} from './styledComponents'
import Sidebar from '../Sidebar'

class Home extends Component {
  render() {
    return (
      <HomeContainer data-testid="home">
        <Header />
        <BodySection>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <ContentSection>
            <Banner />
          </ContentSection>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default Home
