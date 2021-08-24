import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
const AboutMe = () => {
  return (
    <Container id="about">
      <h1 className="text-gray-100 text-5xl text-center">About Me</h1>

      <Info className="flex items-center justify-evenly flex-wrap  ">
        {/* Right section */}
        <Slide left>
          <div className="about__image right h-72 ">
            <img src="/images/logo.jpg" className="rounded-xl" alt="logo" />
          </div>
        </Slide>

        <Slide right>
          {/* left section */}
          <div className="about__text flex items-center justify-center flex-wrap ">
            {/* Wrapper */}
            <p className="about-wrapper__info-text font-black text-gray-100 ">
              i am 17 years old and I am software developer who loves to learn
              new technologies.I started to learn code in mid of 2020. I started
              with Python and Mastered it then i started web development.
            </p>
            {/* resume */}
            <span className="btn">View resume</span>
          </div>
        </Slide>
      </Info>
    </Container>
  );
};

export default AboutMe;

// //--------------------------------
const Container = styled.div`
  height: 600px;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(135deg, #02aab0, #38dbc0);
  clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);

  @media (max-width: 900px) {
    clip-path: none;
  }
`;

// //! info
const Info = styled.div`
  height: 450px;
  width: 90%;
  margin: auto;

  //Info
  .about__text {
    width: 500px;
  }
  // * button
  .btn {
    border: 2px solid white;
    padding: 8px 10px;
    color: white;

    transition: all 0.5s ease-out;
    cursor: pointer;

    :hover {
      box-shadow: inset 12em 0 #eee;
      /* background: white; */
      color: #02aab0;
    }
  }
  @media (max-width: 900px) {
    .about__text {
      margin-top: 10px;
    }
  }
  @media (max-width: 550px) {
    height: 500px;

    .about__text {
      margin-top: 20px;
    }
    .btn {
      margin-top: 10px;
    }
  }
`;
