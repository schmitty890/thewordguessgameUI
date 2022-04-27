import axios from "axios"
export const totalUsers = async () => {
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios
      .get(`${baseURL}/users`)
      .then(res => {
        // console.log(res)
        // localStorage.setItem("token", res.data.token)
        // localStorage.setItem("_id", res.data._id)
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
