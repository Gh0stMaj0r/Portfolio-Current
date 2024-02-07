import React from "react";

import './Projects.scss'
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import { Cast } from "react-bootstrap-icons";

const Projects = () => {
    return (
        <section className="projects wrapper" id="projects">
            <div className="content">
                <div className="myprojects">
                    <h2>Recent Projects</h2>
                    <hr></hr>
                    <div className="cards-row">
                        <Card sx={{border: 'none'}} className='card card-progress'>
                        <CardCover>
                            <img className="image" src="/Images/nexcent.png"/>
                            <div className="card-overlay">
                            <div className="card-overlay-text">
                                    <span className="overlay-heading">Nexcent - Website Example</span>
                                    <span>
                                        Random Website made with React. <br></br>Still in progress...
                                    </span>
                                    <div className="overlay-buttons">
                                        <a href="https://github.com/Gh0stMaj0r/React-example-website" target="_blank">
                                            <button className="project-button">Source Code<Cast/></button>
                                        </a>
                                        <a href="https://nexcent-website.vercel.app/" target="_blank">
                                            <button className="project-button">View Demo<Cast/></button>
                                        </a>
                                    </div>
                                </div>    
                            </div>    
                        </CardCover>
                        </Card>
                        <div>
                        <Card sx={{border: 'none'}} className='card'>
                        <CardCover>
                            <img className="image" src="/Images/powerpeak.png"/>
                            <div className="card-overlay">
                            <div className="card-overlay-text">
                                    <span className="overlay-heading">Power Peak - Gym Website</span>
                                    <span>
                                        School project where I had to make a website with React, 
                                        I made the website of a gym called Power Peak.
                                    </span>
                                    <div className="overlay-buttons">
                                        <a href="https://github.com/Gh0stMaj0r/Power-Peak" target="_blank">
                                            <button className="project-button">Source Code<Cast/></button>
                                        </a>
                                        <a href="https://power-peak.vercel.app/" target="_blank">
                                            <button className="project-button">View Demo<Cast/></button>
                                        </a>
                                    </div>
                                </div>   
                            </div>    
                        </CardCover>
                        </Card>
                        </div>
                        <div>
                        <Card sx={{border: 'none'}} className='card card-progress'>
                        <CardCover>
                            <img className="image" src="/Images/movie-website.png"/>
                            <div className="card-overlay">
                                <div className="card-overlay-text">
                                    <span className="overlay-heading">StreamX - Movie Website</span>
                                    <span>
                                        Movie Website made with API key, that retrieves movies (not viewable)
                                        from the database. <br></br>Still in progress...
                                    </span>
                                    <div className="overlay-buttons">
                                        <a href="https://github.com/Gh0stMaj0r/Movie-Website" target="_blank">
                                            <button className="project-button">Source Code<Cast/></button>
                                        </a>
                                        <a href="https://streamx-movie.vercel.app/" target="_blank">
                                            <button className="project-button">View Demo<Cast/></button>
                                        </a>
                                    </div>
                                </div>
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