import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const history = useLocation();
  const activePath = history.pathname;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);


  return (
    <StyledNav>
      

      <h1>
        <Link id="logo" to="">
          Personal Portfolio
        </Link>
      </h1>
      <Hamburger onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      
      <ul className={isNavOpen ? "open" : ""}>
        <li>
          <Link to="" onClick={toggleNav}>1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="resume" onClick={toggleNav}>2. Resume</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "resume" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="work" onClick={toggleNav}>3. My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "work" ? "50%" : "0%",
            }}
          />
        </li>
        <li>
          <Link to="contact" onClick={toggleNav}>4. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: activePath === "contact" ? "50%" : "0%",
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
  
transition: ul 2s ease-in-out;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    transition: all 0.5s ease;
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

  @media (max-width: 1200px) {
    /* flex-direction: column; */
    padding: 2rem;

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top:10vh;
      left:0;

      background-color: #282828;
      opacity: 0.9;

      width: 100%;
      text-align: center;

      &.open {
        display: flex;
      }

      li {
        padding: 1rem 0;
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 1200px) {
    display: block;
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
