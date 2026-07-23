import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: "https://carrertrack-lite-server.onrender.com/api",
  withCredentials: true,
});