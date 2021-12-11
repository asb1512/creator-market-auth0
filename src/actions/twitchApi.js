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
    dispatch({ type: "OAUTH_TWITCH_LOADING" })
    return axios({
      method: 'get',
      url: 'https://id.twitch.tv/oauth2/validate',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
        'Access-Conrol-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
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
      mode: 'no-cors',
      url: `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URI}&response_type=token&scope=analytics:read:extensions`,
      // headers: { 'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}` },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      },
      credentials: 'same-origin',
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

export function nodeTwitchTest() {
  return function (dispatch) {
    dispatch({ type: "OATH_TWITCH_LOADING"})
    return axios({
      method: 'get',
      url: 'http://localhost:8000/twitch-test',
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then(function (response) {
        console.log("nodeTwitchTest response:", response)
      })
      .catch(function (error) {
        console.log("nodeTwitchTest error:", error)
      })
  }
}