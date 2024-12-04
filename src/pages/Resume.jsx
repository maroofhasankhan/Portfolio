import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { flipAni, pageAnimation, titleAnim } from "./animation";
import { Hide } from "../pages/styles";
import { useScroll } from "../components/useScroll";
const Resume = () => {

  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();

  return (
    <Content
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ResumeCard>
        <Hide>
          <motion.h1 variants={titleAnim}>My Resume</motion.h1>
        </Hide>
        <p>
          Thank you for taking the time to explore my portfolio. I’m a firm
          believer in the power of collaboration and the amazing results that
          can be achieved when like-minded individuals work together toward a
          common goal. I’m passionate about building innovative and reliable
          solutions, and I’m excited to bring my skills to your team. Let’s
          connect and discuss how we can collaborate to make a meaningful
          impact.
        </p>
        <a href="https://docs.google.com/document/d/11EqV-6h7X36ZG5VQ06p836tpFcTYeNPvGC12PlJ-G9c/edit?usp=sharing" target="_blank">
          <button>My Resume 🔗</button>
        </a>
      </ResumeCard>
      <Exp>
        <h1>My Journey</h1>

        <div className="row">
          <div className="pcol"></div>
          <motion.div
            className="acol"
            variants={flipAni}
            initial="hidden"
            animate={controls}
            ref={element}
          >
            <div className="cont">
              <h3>
                SDE Intern<span>10-2024 to Present</span>
              </h3>
              <h4>Internship</h4>
              <h3>SMILe Digital Ai Labs, Pune </h3>
            </div>
          </motion.div>
        </div>

        <div className="row">
          <motion.div
            className="acol"
            variants={flipAni}
            initial="hidden"
            animate={controls}
            ref={element}
          >
            <div className="cont">
              <h3>
                Master of computer Application<span>06-2023 to 06-2025</span>
              </h3>
              <h4>8.1 CGPA</h4>
              <h3>Lovely Professional University, Punjab, India</h3>
            </div>
          </motion.div>
          <div className="pcol"></div>
        </div>
        <div className="row">
          <div className="pcol"></div>
          <motion.div
            className="acol"
            variants={flipAni}
            initial="hidden"
            animate={controls1}
            ref={element1}
          >
            <div className="cont">
              <h3>
                Bachelor of computer Application<span>06-2020 to 06-2023</span>
              </h3>
              <h4>8.0 CGPA</h4>
              <h3>Lovely Professional University, Punjab, India</h3>
            </div>
          </motion.div>
        </div>
        <div className="row">
          <motion.div
            className="acol"
            variants={flipAni}
            initial="hidden"
            animate={controls1}
            ref={element1}
          >
            <div className="cont">
              <h3>
                Intermediate<span>05-2019 to 06-2020</span>
              </h3>
              <h4>69%</h4>
              <h3>Ewing Christian Public School, Allahabad, India</h3>
            </div>
          </motion.div>
          <div className="pcol"></div>
        </div>
      </Exp>
    </Content>
  );
};

const Content = styled(motion.div)`
  color: white;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }
  p {
    font-weight: 400;
    text-align: center;
  }
  @media (max-width: 1200px) {
    .pcol{
      display: none;
    }
    .acol{
      margin-bottom: 1rem;
      span{
        display: inline;
      }
    }
  }
  @media (max-width: 1000px) {
    .pcol{
      display: none;
    }
    .acol{
      margin-bottom: 1rem;
      span{
        display: none;
      }
    }
  }
  @media (max-width: 700px) {
    .pcol{
      display: none;
    }
    .acol{
      margin-bottom: 1rem;
      span{
        display: none;
      }
    }
  }
  @media (max-width: 500px) {
    .pcol{
      display: none;
    }
    .acol{
      margin-bottom: 1rem;
      span{
        display: none;
      }
    }
  }
`;

const ResumeCard = styled(motion.div)`
  min-height: 60vh;
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  align-items: center;
  justify-content: space-evenly;

  button {
    padding: 1.5rem 4rem;
    font-size: 1.5rem;
  }
`;
const Exp = styled(motion.div)`
  min-height: 100vh;
  width: 95vw;
  margin: 0 auto;
  border-radius: 2.5rem;
  background-color: #353535;
  padding: 4rem;
  h1 {
    padding-bottom: 2rem;
  }
  .row {
    display: flex;
    width: 100%;
  }
  .acol {
    flex: 1;
    border: 1px solid #23d997;
    min-height: 12rem;
    margin: 0px 4px;
    .cont {
      padding: 3rem;
      h3 {
        font-size: 1.8rem;
        position: relative;
        padding: 1rem 0;
        span {
          position: absolute;
          right: 0rem;
          top: 0rem;
        }
      }
      h3 {
        font-size: 1.5rem;
      }
    }
  }
  .pcol {
    flex: 1;
    min-height: 12rem;
  }
`;

export default Resume;
