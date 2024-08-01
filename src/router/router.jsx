import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const router = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f1f1f1" }}></Footer>
        </div>
    )
}

export default router;