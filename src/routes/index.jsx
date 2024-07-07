import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/screens/home/Home'
const routes = (
    <React.Fragment>
        <Routes>
            <Route element={<Home />} path='/' />
        </Routes>
    </React.Fragment>
)
export default routes
