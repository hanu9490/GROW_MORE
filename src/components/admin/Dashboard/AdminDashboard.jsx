import React, { useEffect } from "react";
import { checkAuth, logout } from "../../../utils/JwtAuth";
import JobListingScreen from "./jobposting/JobListingScreen";
import AddJob from "./jobposting/AddJob";
import ContactedUsers from "./contactedUsers/ContactedUsers";
import "./AdminDashboard.css";
import AdminNavbar from "./admin-navbar/AdminNavbar";

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
      <AdminNavbar />
    </div>
  );
};

export default AdminDashboard;
