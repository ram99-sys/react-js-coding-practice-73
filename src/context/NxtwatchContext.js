import React from 'react'

const NxtwatchContext = React.createContext({
  darkTheme: false,
  savedVideosList: [],
  isVideoSaved: false,
  changeTheme: () => {},
  savedVideosListStatus: [],
  addingOrRemovingSavedVideo: () => {},
})

export default NxtwatchContext
