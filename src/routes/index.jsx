import React from "react";
import { Routes, Route } from "react-router-dom";
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
import WhyChooseus from "../components/containers/whychooseus/WhyChooseus";
import ContactUs from "../components/containers/contactus/ContactUs";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import WhatWeDo from "../components/containers/whatwedo/WhatWeDo";
import Internship from "../components/containers/internship/Internship";
import Reviews from "../components/containers/reviews/Reviews";
import OurTechnology from "../components/containers/our-technology/OurTechnology";
import Footer from "../components/containers/footer/Footer";

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
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/our-technology" element={<OurTechnology />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  </React.Fragment>
);
export default routes;
