import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { flipAni, skiingAnimation, titleAnim } from "../pages/animation";
import { Hide } from '../pages/styles';



const Card = ({icon,title}) => {
  const [element, controls] = useScroll();

  return (
    <Cards variants={flipAni} initial="hidden" animate={controls} ref={element}>
      <Image
        whileHover={{
          rotate: 360,
          transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
        }}
      >
        <motion.img
          src={icon}
          alt={title}
          variants={skiingAnimation.variants}
          initial={skiingAnimation.initial}
          animate={skiingAnimation.animate}
        />
      </Image>
      <Hide>
        <motion.h2 variants={titleAnim}>{title}</motion.h2>
      </Hide>
    </Cards>
  );
}

const Cards = styled(motion.div)`
  min-height: 10rem;
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(6, 6, 6, 0.5);
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  margin: 1rem 2rem;
  box-shadow: 2px 2px 5px 5px rgba(35, 217, 148, 0.3);
  h2{
    font-size: 2rem;
  }

`;
const Image = styled(motion.div)`
    border-radius: 50%;
    padding: 1rem;
  img{
    margin: 1rem 0rem;
    height: 6rem;
      width: 6rem;
  }
  
  
`
export default Card;
