import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://darkxenium-blogs.cyclic.app/api/",
});
