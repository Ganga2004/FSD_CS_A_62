import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>
                <Header />
                <Navbar />
                <Outlet />.
                <Footer />
            </h1>
        </div>
    )
}

export default Home