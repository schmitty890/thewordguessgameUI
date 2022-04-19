import React, { Component } from "react"
import {
  getUsersDailyGuesses,
  dailyGlobalUserGuess,
} from "../api/dailyGlobalGame"

const { Provider, Consumer } = React.createContext()

class GlobalGameProvider extends Component {
  state = {
    userGlobalGameStats: [],
  }

  componentDidMount() {
    this.getGuesses()
  }

  getGuesses = async () => {
    const id = localStorage.getItem("_id")
    const usersGuesses = await getUsersDailyGuesses(id)
    console.log(usersGuesses)
    this.setState({
      userGlobalGameStats: usersGuesses,
    })
    console.log(this.state)
  }

  makeGuess = async guess => {
    console.log("make guess")
    console.log(guess)
    const response = await dailyGlobalUserGuess(guess)
    console.log(response)
    this.getGuesses()
  }

  render() {
    return (
      <Provider
        value={{
          userGlobalGameStats: this.state.userGlobalGameStats,
          makeGuess: this.makeGuess,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { GlobalGameProvider, Consumer as GlobalGameConsumer }
