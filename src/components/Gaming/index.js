import {HomeContainer, BodySection, SidebarContainer} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Gaming = () => (
  <HomeContainer data-testid="home">
    <Header />
    <BodySection>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
    </BodySection>
  </HomeContainer>
)

export default Gaming
