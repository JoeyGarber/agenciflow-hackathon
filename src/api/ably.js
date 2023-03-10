import apiUrl from "../apiConfig";
import axios from 'axios'

export const getAblyTokenRequest = (user) => {
  return axios({
    url: apiUrl + '/ably-auth',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}