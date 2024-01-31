import React from "react";

import './Footer.scss'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Steam, Github, Facebook, Linkedin, Discord } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <section className="footer wrapper">
            <div className="content">
                <div className="footer-row">
                    <div className="footer-content">
                        <h2>Links</h2>
                        <hr></hr>
                        <div className="footer-column">
                            <a>Home</a>
                            <a>About me</a>
                            <a>Skills</a>
                            <a>Projects</a>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h2>Contact</h2>
                        <hr></hr>
                        <div className="footer-column">
                            <p><FiPhone/> 040-0856880</p>
                            <p><MdOutlineMail/> suhonen.arttu2002@gmail.com</p>
                            <p><IoLocationOutline/> Jokelantie 616, Oulu Finland</p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <h2>Social</h2>
                        <hr></hr>
                        <div className="footer-column">
                            <div className="footer-icons-row">
                                <a href="https://steamcommunity.com/id/Gh0stMaj0r/" target="_blank"><Steam className="social-icons"/></a>
                                <a href="https://github.com/Gh0stMaj0r" target="_blank"><Github className="social-icons"/></a>
                                <a><Facebook className="social-icons"/></a>
                                <a href="https://www.linkedin.com/in/arttu-suhonen" target="_blank"><Linkedin className="social-icons"/></a>
                                <a href="https://discordapp.com/users/287671875121840128" target="_blank"><Discord className="social-icons"/></a>
                            </div>
                        </div>
                        <p>© 2024 Arttu Suhonen</p>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;