import axios from "axios";
const api = axios.create({
  baseURL: "http://18.229.15.164:5000",
});
export default api;
