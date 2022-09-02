import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const login = (username, password) => api.post(`auth/login`, {
  username: username,
  password: password
})
  .then(response => {
    console.log(response.data)
    localStorage.setItem("access_token", response.data.accessToken)
  })

export const logout = () => {
  api.post(`auth/logout`)
}