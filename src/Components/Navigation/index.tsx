import React from "react";

import './Navbar.scss'

const Navbar = () => {
    return (
    <nav className="header wrapper">
        <div className="content">
        <a className="logo">Developer<span>.</span></a>
        <div className="header-right">
            <a className="hover-effect" href="#home">Home</a>
            <a className="hover-effect" href="#contact">About me</a>
            <a className="hover-effect" href="#contact">Skills</a>
            <a className="hover-effect" href="#about">Projects</a>
            <a className="hover-effect" href="#about">Contact</a>
        </div>
        </div>
    </nav>
    )
}

export default Navbar;