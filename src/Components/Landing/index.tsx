import React from "react";

import './Landing.scss'
import { CloudArrowDown, ArrowDownCircle, Steam, Github, Facebook, Linkedin, Discord } from "react-bootstrap-icons";
import { FaHtml5, FaCss3Alt,FaReact, FaSass,FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Landing = () => {
    return (
        <section className="landing wrapper" id="home">
            <div className="content landing-flex">
                <div className="text-landing">
                    <h2>Arttu Suhonen</h2>
                    <hr></hr>
                    <h1>Student Developer & <br></br>Future Full-Stack Developer</h1>

                    <p className="intro">Welcome to my programming portfolio! 
                    I'm a passionate coder who thrives on creative solutions and embraces challenges. 
                    Specializing in languages like React/Typescript, HTML, CSS/SCSS and Javascript, I want to become full-stack developer in future.</p>
                    
                    <div className="landing-buttons">
                    <button className="land-button">
                        <CloudArrowDown className="icon"/>

                        <a href="https://drive.google.com/file/d/1xz9GfoxAUKf4HRcMyfQH5VE4ZA0ZY_2g/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <span>Download CV</span></a>
                    </button>

                    <button className="land-button2">
                        <ArrowDownCircle className="icon"/>

                        <a href="#contact"><span>Get in touch!</span></a>
                    </button>
                    </div>

                <div className="social-landing">
                    <a href="https://steamcommunity.com/id/Gh0stMaj0r/" target="_blank" rel="noopener noreferrer"><Steam className="social-icons"/></a>
                    <a href="https://github.com/Gh0stMaj0r" target="_blank" rel="noopener noreferrer"><Github className="social-icons"/></a>
                    <a href="developer-arttu.vercel.app"><Facebook className="social-icons"/></a>
                    <a href="https://www.linkedin.com/in/arttu-suhonen" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icons"/></a>
                    <a href="https://discordapp.com/users/287671875121840128" target="_blank" rel="noopener noreferrer"><Discord className="social-icons"/> </a>        
                </div>
                <div className="tech-landing">
                    <h3>Tech Stack</h3>
                    <div className="hr-line-vertical">
                        <hr></hr>
                    </div>
                    <div className="tech-icons-landing">
                        <FaHtml5 className="icon"/>
                        <FaCss3Alt className="icon2"/>
                        <FaReact className="icon3"/>
                        <FaSass className="icon4"/>
                        <RiJavascriptFill className="icon5"/>
                        <BiLogoTypescript className="icon2"/>
                        <DiMysql className="icon6"/>
                        <FaGitAlt className="icon7"/>
                    </div>
                </div>
                </div>
                <div>
                    <img src="./Images/Kuva-transparent.png" className="image-me"></img>
                </div>
            </div>
        </section>
    )
}

export default Landing;