import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtwatchContext from '../../context/NxtwatchContext'
import './index.css'
import {
  LoginContainer,
  LoginForm,
  Image,
  InputContainer,
  Label,
  Input,
  CheckBoxInput,
  CheckboxLabel,
  CheckboxContainer,
  LoginButton,
  Errortext,
} from './styledComponents'

const LIGHT_THEME_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

// const DARK_THEME_IMAGE =
//   'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    checkboxInput: '',
    errorMessageText: '',
    errorMessage: false,
  }

  onChangeUserInput = event => {
    // console.log(event.target.value)
    this.setState({usernameInput: event.target.value})
  }

  renderUsername = () => {
    const {usernameInput} = this.state
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Label
                htmlFor="username"
                color={darkTheme ? '#ffffff' : '#475569'}
              >
                USERNAME
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={usernameInput}
                onChange={this.onChangeUserInput}
              />
            </>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  onChangePasswordInput = event => {
    // console.log(event.target.value)
    this.setState({passwordInput: event.target.value})
  }

  renderPassword = () => {
    const {passwordInput, checkboxInput} = this.state
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Label
                htmlFor="password"
                color={darkTheme ? '#ffffff' : '#475569'}
              >
                PASSWORD
              </Label>
              <Input
                type={checkboxInput ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                value={passwordInput}
                onChange={this.onChangePasswordInput}
              />
            </>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  onChangeCheckbox = event => {
    this.setState({checkboxInput: event.target.checked})
    // console.log(event.target.checked)
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({errorMessageText: errorMessage, errorMessage: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {checkboxInput, errorMessageText, errorMessage} = this.state
    // console.log(errorMessageText)
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <LoginContainer bgColor={darkTheme ? '#181818' : '#ffffff'}>
              <LoginForm
                onSubmit={this.onSubmitForm}
                bgColor={darkTheme ? '#0f0f0f' : '#f8fafc'}
              >
                <Image src={LIGHT_THEME_IMAGE} alt="website logo" />
                <InputContainer>{this.renderUsername()}</InputContainer>
                <InputContainer>{this.renderPassword()}</InputContainer>
                <CheckboxContainer>
                  <CheckBoxInput
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeCheckbox}
                    value={checkboxInput}
                  />
                  <CheckboxLabel
                    htmlFor="checkbox"
                    color={darkTheme ? '#ffffff' : '#1e293b'}
                  >
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMessage && <Errortext>*{errorMessageText}</Errortext>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Login
