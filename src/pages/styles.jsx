import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  padding: 1rem 10rem;
  padding-bottom: 5rem;
  color: white;
  @media (max-width: 1200px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled(motion.div)`
  flex: 1;
  /* padding-right: 5rem; */
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    padding: g0;
    button {
      margin: 2rem 0rem 5rem 0rem;
      Link{
        text-decoration: none;
      }
    }
  }
`;

export const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  /* padding-right: 5rem; */
  display: flex;
  justify-content: end;
  z-index: 2;
  img {
    width: 80%;
    height: 90vh;
    object-fit: cover;
  }
  @media (max-width: 1500px) {
    img {
      width: 100%;
    }
  }
`;

export const Hide = styled.div`
    overflow: hidden;
`;