import React, { Component } from "react"
import ReleaseNotesData from "../data/releaseNotes.json"

const { Provider, Consumer } = React.createContext()

class NotificationProvider extends Component {
  state = {
    seen: true,
    title: "",
    description: "",
  }

  componentDidMount() {
    debugger
    this.hasUserSeenNotification()
  }

  hasUserSeenNotification = async () => {
    const userHasSeen = localStorage.getItem("notification")
    const notification_id = localStorage.getItem("notification_id")

    console.log(ReleaseNotesData.releases)
    const last_element = ReleaseNotesData.releases.findLast(item => {
      return item
    })
    this.setState({
      show: last_element.notification.show,
      title: last_element.notification.title,
      description: last_element.notification.description,
    })
    console.log(last_element.date)
    console.log(notification_id)
    console.log(notification_id === last_element.date)
    if (notification_id === last_element.date) {
      this.setState({
        seen: true,
      })
    } else {
      this.setState({
        seen: false,
      })
    }
    // console.log(last_element)
    // console.log(notification_id)
    // console.log(userHasSeen)
  }

  setUserHasSeenNotification = async () => {
    const last_element = ReleaseNotesData.releases.findLast(item => {
      return item
    })
    console.log("setUserHasSeenNotification")
    localStorage.setItem("notification", "seen")
    localStorage.setItem("notification_id", last_element.date)
  }

  // getUsers = async () => {
  //   const allUsers = await totalUsers()
  //   // console.log(allUsers)
  //   this.setState({
  //     totalUsers: allUsers.data.length,
  //   })
  // }

  render() {
    return (
      <Provider
        value={{
          seen: this.state.seen,
          title: this.state.title,
          description: this.state.description,
          setUserHasSeenNotification: this.setUserHasSeenNotification,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { NotificationProvider, Consumer as NotificationConsumer }
