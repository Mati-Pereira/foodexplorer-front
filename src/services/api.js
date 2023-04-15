import axios from "axios";
export const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://foodexplorer-back-6ofi7g2c0-mati-pereira.vercel.app/",
  // baseURL: "http://localhost:3000",
=======
  // baseURL: "https://foodexplorer-back.onrender.com",
  baseURL: "http://localhost:3000",
>>>>>>> 4e6db1e (build(deps): update package-lock.json and api.js)
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
