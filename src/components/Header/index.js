import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {IoMdSunny} from 'react-icons/io'
import {MdHighlight} from 'react-icons/md'
import NxtwatchContext from '../../context/NxtwatchContext'
import './index.css'
import {
  HeaderContainer,
  Image,
  RightContainer,
  ProfileImage,
  LogoutButton,
  ThemeButton,
  PopupContainer,
  ConfirmButton,
  Text,
  ButtonsContainer,
  CloseButton,
} from './styledComponents'

const LIGHT_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const DARK_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const contentStyle = {
  backgroundColor: '#231f20',
  width: '320px',
  border: 'none',
  borderRadius: '20px',
}

const Header = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value
      // console.log(darkTheme)

      const onClickThemeButton = () => {
        changeTheme()
      }

      const onClickConfirmButton = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={darkTheme ? '#212121' : '#ffffff'}>
          <Link to="/">
            <Image
              src={darkTheme ? DARK_THEME_IMAGE : LIGHT_THEME_IMAGE}
              alt="website logo"
            />
          </Link>
          <RightContainer darkTheme>
            <ThemeButton
              type="button"
              onClick={onClickThemeButton}
              color={darkTheme ? '#f9f9f9' : ''}
              data-testid="theme"
            >
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
            <div className="popup-content">
              <Popup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    border={darkTheme ? '#ffffff' : ' #4f46e5'}
                    color={darkTheme ? '#ffffff' : ' #4f46e5'}
                  >
                    Logout
                  </LogoutButton>
                }
                contentStyle={contentStyle}
              >
                {close => (
                  <PopupContainer>
                    <>
                      <Text>Are you sure, you want to logout</Text>
                    </>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton
                        type="button"
                        onClick={onClickConfirmButton}
                      >
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </PopupContainer>
                )}
              </Popup>
            </div>
          </RightContainer>
        </HeaderContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default withRouter(Header)
