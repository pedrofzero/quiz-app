import axios from "axios";

let token;

export const api = axios.create({
  baseURL: 'http://45.136.70.211:8000/',
  withCredentials: true,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar', Authorization: `Bearer ${localStorage.getItem("access_token")}` }
});


// auth

export const register = async (email, username, password) => {
  await api.post(`auth/register`, {
    email: email,
    username: username,
    password: password
  })
    .then(response => {
      console.log(response.data)
    })
}

export const login = (username, password) =>
  api.post(`auth/login`, {
    username: username,
    password: password
  })
    .then((response) => {
      console.log(response.status)

      localStorage.setItem("user", response.data.username)
      localStorage.setItem("access_token", response.data.accessToken)
    })

export const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('access_token')
  api.post(`auth/logout`)
}


export const refreshToken = () => {
  api.post(`auth/refreshToken`)
    .then(response => {
      console.log(response)
      localStorage.setItem("access_token", response.data.accessToken)
    })
}

// quiz
export const createQuiz = (name, description, category, questions, creator, image) => {
  api.post(`quiz/createQuiz`, {
    name: name,
    description: description,
    category: category,
    questions: questions,
    creator: creator
  })
}

export const getQuizes = (username) => {
  api.post(`quiz/getQuizes`, {
    username: username
  })
    .then(response => {
      console.log(response)
    })
}

export const getQuizById = (id) => {
  api.post(`quiz/getQuizById`, {
    id: id
  })
    .then(response => {
      console.log(response)
    })
} 