import axios from "axios"
export const getUserByEmail = async data => {
  console.log(data)
  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"

    // post data to a url endpoint
    const response = await axios
      .get(`${baseURL}/getUserByEmail/${data.email}`)
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
