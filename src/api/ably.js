import apiUrl from "../apiConfig";
import axios from 'axios'

export const getAblyTokenRequest = (user) => {
  return axios({
    url: apiUrl + '/api/ably_routes/ably-auth',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}