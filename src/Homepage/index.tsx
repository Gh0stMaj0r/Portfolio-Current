import React from "react";

import './Home.scss'
import Landing from "../Components/Landing";
import Navbar from "../Components/Navigation";
import About from "../Pages/Aboutme";
import WhatIdo from "../Pages/WhatIdo";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
        <Navbar/>

        <Landing/>

        <About/>

        <WhatIdo/>

        <Skills/>

        <Projects/>

        <Contact/>

        <Footer/>
        </>
    )
}

export default Home;