import axios from "axios";
export const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-6e1f6/us-central1/api",
  baseURL: "https://amazon-api-deploy2-1.onrender.com/",
  // baseURL: "http://localhost:5500",
});

// export { axiosInstance };
