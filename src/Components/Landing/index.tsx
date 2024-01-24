import React from "react";

import './Landing.scss'
import { CloudArrowDown, ArrowDownCircle, Steam, Github, Facebook, Linkedin, Discord } from "react-bootstrap-icons"; 

const Landing = () => {
    return (
        <section className="landing wrapper">
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

                        <span>Get to know me!</span>
                    </button>
                    </div>

                <div className="social-landing">
                    <a href="https://steamcommunity.com/id/Gh0stMaj0r/" target="_blank"><Steam className="social-icons"/></a>
                    <a href="https://github.com/Gh0stMaj0r" target="_blank"><Github className="social-icons"/></a>
                    <a><Facebook className="social-icons"/></a>
                    <a href="https://www.linkedin.com/in/arttu-suhonen" target="_blank"><Linkedin className="social-icons"/></a>
                    <a href="https://discordapp.com/users/287671875121840128" target="_blank"><Discord className="social-icons"/> </a>        
                </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;