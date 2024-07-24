import React from "react";
import { Routes, Route } from "react-router-dom";
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
import WhyChooseus from "../components/containers/whychooseus/WhyChooseus";
import ContactUs from "../components/containers/contactus/ContactUs";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import WhatWeDo from "../components/containers/whatwedo/WhatWeDo";
import Internship from "../components/containers/internship/Internship";

const routes = (
  <React.Fragment>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/whyourservices" element={<WhyOurServices />} />
      <Route path="/whychooseus" element={<WhyChooseus />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/contactus" element={<ContactUs />} />  
    </Routes>
  </React.Fragment>
);
export default routes;
