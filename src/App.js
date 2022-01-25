import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NxtwatchContext from './context/NxtwatchContext'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideosList: [],
    isVideoSaved: false,
    savedVideosListStatus: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  addingOrRemovingSavedVideo = async videoItemDetails => {
    const {id, thumbnailUrl, title, isSaved} = videoItemDetails
    const videosListStatus = {id, isSaved}
    const {savedVideosListStatus} = this.state
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
  }

  render() {
    const {
      darkTheme,
      isVideoSaved,
      savedVideosList,
      savedVideosListStatus,
    } = this.state
    // console.log(savedVideosList)
    // console.log(savedVideosListStatus)

    return (
      <NxtwatchContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          isVideoSaved,
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
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
