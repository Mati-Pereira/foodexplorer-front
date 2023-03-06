import axios from "axios";
export const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://foodexplorer-back-production.up.railway.app/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
