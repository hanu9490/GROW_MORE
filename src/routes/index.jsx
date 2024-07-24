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
    <Navbar />
    <Hero />
    <WhatWeDo />
    <WhyOurServices />
    <WhyChooseus/>
    <Internship />
    <ContactUs />
  </React.Fragment>
);
export default routes;
