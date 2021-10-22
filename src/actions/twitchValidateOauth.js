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

const baseUrl = "https://id.twitch.tv/oauth2/authorize"
const clientId = `?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}`
const redirectUri = `&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URI}`
const responseType = "&response_type=token"
const scope = "&scope=analytics:read:extensions"
const fullUrl = `${baseUrl}${clientId}${redirectUri}${responseType}${scope}`

console.log(fullUrl)

// const config = {'Access-Control-Allow-Origin': '*'}

const config = {
  protocol: 'http',
  host: '192.168.1.228',
  port: 9000,
}

export function twitchOauth() {
  return function (dispatch) {
    return axios.get({
      url: "https://id.twitch.tv/oauth2/authorize?client_id=35st75g2pjre58stvxxzg7zehmsnhh&client_secret=kog86n4xp8cyvd6vax3jsb3akqvhg9&redirect_uri=http://localhost:3000/dashboard&response_type=token&scope=analytics:read:extensions",
      proxy: {
        protocol: 'http',
        host: '192.168.1.228',
        port: 9000,
      }
    })
      .then(({ data }) => {
        console.log(data)
      })
  }
}