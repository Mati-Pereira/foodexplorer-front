import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://front-explorer-back.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
