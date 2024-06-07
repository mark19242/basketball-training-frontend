import axios from "axios"

const API_URL = "http://localhost:3000" // Update with your Rails backend URL if different

export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
}

export const createUser = (userData) => {
  return axios.post(`${API_URL}/users`, userData)
}
