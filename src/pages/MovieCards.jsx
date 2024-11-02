import React from 'react';
import {
  lineAnim,
  fade,
  photoAnim,
} from "../pages/animation";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hide } from './styles';


const MovieCards = ({title, img, url}) => {
  const [element3, controls3] = useScroll();

  return (
    <Movie variants={fade} animate={controls3} initial="hidden" ref={element3}>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={url}>
        <Hide>
          <motion.video variants={photoAnim} muted loop autoPlay alt="athelete">
            <source src={img} type="video/mp4"></source>
          </motion.video>
        </Hide>
      </Link>
    </Movie>
  );
}

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  video {
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;
export default MovieCards;
