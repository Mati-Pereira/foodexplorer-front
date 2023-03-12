import axios from "axios";
export const api = axios.create({
  baseURL: "https://foodexplorer-back.onrender.com",

  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
