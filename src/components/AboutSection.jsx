import React, { useRef } from "react";
import home1 from "../img/maroofmy.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../pages/styles";
//animation
import { motion, stagger } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../pages/animation";
import Wave from "./Wave";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [designation, setDesignation] = React.useState("Web Developer");
  const spans=useRef(null);

  React.useEffect(() => {
    const typed = new Typed(spans.current, {
      strings: ['Frontend Developer', 'React Developer','Backend Developer','ML Engineer'],
      typeSpeed: 60,
      loop:true,
      backSpeed:30,
    });

    return () => {
      typed.destroy();
    };
  }, []);




  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>My name is</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Maroof Hasan Khan</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              I am a{" "}
              <span>
                {"< "}
                <span ref={spans}>{designation}</span>
                {" />"}
              </span>
            </motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          An aspiring web developer with a passion for creating visually appealing websites and user-friendly web applications.
        </motion.p>

        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image className="image">
        <Imgstyle variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//styled componenet
const Imgstyle=styled(motion.img)`

`

export default AboutSection;
