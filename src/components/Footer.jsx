import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
//importing images
import pic from '../img/maroofmy.png';
import leetcode  from '../img/leetcode-svgrepo-com.svg'
import linkedin  from '../img/linkedin-brands-solid.svg'
import github  from '../img/github-brands-solid.svg'

const Footer = () => {
  return (
    <FooterContent>
      <div className="mainContainer">
        <div className="rightcont">
          <div className="icons">
            <a href="https://www.github.com/maroofhasankhan" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://leetcode.com/u/maroofhasankhan/" target="_blank">
              <img src={leetcode} alt="leetcode" />
            </a>
            <a
              href="https://www.linkedin.com/in/maroof-hasan-khan/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="branding">
        <h3>Made with Love ❣️ by ©️ Maroof Hasan Khan</h3>
      </div>
    </FooterContent>
  );
}

const FooterContent = styled(motion.div)`
  min-height: 10rem;
  border-top: 2px solid white;
  /* margin-top: 2rem; */
  .mainContainer {
    display: flex;

    padding: 2rem 10%;
    
    .rightcont {
      color: white;
      flex: 1;
      /* border:2px solid white; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .icons {
        display: flex;
        width: 60vw;

        justify-content: space-between;
        a {
          img {
            cursor: pointer;
            height: 2.5rem;
            width: 2.5rem;
          }
        }
      }
    }
  }
  .branding {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      padding: 1rem;
      text-align: center;
    }
    background-color: #353535;
  }
`;
export default Footer
