import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "./animation";
import { motion } from "framer-motion";
import { Hide } from "../pages/styles";


const ContactUs = () => {
  return (
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show">
      <Hide>
      <motion.h1 className="h1" variants={titleAnim}>
        <span>Contact</span> Us
      </motion.h1>

      </Hide>

      <Contact>
        <div className="left">
          
          
        </div>
        <div className="right">
          <div className="form-container">
            <form action="https://formspree.io/f/xdkodkbr" method="POST">
              <div className="label">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="label">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="label">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <input
                type="submit"
                style={{ cursor: "pointer" }}
                value="Send"
              />
            </form>
          </div>
        </div>
      </Contact>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  background-color: #353535;

  h1 {
    padding: 1rem;
    color: white;
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  .left {
    flex: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img{
      height: 50rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .contact-info {
      margin-top: 2rem;
      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: white;

        a {
          color: #23d997;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .right {
    flex: 1;
    padding: 2rem;

    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-bottom: 1rem;
    }

    label {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 0.8rem;
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      color: white;
      background-color: transparent;
      border-bottom: 2px solid #23d997;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }

    textarea {
      height: 12rem;
    }
  }

  @media (max-width: 1200px) {
    display: block;
  }
`;

export default ContactUs;
