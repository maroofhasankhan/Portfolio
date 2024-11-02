import React from "react";
import AboutSection from "../components/AboutSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import GlobalStyle  from "../components/GlobalStyle";
//animation 
import { pageAnimation } from "../pages/animation";
import { motion } from "framer-motion";

const AboutUs =( ) =>{
    return (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <GlobalStyle />
        <AboutSection />
        <AboutMe />
        <Skills />
      </motion.div>
    );
}
export default AboutUs;

