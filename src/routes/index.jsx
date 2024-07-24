import React from "react";
import { Routes, Route } from "react-router-dom";
import WhatWeDo from "../components/containers/whatwedo/WhatWeDo";
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
import WhyChooseus from "../components/containers/whychooseus/WhyChooseus";
import ContactUs from "../components/containers/contactus/ContactUs";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";

const routes = (
  <React.Fragment>
    <Navbar />
    <Hero />
    <WhyOurServices />
    <WhyChooseus/>
    <ContactUs />
  </React.Fragment>
);
export default routes;
