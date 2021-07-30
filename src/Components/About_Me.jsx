import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
const AboutMe = () => {
  return (
    <Container>
      <Slide left>
        <h1 className="text-5xl text-white text-center scale-75 p-4 ">
          About Me
        </h1>
        <Info className="">
          <div class="">
            <div className="about-wrapper__image">
              <img
                src="/images/logo.jpg"
                classNames="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text text-white">
                This is where you can describe about yourself. The more you
                describe about yourself, the more chances you can!
              </p>

              <span className="btn p-2">View Resume</span>
            </div>
          </div>
        </Info>
      </Slide>
    </Container>
  );
};

export default AboutMe;

//--------------------------------
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 800;
  }
  font-family: "Montserrat", sans-serif;
  height: 600px;
  width: 100vw;
  background: linear-gradient(135deg, #02aab0, #38dbc0);
  clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  .about {
    color: white;
    font-size: 40px;
    text-align: center;
    /* margin-top: 10px; */
    padding-top: 20px;
  }
  @media (max-width: 900px) {
    clip-path: none;
    height: 700px;
  }
`;

//-----------------------------------------------------
//! info
const Info = styled.div`
  display: flex;
  margin-left: 30px;
  width: 1140px;
  height: 395px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  //! Image container
  .about-wrapper__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 555px;
  }
  //!Info container
  .about-wrapper__info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 300px;
    width: 555px;
  }
  //* button
  .btn {
    border: 2px solid white;
    color: white;
    /* font-family: "Roboto", sans-serif; */
    transition: all 0.5s ease-out;
    cursor: pointer;
    letter-spacing: 1px;
    margin-top: 10px;
    :hover {
      box-shadow: inset 12em 0 #eee;
      /* background: white; */
      color: #02aab0;
    }
  }

  //-----------------------------------------------------
  @media (max-width: 900px) {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 100vw;
    height: 100%;

    .about-wrapper__info-text {
      width: 500px;
      text-align: left;
    }
  }
  @media (max-width: 550px) {
    height: 100%;
    .about-wrapper__info-text {
      width: 350px;
      text-align: left;
    }
  }
  @media (max-width: 1200px) {
    .about-wrapper__info {
      width: 450px;
    }
  }
`;
