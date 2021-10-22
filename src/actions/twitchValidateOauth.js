import axios from "axios";

export function twitchValidateOauth() {
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
    })
  }
}