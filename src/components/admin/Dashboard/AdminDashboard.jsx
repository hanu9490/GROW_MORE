import React, { useEffect } from "react";
import { checkAuth, logout } from "../../../utils/JwtAuth";
import JobListingScreen from "./jobposting/JobListingScreen";
import AddJob from "./jobposting/AddJob";
import "./AdminDashboard.css";
// import "../../../styles/Styles.css";
const AdminDashboard = () => {
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error("Authentication failed:", error);
        logout();
      }
    };

    verifyAuth();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <AddJob />
      <JobListingScreen />
    </div>
  );
};

export default AdminDashboard;
