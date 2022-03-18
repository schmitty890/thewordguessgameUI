import React, { Component } from "react"
import { getUserDataObject } from "../api/getUserDataObject"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class UserAuthProvider extends Component {
  state = {
    loggedIn: false,
    userID: "",
  }

  componentWillMount() {
    // console.log("componentWillMount")
    this.getUser()
  }

  getUser = async () => {
    console.log(window.localStorage.getItem("_id"))
    if (window.localStorage.getItem("_id")) {
      this.setState({
        loggedIn: true,
        userID: window.localStorage.getItem("_id"),
        admin: window.localStorage.getItem("admin"),
        loading: false,
      })

      const urlPath = window.location.pathname
      switch (urlPath) {
        case "/":
          window.location.href = "/dashboard"
          break
        default:
          console.log("do nothing, user is logged in")
          break
      }
    } else {
      const urlPath = window.location.pathname

      switch (urlPath) {
        case "/dashboard":
          window.location.href = "/"
          break
        default:
          console.log("do nothing, user is not logged in")
          break
      }

      // console.log("do nothing")
      this.setState({ loading: false })
    }
  }

  logState = () => {
    setTimeout(() => {
      console.log(this.state)
    }, 3000)
  }
  logout = () => {
    console.log("log user out clear local storage")
    localStorage.clear()
    window.location.href = "/"
  }

  render() {
    return (
      <Provider
        value={{
          userID: this.state.userID,
          loggedIn: this.state.loggedIn,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserAuthProvider, Consumer as UserAuthConsumer }
