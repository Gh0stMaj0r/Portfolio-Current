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
            <div className="content">
                <div className="text-landing">
                    <h2>Arttu Suhonen</h2>
                    <hr></hr>
                    <h1>Student Developer & <br></br>Future Full-Stack Developer</h1>

                    <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus quidem optio quaerat, beatae nulla illo alias ipsa voluptate nihil nesciunt repudiandae adipisci! 
                    Sit fugit dolore ipsa adipisci nemo, asperiores rem!</p>
                    
                    <div className="landing-buttons">
                    <button className="land-button">
                        <CloudArrowDown className="icon"/>

                        <a href="https://drive.google.com/file/d/1xz9GfoxAUKf4HRcMyfQH5VE4ZA0ZY_2g/view?usp=sharing" target="_blank">
                            <span>Download CV</span></a>
                    </button>

                    <button className="land-button2">
                        <ArrowDownCircle className="icon"/>

                        <a href="#aboutme"><span>Get to know me!</span></a>
                    </button>
                    </div>

                <div className="social-landing">
                    <a href="https://steamcommunity.com/id/Gh0stMaj0r/" target="_blank"><Steam className="social-icons"/></a>
                    <a href="https://github.com/Gh0stMaj0r" target="_blank"><Github className="social-icons"/></a>
                    <a><Facebook className="social-icons"/></a>
                    <a href="https://www.linkedin.com/in/arttu-suhonen" target="_blank"><Linkedin className="social-icons"/></a>
                    <a href="https://discordapp.com/users/287671875121840128" target="_blank"><Discord className="social-icons"/> </a>        
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
            </div>
        </section>
    )
}

export default Landing;