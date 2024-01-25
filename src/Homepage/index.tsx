import React from "react";

import './Home.scss'
import Landing from "../Components/Landing";
import Navbar from "../Components/Navigation";
import About from "../Pages/Aboutme";
import WhatIdo from "../Pages/WhatIdo";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";

const Home = () => {
    return (
        <>
        <Navbar/>

        <Landing/>

        <About/>

        <WhatIdo/>

        <Skills/>

        <Projects/>
        </>
    )
}

export default Home;