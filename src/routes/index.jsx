import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/containers/navbar/Navbar";
import Home from "../components/screens/Home";
import Carriers from "../components/screens/Carriers";
import Contact from "../components/screens/Contact";
import Services from "../components/screens/Services";
import NotFound from "../components/common/NotFound/NotFound";
import { useLocation } from "react-router-dom";

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
      <Route path="/carriers" element={<Carriers />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </React.Fragment>
);
export default routes;
