import axios from "axios"
export const login = async data => {
  console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi.herokuapp.com"

    console.log("log user in with data")

    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/login`, data)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("_id", res.data._id)
        if (res.data.admin) {
          localStorage.setItem("admin", res.data.admin)
        }
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
