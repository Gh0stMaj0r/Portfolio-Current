import React from "react";

import './Home.scss'
import Landing from "../Components/Landing";
import Navbar from "../Components/Navigation";
import About from "../Pages/Aboutme";

const Home = () => {
    return (
        <>
        <Navbar/>

        <Landing/>

        <About/>
        </>
    )
}

export default Home;