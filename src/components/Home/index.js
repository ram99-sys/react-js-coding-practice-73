import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {GrFormSearch} from 'react-icons/gr'
import Cookies from 'js-cookie'
import Header from '../Header'
import Banner from '../Banner'
import HomeApiData from '../HomeApiData'
import NxtwatchContext from '../../context/NxtwatchContext'
import {
  HomeContainer,
  BodySection,
  SidebarContainer,
  ContentSection,
  BodyContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  ApiData,
  LoaderContainer,
  NoResultsContainer,
  NoResultsImage,
  ResultsNotFoundHeading,
  Message,
  RetryButton,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewText,
  FailureViewRetryButton,
} from './styledComponents'
import Sidebar from '../Sidebar'

const homeVideosApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: homeVideosApiStatusConstants.initial,
    homeVideosData: [],
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({apiStatus: homeVideosApiStatusConstants.inProgress})
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    // console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    // console.log(response)
    const data = await response.json()
    if (response.ok) {
      // console.log(data)
      /*
      const homeVideosApiData = data.videos.map(eachObject => ({
        channel: eachObject.channel,
        id: eachObject.id,
        publishedAt: eachObject.published_at,
        thumbnailUrl: eachObject.thumbnail_url,
        title: eachObject.title,
        viewCount: eachObject.view_count,
      }))
      console.log(homeVideosApiData)
      */
      const homeVideosApiData = data.videos.map(eachObject => ({
        name: eachObject.channel.name,
        profileImageUrl: eachObject.channel.profile_image_url,
        id: eachObject.id,
        publishedAt: eachObject.published_at,
        thumbnailUrl: eachObject.thumbnail_url,
        title: eachObject.title,
        viewCount: eachObject.view_count,
      }))
      this.setState({
        apiStatus: homeVideosApiStatusConstants.success,
        homeVideosData: homeVideosApiData,
      })
    } else {
      this.setState({apiStatus: homeVideosApiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getHomeVideosData()
  }

  renderSearchBar = () => {
    const {searchInput} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <SearchBarContainer
              border={darkTheme ? '#231f20' : '#e2e8f0'}
              data-testid="searchButton"
            >
              <SearchInput
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                bgColor={darkTheme ? '#0f0f0f' : '#ffffff'}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.onClickSearchButton}
                bgColor={darkTheme ? '#212121' : '#f9f9f9'}
                border={darkTheme ? '#231f20' : '#e2e8f0'}
              >
                <GrFormSearch fontSize={20} />
              </SearchButton>
            </SearchBarContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }

  onClickRetryButton = () => {
    this.getHomeVideosData()
  }

  renderNoResultsView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <ResultsNotFoundHeading color={darkTheme ? '#ffffff' : '#1e293b'}>
              No Search results found
            </ResultsNotFoundHeading>
            <Message color={darkTheme ? '#64748b' : '#475569'}>
              Try different key words or remove search filter
            </Message>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {homeVideosData} = this.state
    // console.log(homeVideosData)
    const apiListLength = homeVideosData.length

    return apiListLength > 0 ? (
      <ApiData>
        {homeVideosData.map(eachObject => (
          <HomeApiData key={eachObject.id} videoDetails={eachObject} />
        ))}
      </ApiData>
    ) : (
      this.renderNoResultsView()
    )
  }

  onClickFailureRetryButton = () => {
    this.getHomeVideosData()
  }

  renderFailureView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureViewContainer>
            <FailureViewImage
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureViewHeading color={darkTheme ? '#ffffff' : '#1e293b'}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewText color={darkTheme ? '#64748b' : '#7e858e'}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewText>
            <FailureViewRetryButton
              type="button"
              onClick={this.onClickFailureRetryButton}
            >
              Retry
            </FailureViewRetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderInProgressView = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderContainer
            className="loader-container"
            data-testid="loader"
            bgColor={darkTheme ? '#000000' : '#f9f9f9'}
          >
            <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

  renderResultsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case homeVideosApiStatusConstants.success:
        return this.renderSuccessView()
      case homeVideosApiStatusConstants.failure:
        return this.renderFailureView()
      case homeVideosApiStatusConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  renderBodySection = () => (
    <NxtwatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <BodyContainer bgColor={darkTheme ? '#0f0f0f' : '#f9f9f9'}>
            {this.renderSearchBar()}
            {this.renderResultsView()}
          </BodyContainer>
        )
      }}
    </NxtwatchContext.Consumer>
  )

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
            {this.renderBodySection()}
          </ContentSection>
        </BodySection>
      </HomeContainer>
    )
  }
}

export default Home
