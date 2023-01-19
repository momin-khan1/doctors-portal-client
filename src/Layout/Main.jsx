import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import Navbar from '../Pages/Shared/Navbar'

export default function Main() {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}
