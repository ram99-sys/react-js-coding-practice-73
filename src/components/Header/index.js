import {IoMdSunny} from 'react-icons/io'
import {MdHighlight} from 'react-icons/md'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  HeaderContainer,
  Image,
  RightContainer,
  ProfileImage,
  LogoutButton,
  ThemeButton,
} from './styledComponents'

const LIGHT_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const DARK_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value
      console.log(darkTheme)

      const onClickThemeButton = () => {
        changeTheme()
      }

      return (
        <HeaderContainer>
          <Image
            src={darkTheme ? DARK_THEME_IMAGE : LIGHT_THEME_IMAGE}
            alt="nxt watch logo"
          />
          <RightContainer>
            <ThemeButton type="button" onClick={onClickThemeButton}>
              {darkTheme ? (
                <IoMdSunny fontSize={30} />
              ) : (
                <MdHighlight fontSize={30} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutButton type="button">Logout</LogoutButton>
          </RightContainer>
        </HeaderContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default Header