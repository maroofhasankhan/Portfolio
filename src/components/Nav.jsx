import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const history = useLocation();
  const activePath = history.pathname;
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="capture-Portfolio/">
          Personal Portfolio
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="capture-Portfolio/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "capture-Portfolio/" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="capture-Portfolio/resume">2. Resume</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "capture-Portfolio/" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="capture-Portfolio/work">3. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "capture-Portfolio/work" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="capture-Portfolio/contact">4. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "capture-Portfolio/contact" ? "50%" : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 1000;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
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

export default Nav;
