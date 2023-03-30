import axios from "axios";
export const api = axios.create({
  baseURL: "https://foodexplorer-back-6ofi7g2c0-mati-pereira.vercel.app/",
  // baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
