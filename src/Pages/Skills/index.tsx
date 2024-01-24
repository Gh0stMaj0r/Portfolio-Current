import React from "react";

import './Skills.scss'
import CircularProgress from '@mui/joy/CircularProgress';
import { FaHtml5, FaCss3Alt,FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <section className="skills wrapper">
            <div className="content">
                <div className="myskills">
                    <h2>SKILLS</h2>
                    <hr></hr>
                    <div className="skills2 coding-column">
                    <div className="coding-skills">
                            <div className="coding-column">
                                <FaHtml5 className="icon" />
                                <p>HTML</p>
                            </div>
                            <div className="coding-column">
                                <FaCss3Alt className="icon" />
                                <p>CSS/SCSS</p>
                            </div>
                            <div className="coding-column">
                                <SiJavascript className="icon"/>
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div className="coding-skills">
                            <div className="coding-columns">
                                <SiTypescript className="icon"/>
                                <p>Typescript</p>
                            </div>
                            <div className="coding-columns">
                                <FaReact className="icon"/>
                                <p>React</p>
                            </div>
                            <div className="coding-columns">
                                <DiMysql className="icon"/>
                                <p>MYSQL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;