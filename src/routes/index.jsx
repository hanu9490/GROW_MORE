import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/screens/home/Home'
import WhatWeDo from '../components/containers/whatwedo/WhatWeDo'
const routes = (
    <React.Fragment>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<WhatWeDo/>} path='/whatwedo' />
        </Routes>
    </React.Fragment>
)
export default routes
