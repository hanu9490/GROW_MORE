import React, { useEffect } from "react";
import { checkAuth, logout } from "../../../utils/JwtAuth";

const AdminDashboard = () => {
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await checkAuth();
        console.log(checkAuth());
      } catch (error) {
        console.error("Authentication failed:", error);
        logout();
      }
    };

    verifyAuth();
  }, []);

  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
};

export default AdminDashboard;
