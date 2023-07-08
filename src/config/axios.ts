import axios from "axios";

const api = axios.create({
  baseURL: "http://139.59.234.25:8080",
});

export default api;
