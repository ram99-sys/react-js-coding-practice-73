import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerContainer,
  Image,
  LogoAndCloseContainer,
  BannerHeading,
  BannerButton,
  CloseButton,
} from './styledComponents'

class Banner extends Component {
  state = {displayBanner: true}

  onClickCloseButton = () => {
    this.setState({displayBanner: false})
  }

  render() {
    const {displayBanner} = this.state
    return (
      displayBanner && (
        <BannerContainer
          imageUrl="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
          data-testid="banner"
        >
          <LogoAndCloseContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <CloseButton
              type="button"
              onClick={this.onClickCloseButton}
              data-testid="close"
            >
              <AiOutlineClose />
            </CloseButton>
          </LogoAndCloseContainer>
          <BannerHeading>
            Buy Nxt Watch Premium prepaid plans width UPI
          </BannerHeading>
          <BannerButton type="button" data-testid="searchButton">
            GET IT NOW
          </BannerButton>
        </BannerContainer>
      )
    )
  }
}
export default Banner
