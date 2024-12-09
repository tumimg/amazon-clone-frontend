import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://amazon-clone-backend-api-asmf.onrender.com",
});

export { axiosInstance };
