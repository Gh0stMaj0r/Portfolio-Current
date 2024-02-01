import React from "react";

import './WhatIdo.scss'
import { CodeSquare, Database, Columns, Gear  } from "react-bootstrap-icons";

const Skills = () => {
    return (
        <section className="whatimdoing wrapper" id="whatido">
            <div className="content">
                <div className="whatido">
                    <h2>WHAT I DO</h2>
                    <div className="whatido-row">
                        <div className="icons-column">
                            <div className="icons-row">
                                <CodeSquare className="icon"/><p>Front-end Development</p>
                            </div>
                            <div className="icons-row">
                                <Database className="icon"/><p>Back-end Development</p>
                            </div>
                        </div>
                        <div className="icons-column">
                            <div className="icons-row">
                                <Columns className="icon"/><p>Responsive Design</p>
                            </div>
                            <div className="icons-row">
                                <Gear className="icon"/><p>Site Maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;