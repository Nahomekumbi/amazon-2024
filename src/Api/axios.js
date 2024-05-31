import axios from "axios";
const axiosInstace = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-6e1f6/us-central1/api",
});
baseURL:"https://amazon-api-deploy2.onrender.com/";

export { axiosInstace };