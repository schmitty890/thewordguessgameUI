import React, { Component } from "react"
import {
  getUsersDailyGuesses,
  dailyGlobalUserGuess,
  determineResettingDailyGuesses,
  determineDailyWordLength,
} from "../api/dailyGlobalGame"

const { Provider, Consumer } = React.createContext()

class GlobalGameProvider extends Component {
  state = {
    userGlobalGameStats: [],
    todaysWordLength: null,
  }

  componentWillMount() {
    this.determineDailyWordLength()
    this.determineResettingGuesses()
  }
  componentDidMount() {
    this.getGuesses()
  }

  determineResettingGuesses = async () => {
    const reset = await determineResettingDailyGuesses()
    console.log(reset)
    console.log("HERE HERE")
    if (reset) {
      if (reset.data.message === "refresh your browser") {
        console.log(reset.data.message)
        window.location.reload()
      }
    }
  }
  determineDailyWordLength = async () => {
    const response = await determineDailyWordLength()
    console.log(response)
    this.setState({
      todaysWordLength: response.data,
    })
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
    return response
  }

  render() {
    return (
      <Provider
        value={{
          userGlobalGameStats: this.state.userGlobalGameStats,
          makeGuess: this.makeGuess,
          todaysWordLength: this.state.todaysWordLength,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { GlobalGameProvider, Consumer as GlobalGameConsumer }
