import axios from "axios";

// Create an instance of axios
const JwtInstance = axios.create({
  // baseURL: "http://localhost:4001",
  baseURL: "https://growmore-seven.vercel.app/",
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

JwtInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location = "/admin/login";
    }
    return Promise.reject(error);
  }
);

const LoginInstance = axios.create({
  // baseURL: "http://localhost:4001",
  baseURL: "https://growmore-seven.vercel.app/",
});

const API = axios.create({
  // baseURL: "http://localhost:4001",
  baseURL: "https://growmore-seven.vercel.app/",
});

export { LoginInstance, JwtInstance, API };
