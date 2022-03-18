import axios from "axios"
export const getUserDataObject = async => {
  // console.log(data)

  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi.herokuapp.com"

    var myStorage = window.localStorage
    const userID = myStorage.getItem("_id")
    const userToken = myStorage.getItem("token")
    console.log(userID && userToken)
    if (userID && userToken) {
      console.log("both are true")
      // const response = await axios
      //   .get(`${baseURL}/user/${userID}`)
      //   .then(res => {
      //     console.log(res)
      //     // localStorage.setItem("token", res.data.token)
      //     // localStorage.setItem("_id", res.data._id)
      //     return res
      //   })
      //   .catch(error => {
      //     // console.log(error.response)
      //     return error.response
      //   })

      // return response
    }
  } catch (err) {
    // Error handling here
    console.log(err.message)
    console.log(err)
    return err.message
  }
}
