import React, { Component } from "react"
import { getUserDataObject, getUserById } from "../api/getUserDataObject"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class UserAuthProvider extends Component {
  state = {
    loggedIn: false,
    userID: "",
    user: null,
  }

  componentDidMount() {
    // console.log("componentWillMount")
    this.getUser()
  }

  getUser = async () => {
    // console.log(window.localStorage.getItem("_id"))
    const userLocalStorageId = window.localStorage.getItem("_id")
    console.log(userLocalStorageId)
    if (userLocalStorageId) {
      const user = await getUserById(userLocalStorageId)
      console.log(user)
      this.setState({
        loggedIn: true,
        user: user,
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
        case "/dashboard/":
        case "/dashboard":
        case "/profile/":
        case "/profile":
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
          user: this.state.user,
          loggedIn: this.state.loggedIn,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserAuthProvider, Consumer as UserAuthConsumer }
