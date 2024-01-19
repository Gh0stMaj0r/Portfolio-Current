import React from "react";

import './Aboutme.scss'

const About = () => {
    return (
        <section className="about wrapper">
            <div className="content">
                <div className="about-flex-column">
                    <h2>ABOUT ME</h2>
                    <hr></hr>
                    <div className="about-flex-row">
                        <div>
                        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit, incidunt dolor. 
                            Deleniti fugiat atque maiores suscipit optio quod nulla adipisci est consectetur architecto, ipsam reiciendis dolore officia accusantium. 
                            Tempore repellat delectus doloremque placeat voluptates, voluptatem blanditiis inventore quos enim aut, dolores quis sequi, mollitia libero molestiae cupiditate omnis. 
                            Optio, ipsam.</p>
                        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Amet sint numquam recusandae eaque quisquam explicabo incidunt vitae officia eveniet nostrum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;