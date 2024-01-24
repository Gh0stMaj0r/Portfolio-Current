import React from "react";

import './WhatIdo.scss'
import { CodeSquare, Phone, Columns, Gear  } from "react-bootstrap-icons";

const Skills = () => {
    return (
        <section className="whatimdoing wrapper">
            <div className="content">
                <div className="whatido">
                    <h2>WHAT I DO</h2>
                    <div className="whatido-row">
                        <div className="icons-column">
                            <div className="icons-row">
                                <CodeSquare className="icon"/><p>Web Development</p>
                            </div>
                            <div className="icons-row">
                                <Phone className="icon"/><p>Mobile Development</p>
                            </div>
                        </div>
                        <div className="icons-column">
                            <div className="icons-row">
                                <Columns className="icon"/><p>UI Design</p>
                            </div>
                            <div className="icons-row">
                                <Gear className="icon"/><p>Maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;