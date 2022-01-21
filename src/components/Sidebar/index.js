import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  SidebarContainer,
  LinksSection,
  ContactUsSection,
  LinkText,
  LinkItem,
  HomeIcon,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
  Heading,
  IconsSection,
  FooterIcons,
  FooterText,
  SidebarLink,
} from './styledComponents'
import './index.css'

class Sidebar extends Component {
  render() {
    // console.log(this.props)
    const {location} = this.props
    const {pathname} = location
    console.log(pathname)

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <SidebarContainer bgColor={darkTheme ? '#181818' : '#ffffff'}>
              <LinksSection>
                <LinkItem>
                  <SidebarLink
                    to="/"
                    style={{textDecoration: 'none'}}
                    bgColor={pathname === '/' && '#909090'}
                  >
                    <HomeIcon
                      fontSize={20}
                      color={pathname === '/' ? '#ff0000' : '#94a3b8'}
                    />
                    {darkTheme ? (
                      <LinkText
                        color={pathname === '/' ? '#ffffff' : '#cbd5e1'}
                        fontWeight={pathname === '/' ? '700' : '500'}
                      >
                        Home
                      </LinkText>
                    ) : (
                      <LinkText
                        color={pathname === '/' ? ' #00306e' : '#383838'}
                        fontWeight={pathname === '/' ? '700' : '500'}
                      >
                        Home
                      </LinkText>
                    )}
                  </SidebarLink>
                </LinkItem>
                <LinkItem>
                  <SidebarLink
                    to="/trending"
                    style={{textDecoration: 'none'}}
                    bgColor={pathname === '/trending' && '#909090'}
                  >
                    <TrendingIcon
                      fontSize={20}
                      color={pathname === '/trending' ? '#ff0000' : '#94a3b8'}
                    />
                    {darkTheme ? (
                      <LinkText
                        color={pathname === '/trending' ? '#ffffff' : '#cbd5e1'}
                        fontWeight={pathname === '/trending' ? '700' : '500'}
                      >
                        Trending
                      </LinkText>
                    ) : (
                      <LinkText
                        color={
                          pathname === '/trending' ? ' #00306e' : '#383838'
                        }
                        fontWeight={pathname === '/trending' ? '700' : '500'}
                      >
                        Trending
                      </LinkText>
                    )}
                  </SidebarLink>
                </LinkItem>
                <LinkItem>
                  <SidebarLink
                    to="/gaming"
                    style={{textDecoration: 'none'}}
                    bgColor={pathname === '/gaming' && '#909090'}
                  >
                    <GamingIcon
                      fontSize={20}
                      color={pathname === '/gaming' ? '#ff0000' : '#94a3b8'}
                    />
                    {darkTheme ? (
                      <LinkText
                        color={pathname === '/gaming' ? '#ffffff' : '#cbd5e1'}
                        fontWeight={pathname === '/gaming' ? '700' : '500'}
                      >
                        Gaming
                      </LinkText>
                    ) : (
                      <LinkText
                        color={pathname === '/gaming' ? ' #00306e' : '#383838'}
                        fontWeight={pathname === '/gaming' ? '700' : '500'}
                      >
                        Gaming
                      </LinkText>
                    )}
                  </SidebarLink>
                </LinkItem>
                <LinkItem>
                  <SidebarLink
                    to="/saved-videos"
                    style={{textDecoration: 'none'}}
                    bgColor={pathname === '/saved-videos' && '#909090'}
                  >
                    <SavedVideosIcon
                      fontSize={20}
                      color={
                        pathname === '/saved-videos' ? '#ff0000' : '#94a3b8'
                      }
                    />
                    {darkTheme ? (
                      <LinkText
                        color={
                          pathname === '/saved-videos' ? '#ffffff' : '#cbd5e1'
                        }
                        fontWeight={
                          pathname === '/saved-videos' ? '700' : '500'
                        }
                      >
                        Saved Videos
                      </LinkText>
                    ) : (
                      <LinkText
                        color={
                          pathname === '/saved-videos' ? ' #00306e' : '#383838'
                        }
                        fontWeight={
                          pathname === '/saved-videos' ? '700' : '500'
                        }
                      >
                        Saved Videos
                      </LinkText>
                    )}
                  </SidebarLink>
                </LinkItem>
              </LinksSection>
              <ContactUsSection>
                <Heading>CONTACT US</Heading>
                <IconsSection>
                  <FooterIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <FooterIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <FooterIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsSection>
                <FooterText>
                  Enjoy! Now to see your channels and recommendations!
                </FooterText>
              </ContactUsSection>
            </SidebarContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
