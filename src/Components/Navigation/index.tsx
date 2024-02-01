import React from "react";

import { slide as Menu } from 'react-burger-menu'
import './Navbar.scss';

const Navbar = () => {
    return (
    <nav className="header wrapper">
        <div className="content">
        <a className="logo">Developer<span>.</span></a>
        <div className="header-right">
            <a className="hover-effect" href="#home">Home</a>
            <a className="hover-effect" href="#aboutme">About me</a>
            <a className="hover-effect" href="#skills">Skills</a>
            <a className="hover-effect" href="#projects">Projects</a>
            <a className="hover-effect" href="#contact">Contact</a>

            <Menu isOpen={ false } noOverlay right>
                <a className="hover-effect menu-item" href="#home">Home</a>
                <a className="hover-effect menu-item" href="#aboutme">About me</a>
                <a className="hover-effect menu-item" href="#skills">Skills</a>
                <a className="hover-effect menu-item" href="#projects">Projects</a>
                <a className="hover-effect menu-item" href="#contact">Contact</a>
            </Menu>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;