import React from "react";

import './Landing.scss'
import { CloudArrowDown, ArrowDownCircle, Steam, Github } from "react-bootstrap-icons"; 

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

                        <span>Download CV</span>
                    </button>

                    <button className="land-button2">
                        <ArrowDownCircle className="icon"/>

                        <span>Get to know me!</span>
                    </button>
                    </div>

                    <div className="social-landing">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;