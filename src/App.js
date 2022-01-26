import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NxtwatchContext from './context/NxtwatchContext'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideosList: [],
    savedVideosListStatus: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  addingOrRemovingSavedVideo = async videoItemDetails => {
    const {
      id,
      thumbnailUrl,
      title,
      isSaved,
      viewCount,
      publishedAt,
      name,
    } = videoItemDetails
    const videosListStatus = {id, isSaved}
    const VideosList = {id, thumbnailUrl, title, viewCount, publishedAt, name}
    const {savedVideosListStatus, savedVideosList} = this.state
    const findVideoStatus = savedVideosListStatus.find(
      eachVideoStatus => eachVideoStatus.id === id,
    )
    if (findVideoStatus) {
      await this.setState(prevState => ({
        savedVideosListStatus: prevState.savedVideosListStatus.map(
          eachVideoStatus => {
            if (eachVideoStatus.id === id) {
              const updatedData = !eachVideoStatus.isSaved
              return {...eachVideoStatus, isSaved: updatedData}
            }
            return eachVideoStatus
          },
        ),
      }))
    } else {
      await this.setState({
        savedVideosListStatus: [...savedVideosListStatus, videosListStatus],
      })
      await this.setState(prevState => ({
        savedVideosListStatus: prevState.savedVideosListStatus.map(
          eachVideoStatus => {
            if (eachVideoStatus.id === id) {
              const updatedData = !eachVideoStatus.isSaved
              return {...eachVideoStatus, isSaved: updatedData}
            }
            return eachVideoStatus
          },
        ),
      }))
    }
    const findVideo = savedVideosList.find(eachVideo => eachVideo.id === id)
    if (findVideo) {
      const updatedList = savedVideosList.filter(
        eachObject => eachObject.id !== id,
      )
      await this.setState({savedVideosList: updatedList})
    } else {
      await this.setState({savedVideosList: [...savedVideosList, VideosList]})
    }
  }

  render() {
    const {darkTheme, savedVideosList, savedVideosListStatus} = this.state
    // console.log(savedVideosList)
    // console.log(savedVideosListStatus)

    return (
      <NxtwatchContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          savedVideosListStatus,
          addingOrRemovingSavedVideo: this.addingOrRemovingSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
