import React,{useState} from "react";
// styled
import styled from "styled-components";
import {MovieState} from "../movieState";
//animation
import {
  pageAnimation,
  slider,
  sliderContainer,
} from "../pages/animation";
import { motion } from "framer-motion";
import ScrollTop from '../components/ScrollTop'
import MovieCards from "./MovieCards";

const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);

  return (
    <>
      <Work
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ScrollTop />
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
        {movies &&
          movies.map((movie) => (
            <MovieCards
              key={movie.title}
              title={movie.title}
              img={movie.mainImg}
              url={movie.url}
            ></MovieCards>
          ))}

        <screenTop />
      </Work>
    </>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
`;



const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
