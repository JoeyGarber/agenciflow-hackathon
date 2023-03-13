import apiUrl from "../apiConfig";
import axios from 'axios'

export const signUp = (credentials) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/api/user_routes/sign-up/',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = (credentials) => {
  return axios({
    url: apiUrl + '/api/user_routes/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = (user) => {
  return axios({
    url: apiUrl + '/api/user_routes/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}