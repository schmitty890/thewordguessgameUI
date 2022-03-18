import React, { Component } from "react"
import { totalUsers } from "../api/totalUsers"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class TotalUsersProvider extends Component {
  state = {
    totalUsers: null,
  }

  componentDidMount() {
    // console.log("componentWillMount")
    this.getUsers()
  }

  getUsers = async () => {
    const allUsers = await totalUsers()
    // console.log(allUsers)
    this.setState({
      totalUsers: allUsers.data.length,
    })
  }

  render() {
    return (
      <Provider
        value={{
          totalUsers: this.state.totalUsers,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { TotalUsersProvider, Consumer as TotalUsersConsumer }
