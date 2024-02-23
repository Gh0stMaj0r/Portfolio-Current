import React from "react";

import './Skills.scss'
import CircularProgress from '@mui/joy/CircularProgress';
import { FaHtml5, FaCss3Alt,FaReact, FaSass,FaGitAlt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
    return (
        <section className="skills wrapper" id="skills">
            <div className="content">
                <div className="myskills">
                    <h2>SKILLS</h2>
                    <hr></hr>
                    <div className="skills-flex-row">
                        <div className="icons-column">
                            <h2>Tech</h2>
                            <hr></hr>
                            <div className="icons-row">
                                <FaHtml5 className="icon"/>
                                <FaCss3Alt className="icon2"/>
                                <FaReact className="icon3"/>
                                <FaSass className="icon4"/>
                            </div>
                            <div className="icons-row">
                                <RiJavascriptFill className="icon5"/>
                                <BiLogoTypescript className="icon2"/>
                                <DiMysql className="icon6"/>
                                <FaGitAlt className="icon7"/>
                            </div>
                        </div>
                        <div className="icons-column">
                            <h2>Linguistic</h2>
                            <hr></hr>
                        <div className="circular-row">
                        <div className="circular-column">
                        <CircularProgress
                            sx={{
                            "--CircularProgress-size": "100px",
                            "--CircularProgress-progressThickness": "10px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressColor": "#ff0000",
                        }}
                        determinate
                        value={100}
                        ><p className="circular-center-text">100%</p></CircularProgress>
                        <p>Finnish</p>
                        </div>

                        <div className="circular-column">
                        <CircularProgress
                            sx={{
                            "--CircularProgress-size": "100px",
                            "--CircularProgress-progressThickness": "10px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressColor": "#ff0000",
                        }}
                        determinate
                        value={70}
                        ><p className="circular-center-text">70%</p></CircularProgress>
                        <p>English</p>
                        </div>
                        
                        <div className="circular-column">
                        <CircularProgress
                            sx={{
                            "--CircularProgress-size": "100px",
                            "--CircularProgress-progressThickness": "10px",
                            "--CircularProgress-trackThickness": "10px",
                            "--CircularProgress-progressColor": "#ff0000",
                        }}
                        determinate
                        value={20}
                        ><p className="circular-center-text">20%</p></CircularProgress>
                        <p>Swedish</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;