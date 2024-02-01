import React from "react";

import './Aboutme.scss'

const About = () => {
    return (
        <section className="about wrapper" id="aboutme">
            <div className="content">
                <div className="about-flex-column">
                    <h2>ABOUT ME</h2>
                    <hr></hr>
                    <div className="about-flex-row">
                        <p className="about-text">
                            I <span>Arttu Suhonen</span>, I'm <span>21</span> years old young student from <span>Oulu</span>, Finland.
                            <br></br>
                            <span>Student developer</span> and <span>Future Full-Stack</span>.
                            I'm passionate about computers and coding and thats why I went studying web developing. 
                            I am very friendly, hardworking person and I came along with everyone. 
                            I like to learn more and more everyday and I'm open for any guidance.
                            Challenges aren't a problem, I deal them best of my skill.</p>
                        <p className="about-text">
                            <span>HTML</span>, <span>CSS/SCSS</span>, <span>React</span>, <span>Typescript/Javascript</span> and <span>MYSQL</span>.<br></br>
                            Also familiar with <span>Adobe Photoshop</span> and <span>Adobe XD</span>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;