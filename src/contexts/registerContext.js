import React, { Component } from "react"
// import { searchTracks, getPlaylists, addToPlaylist } from "../api/spotify"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class SpotifySearchProvider extends Component {
  state = {
    searchResults: "",
  }

  getSearchResults = async value => {
    console.log("get search")
    value.preventDefault()
    console.log(value)
    console.log(value.nativeEvent.target.value)
  }

  render() {
    return (
      <Provider
        value={{
          getSearchResults: this.getSearchResults,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { SpotifySearchProvider, Consumer as SpotifySearchConsumer }
