import axios from "axios";
export const api = axios.create({
  baseURL: "https://front-explorer-back.onrender.com",
  // baseURL: "https://foodexplorer-back-production.up.railway.app/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
