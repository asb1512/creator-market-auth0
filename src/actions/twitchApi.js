import axios from "axios";
import { toast } from "react-toastify";

export function twitchValidateOauth() {

  const notifyError = () => toast("Unauthorized request", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  return function (dispatch) {
    dispatch({type: "OAUTH_TWITCH_LOADING"})
    return axios({
      method: 'get',
      url: 'https://id.twitch.tv/oauth2/validate',
      headers: {'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`},
    })
    .then(function (response) {
      console.log("response:", response)

    })
    .catch(function (error) {
      console.log("error:", error)
      notifyError()
    })
  }
}

// ________________________________________________________________
// const config = {'Access-Control-Allow-Origin': '*'}

export function twitchGetUserToken() {
  return function (dispatch) {
    return axios({
      method: 'get',
      url: `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URI}&response_type=token&scope=analytics:read:extensions`,
      // headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}` },
      headers: {"Access-Control-Allow-Origin": "*"},
      // proxy: {
      //   protocol: 'http',
      //   host: '192.168.1.228',
      //   port: 9000,
      // }
    })
      .then(function (response) {
        console.log("response:", response)
      })
      .catch(function (error) {
        console.log("error:", error)
      })
  }
}