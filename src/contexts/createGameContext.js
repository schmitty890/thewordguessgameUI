import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()
// Context.Consumer, Context.Provider

class CreateGameProvider extends Component {
  state = {
    users: [],
    usersAddedToGame: [],
  }

  addUserToUsersArray = async user => {
    console.log("addUserToUsersArray")
    console.log(user)
    this.setState({
      users: [...this.state.users, user],
    })
    console.log(this.state)
  }

  addToGame = async user => {
    console.log(user)
    console.log(user[0]._id)
    this.setState({
      usersAddedToGame: [...this.state.usersAddedToGame, user[0]._id],
    })
    setTimeout(() => {
      console.log(this.state)
    }, 1000)
  }

  removeFromGame = async user => {
    console.log(user)
    let filteredArray = this.state.usersAddedToGame.filter(
      e => e !== user[0]._id
    )
    console.log(filteredArray)
    this.setState({ usersAddedToGame: filteredArray })
    setTimeout(() => {
      console.log(this.state)
    }, 1000)
  }

  startGame = async () => {
    console.log("starting game")
    // check to ensure users are added and fields are filled out
    console.log(this.state.usersAddedToGame)
    // create a new game based on the users added to the game
  }

  render() {
    return (
      <Provider
        value={{
          users: this.state.users,
          addUserToUsersArray: this.addUserToUsersArray,
          addToGame: this.addToGame,
          usersAddedToGame: this.state.usersAddedToGame,
          removeFromGame: this.removeFromGame,
          startGame: this.startGame,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { CreateGameProvider, Consumer as CreateGameConsumer }
