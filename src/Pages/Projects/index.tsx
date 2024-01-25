import React from "react";

import './Projects.scss'
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

const Projects = () => {
    return (
        <section className="projects wrapper">
            <div className="content">
                <div className="myprojects">
                    <h2>Recent Projects</h2>
                    <hr></hr>
                    <div className="cards-row">
                        <Card
                        sx={{height: 260, width: 250,}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;