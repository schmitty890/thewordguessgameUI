import axios from "axios"
export const dailyGlobalUserGuess = async data => {
  console.log(data)
  console.log("pass data to backend")

  console.log(data.wordGuess)
  const dataObj = {
    userID: localStorage.getItem("_id"),
    guesses: [
      {
        word: data.wordGuess,
      },
    ],
  }
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi.herokuapp.com"

    console.log("log user in with data")

    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/globalDailyGameWord`, dataObj)
      .then(res => {
        console.log(res)
        return res
      })
      .catch(error => {
        // console.log(error.response)
        return error.response
      })

    return response
  } catch (err) {
    // Error handling here
    console.log(err.message)
    console.log(err)
    return err.message
  }
}

export const getUsersDailyGuesses = async id => {
  console.log("get users daily guesses and save them to our context")

  console.log(id)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi.herokuapp.com"

    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/getUsersGuesses/${id}`)
    console.log(response)

    return response.data
  } catch (error) {
    console.log(error) // catches both errors
  }
}
