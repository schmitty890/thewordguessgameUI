import axios from "axios"
export const dailyGlobalUserGuess = async data => {
  console.log(data)
  console.log("pass data to backend")

  console.log(data.wordGuess)
  const dateObj = new Date()
  const month = dateObj.getMonth() + 1 //months from 1-12
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const dataObj = {
    userID: localStorage.getItem("_id"),
    guesses: [
      {
        word: data.wordGuess,
      },
    ],
    month,
    day,
    year,
  }
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"

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
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"

    // post data to a url endpoint
    const response = await axios.get(`${baseURL}/getUsersGuesses/${id}`)
    console.log(response)

    return response.data
  } catch (error) {
    console.log(error) // catches both errors
  }
}

export const determineDailyWordLength = async data => {
  console.log("determineDailyWordLength")
  const dateObj = new Date()
  const month = dateObj.getMonth() + 1 //months from 1-12
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const dataObj = {
    month,
    day,
    year,
  }
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"

    console.log("we are calling the get daily word length api")
    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/getDailyWordLength`, dataObj)
      .then(res => {
        console.log("response")
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

export const determineResettingDailyGuesses = async data => {
  const dateObj = new Date()
  const month = dateObj.getMonth() + 1 //months from 1-12
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  const dataObj = {
    userID: localStorage.getItem("_id"),
    month,
    day,
    year,
  }
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"

    console.log("log user in with data")

    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/resetDailyGuesses`, dataObj)
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
