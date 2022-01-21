import {Component} from 'react'
import Cookies from 'js-cookie'
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
      <>
        <Label htmlFor="username">USERNAME</Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={usernameInput}
          onChange={this.onChangeUserInput}
        />
      </>
    )
  }

  onChangePasswordInput = event => {
    // console.log(event.target.value)
    this.setState({passwordInput: event.target.value})
  }

  renderPassword = () => {
    const {passwordInput, checkboxInput} = this.state
    return (
      <>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type={checkboxInput ? 'text' : 'password'}
          id="password"
          placeholder="Password"
          value={passwordInput}
          onChange={this.onChangePasswordInput}
        />
      </>
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
    console.log(errorMessageText)

    return (
      <LoginContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
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
            <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
          </CheckboxContainer>
          <LoginButton type="submit">Login</LoginButton>
          {errorMessage && <Errortext>*{errorMessageText}</Errortext>}
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
