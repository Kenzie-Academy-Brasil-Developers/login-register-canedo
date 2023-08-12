import axios from "axios";

const token = localStorage.getItem("token")

export const api = axios.create({
  baseURL:"https://kenziehub.herokuapp.com",
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})