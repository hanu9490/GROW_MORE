import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/containers/navbar/Navbar";
import Home from "../components/screens/Home";
import Carriers from "../components/screens/Carriers";
import Contact from "../components/screens/Contact";
import Services from "../components/screens/Services";
import NotFound from "../components/common/NotFound/NotFound";
import ApplyJob from "../components/containers/internship/ApplyJob";
import About from "../components/screens/About";
import { useLocation } from "react-router-dom";
import Footer from "../components/containers/footer/Footer";
import Login from "../components/admin/Login/Login";
import LoginPage from "../components/admin/Login/LoginPage";
import PrivateRoute from "../components/admin/privateroute/PrivateRoute";
import AdminDashboard from "../components/admin/Dashboard/AdminDashboard";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const routes = (
  <React.Fragment>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Carriers />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply/:jobTitle" element={<ApplyJob />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin/dashboard"
        element={<PrivateRoute element={<AdminDashboard />} />}
      />
    </Routes>
    <Footer />
  </React.Fragment>
);
export default routes;
