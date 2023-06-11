import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});
export const baseurl = "http://localhost:5000";
