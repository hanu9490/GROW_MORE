import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/screens/home/Home'
import WhatWeDo from '../components/containers/whatwedo/WhatWeDo'
import WhyOurServices from "../components/containers/whyourservices/WhyOurServices";
import WhyChooseus from '../components/containers/whychooseus/WhyChooseus';
import ContactUs from '../components/containers/contactus/ContactUs';

const routes = (
    <React.Fragment>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<WhatWeDo/>} path='/whatwedo' />
            <Route element={<WhyOurServices/>} path='/whyourservices' />
            <Route element={<WhyChooseus/>} path='/whychooseus' />
            <Route element={<ContactUs/>} path='/contactus' />
        </Routes>
    </React.Fragment>
)
export default routes
