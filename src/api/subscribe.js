import axios from "axios"
export const subscribeUsersEmail = async data => {
  console.log(data)
  await new Promise(resolve => setTimeout(resolve, 2000)) // 2 sec

  try {
    let baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:8081"
        : "https://thewordguessgameapi-shnp2.ondigitalocean.app"
    // post data to a url endpoint
    const response = await axios
      .post(`${baseURL}/subscribe`, data)
      .then(res => {
        // console.log(res)
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
