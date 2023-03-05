import axios from "axios";
export const api = axios.create({
  baseURL: "https://busy-teal-nematode-wig.cyclic.app/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
