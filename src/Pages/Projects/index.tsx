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
                        <div className="overlay">
                        </div>
                        <Card sx={{height: 260, width: 350}} className='card'>
                        <CardCover>
                            <img className="image" src="/Images/nexcent.png"/>
                            <div className="card-overlay">
                                <span>asud9usadh9oas</span>    
                            </div>    
                        </CardCover>
                        </Card>
                        <div>
                        <Card sx={{height: 260, width: 350,}} className='card'>
                        <CardCover>
                            <img className="image" src="/Images/powerpeak.png"/>
                            <div className="card-overlay">
                                <span>asud9usadh9oas</span>    
                            </div>    
                        </CardCover>
                        </Card>
                        </div>
                        <div>
                        <Card sx={{height: 260, width: 350,}} className='card'>
                        <CardCover>
                            <img className="image" src="/Images/movie-website.png"/>
                            <div className="card-overlay">
                                <span>asud9usadh9oas</span>    
                            </div>            

                        </CardCover>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;