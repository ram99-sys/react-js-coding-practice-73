import React from 'react'

const NxtwatchContext = React.createContext({
  darkTheme: false,
  savedVideosList: [],
  changeTheme: () => {},
  savedVideosListStatus: [],
  addingOrRemovingSavedVideo: () => {},
})

export default NxtwatchContext
