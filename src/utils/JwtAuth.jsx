import { jwtDecode as jwt_decode } from "jwt-decode";
import { JwtInstance } from "./API";

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.log("No token found");
    return false;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

export const checkAuth = async () => {
  return await JwtInstance.get("/protected");
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/admin/login";
};
