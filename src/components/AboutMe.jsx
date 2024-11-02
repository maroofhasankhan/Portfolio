import React from "react";

import home2 from '../img/maroofhome2.jpg'
//import styles
import { useScroll } from "./useScroll";
import { leftAnim, rightAnim, scale } from "../pages/animation";
import { titleAnim } from "../pages/animation";
import { motion } from "framer-motion";


import {About, Description, Image,Hide} from '../pages/styles';
import styled from "styled-components";

const AboutMe =()=>{
    const [element,controls] =useScroll(); 
    return (
      <Content ref={element} initial="hidden">
        <Description>
          <AboutContent variants={leftAnim} animate={controls}>
            <h2>
              About <span>Me </span>
            </h2>
            <Hide>
              <motion.p variants={titleAnim}>
                My coding journey began back in <span>11th grade</span> when I
                created my first app using App Inventor. While it was simpler
                compared to building with coding languages like{" "}
                <span>
                  {"< "}java{"/>"}{" "}
                </span>
                , it was a valuable experience. I learned about working with
                databases, designing clear user interfaces, and developing
                logical solutions. It was also during this time that a friend
                encouraged me to take{" "}
                <span>
                  {"< "}C++{"/>"}{" "}
                </span>
                as a subject, and that’s where my real spark for technology was
                ignited.
              </motion.p>
            </Hide>
            <Hide>
              <motion.p variants={titleAnim}>
                In 2020, I enrolled in a{" "}
                <span>Bachelor’s in Computer Applications (BCA)</span>, which
                opened the door to learning various programming languages.
                However, it was web development that truly captured my interest.
                Since then, I’ve taken on several projects, including building a
                website for <span>D3D International</span>. I developed their
                landing page and a job application portal, allowing students to
                apply for jobs and organizations to list job openings.
              </motion.p>
            </Hide>
            <Hide>
              <motion.p variants={titleAnim}>
                This journey, from <span>app-building in high school</span> to
                <span> crafting dynamic websites</span>, has been filled with
                growth, challenges, and a deepening passion for technology.
              </motion.p>
            </Hide>
          </AboutContent>
        </Description>
        <AboutMeImg>
          <motion.img variants={scale} animate={controls} src={home2} alt="" />
        </AboutMeImg>
      </Content>
    );
};

const Content = styled(About)`
  h2 {
    padding-bottom: 3rem;
    position: relative;
  }
  img {
    box-shadow: 10px 15px 15px 10px rgba(35, 217, 148, 0.5);
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const AboutMeImg = styled(Image)`
  /* box-shadow: 10px 2px 5px 10px rgba(35, 217, 148, 0.5); */
  overflow: hidden;
  
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  p{
    width: 100%;
    font-weight: 400;
    padding : 0rem 2rem 2rem 0rem;
  }
`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1500px) {
    left: 0%;
  }
`;

export default AboutMe;