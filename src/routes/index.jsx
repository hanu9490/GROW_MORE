import React from "react";
import { Routes, Route } from "react-router-dom";
import WhatWeDo from "../components/containers/whatwedo/WhatWeDo";
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
<<<<<<< HEAD
import WhyChooseus from '../components/containers/whychooseus/WhyChooseus';
import ContactUs from '../components/containers/contactus/ContactUs';
import Internship from '../components/containers/internship/Internship';

const routes = (
    <React.Fragment>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<WhatWeDo/>} path='/whatwedo' />
            <Route element={<WhyOurServices/>} path='/whyourservices' />
            <Route element={<WhyChooseus/>} path='/whychooseus' />
            <Route element={<ContactUs/>} path='/contactus' />
            <Route element={<Internship/>} path='/internship' />
        </Routes>
    </React.Fragment>
)
export default routes
=======
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
>>>>>>> 8d34c8c2aa27450585cee4cb47454539add249f1
