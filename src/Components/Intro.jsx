import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// import Img from "react-cool-img";

import { BackgroundImage } from "react-image-and-background-image-fade";
const Intro = React.memo(() => {
  return (
    <Container id="home">
      <BackgroundImage
        src="/images/bg-3.jpg"
        height="100%"
        width="100%"
        className="bg-cover object-contain bg-center bg-no-repeat "
        isResponsive={true}
        lazyLoad
      />
      <InfoBox>
        <Fade left>
          <div className="info">
            <div>
              <h1>
                Hi,my name is <span>Magesh </span>
              </h1>

              <h2>I'm Frontend Developer 🖖🏻.</h2>
            </div>
          </div>
          <Button className="btn">
            {/* {"button outline "} */}
            <a href="#about">Know More</a>{" "}
          </Button>
        </Fade>
      </InfoBox>
    </Container>
  );
});
export default Intro;

//Styling
const Container = styled.div`
  /* background: #2c2e43; */
  /* background: url("/images/bg-3.jpg") no-repeat;
  background-position: center;
  background-size: cover; */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 550px) {
    width: 100vw;
    height: 100vh;
  }
`;

const InfoBox = styled.div`
  height: 15rem;
  width: 1125px;
  text-align: center;
  color: #fdf6f0;
  position: absolute;
  h1 {
    font-family: "Roboto Slab", serif;
    font-size: 3.5rem;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 2rem;
  }
  span {
    background: -webkit-linear-gradient(left, #02aab0, #0e98aa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;

//----------------------------------------------------------------
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  cursor: pointer;
  a {
    letter-spacing: 1px;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 800;
    color: #02aab0;
    border: 2px solid #02aab0;
    transition: all 0.5s ease-out;
  }

  a:hover {
    box-shadow: inset 12em 0 #02aab0;
    cursor: pointer;
    color: rgb(255, 255, 255);
  }
`;
