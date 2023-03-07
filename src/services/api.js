import axios from "axios";
export const api = axios.create({
  baseURL: "https://front-explorer-back.onrender.com",
  // baseURL: "https://dark-pear-lamb-hat.cyclic.app/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
