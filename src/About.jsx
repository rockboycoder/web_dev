import React from "react";
import web from "../src/image/hero-img.jpg";
import { NavLink } from "react-router-dom";
import  Common from "./Common";


const About = () => {
    return(
        <>
            <Common name="Welcome to About page" src={web} visit="/contact" btname="Contact Now" />
        </>

    );
};
export default About;
