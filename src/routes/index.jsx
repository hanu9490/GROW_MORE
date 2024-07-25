import React from "react";
import { Routes, Route } from "react-router-dom";
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
import WhyChooseus from "../components/containers/whychooseus/WhyChooseus";
import ContactUs from "../components/containers/contactus/ContactUs";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import WhatWeDo from "../components/containers/whatwedo/WhatWeDo";
import Internship from "../components/containers/internship/Internship";
import Testimonials from "../components/containers/testimonials/Testimonials";

const routes = (
  <React.Fragment>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/whyourservices" element={<WhyOurServices />} />
      <Route path="/whychooseus" element={<WhyChooseus />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/testimonial" element={<Testimonials />} />
    </Routes>
  </React.Fragment>
);
export default routes;