import axios from "axios";

// Create an instance of axios
const JwtInstance = axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// Interceptor to add JWT token to requests
JwtInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const LoginInstance = axios.create({
  baseURL: "http://localhost:4001",
});

export { LoginInstance, JwtInstance };
