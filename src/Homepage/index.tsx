import React from "react";

import './Home.scss'
import Landing from "../Components/Landing";
import Navbar from "../Components/Navigation";
import About from "../Pages/Aboutme";
import WhatIdo from "../Pages/WhatIdo";
import Skills from "../Pages/Skills";

const Home = () => {
    return (
        <>
        <Navbar/>

        <Landing/>

        <About/>

        <WhatIdo/>

        <Skills/>
        </>
    )
}

export default Home;