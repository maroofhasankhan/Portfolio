import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import {MovieState} from '../movieState';
//animation 
import { pageAnimation } from "../pages/animation";
import { motion } from "framer-motion";

const MovieDetail =()=>{
    const location = useLocation();
    const url = location.pathname;

    const [movies,setMovies]=useState(MovieState);

    const [movie,setMovie] = useState(null);

    useEffect(()=>{
        const currentMovie= movies.filter((stateMovie)=>stateMovie.url===url)
        setMovie(currentMovie[0])
    },[movies,url])

    return (
      <>
        {movie && (
          <Details variants={pageAnimation} initial="hidden" animate="show">
            <HeadLine>
              <h2>{movie.title}</h2>

              <motion.video
                muted
                loop
                autoPlay
              >
                <source src={movie.mainImg} type="video/mp4"></source>
              </motion.video>
            </HeadLine>
            <Awards>
              {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              ))}
            </Awards>
          </Details>
        )}
      </>
    );
}
const Details =styled(motion.div)`
    color: white;

`
const HeadLine =styled.div`
    min-height: 90%;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;

    h2{
        text-align: center;
        padding-bottom:2rem;
    }
    video{
        width:90%;
        height: 70%;
        display: inline-block;
        border-radius: 1rem;
        margin: 0 auto;
        object-fit: cover;
        box-shadow:2px 2px 10px #23d997;
    }
    `
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;



const Award=({title,description})=> {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
}


export default MovieDetail;