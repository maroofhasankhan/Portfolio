import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import {scale } from "../pages/animation";
import Card from "./Card";
import html from "../img/html5-brands-solid.svg";
import css from "../img/css3-brands-solid.svg";
import js from "../img/js-brands-solid.svg";
import cpp from "../img/cuttlefish-brands-solid.svg";
import python from "../img/python-brands-solid.svg";
import nodejs from "../img/node-brands-solid.svg";
import react from "../img/react-brands-solid.svg";
// import nodejs from "../img/node-brands-solid.svg";
import php from "../img/php-brands-solid.svg";

const Skills = () => {
  const [element, controls] = useScroll();

  return (
    <SkillStyles ref={element}>
      <motion.h2 variants={scale} initial="hidden" animate={controls}>
        <span>Technologies </span>I've worked with..
      </motion.h2>
      <Cards>
        <Card icon={html} title="Html" />
        <Card icon={css} title="Css" />
        <Card icon={js} title="JS" />
        <Card icon={cpp} title="C++" />
        <Card icon={python} title="Python" />
        <Card icon={nodejs} title="NodeJs" />
        <Card icon={react} title="React" />
        <Card icon={php} title="php" />
      </Cards>
    </SkillStyles>
  );
};

const SkillStyles = styled(motion.div)`
  min-height: 90vh;
  min-width: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  color: white;
`;
const Cards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  min-height: 80vh;
  min-width: 100%;
  /* padding: 2rem 10rem; */
`;

export default Skills;
