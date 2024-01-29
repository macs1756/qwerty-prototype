import axios from "axios";

const token = process.env.TOKEN

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1337/api', // Базовий URL вашого API
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export default axiosInstance