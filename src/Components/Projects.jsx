import React from "react";
import styled from "styled-components";
import Tilty from "react-tilty";
const Projects = (props) => {
  return (
    <Container>
      <Wrap>
        <div className="project__info">
          <h3 className="text-2xl">{props.topics}</h3>
          <div className="m-4 project__description">
            <p className="">{props.description}</p>
          </div>
          <div className="buttons font-bold p-3">
            <a href={props.seeLive} className="btn-1 ">
              See Live
            </a>
            <a
              href={props.source}
              className="btn-2 transition duration-500 ease-in-out  transform hover:-translate-y-2 hover:scale-110"
            >
              Source Code
            </a>
          </div>
        </div>
        {/*!image */}
        <div className="">
          <Tilty>
            <div className=" shadow-2xl project__image border-4  border-gray-900  rounded-lg thumbnail js-tilt">
              <img
                src={props.image}
                className="h-full w-full p-0.5  img-fluid"
                alt=""
              />
            </div>
          </Tilty>
        </div>
      </Wrap>
      {/* <div className="Ptoject__title text-2xl font-bold">Project Title 0</div> */}
    </Container>
  );
};

export default Projects;

//------------------------------------------------------------------------------
const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  /* @media (max-width: 1200px) {
    width: 800px;
  } */
`;
//------------------------------------------------------------------------------
//! Wrap
const Wrap = styled.div`
  width: 1320px;
  height: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    color: #272341;
    font-size: 25px;
  }
  /* background: black; */
  //* project__info
  .project__info {
    height: 370px;
    width: 380px;
  }
  .project__image {
    height: 350px;
    width: 675px;
    /* background-position: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/images/project-1.png"); */
  }
  //* Description
  .project__description {
    font-family: "Montserrat";
    color: #272341;
  }
  //* buttons
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    a {
      padding: 8px 20px;
      color: #02aab0;
    }
    //!button 1
    .btn-1 {
      border: 2px solid #31c6da;
      transition: all 0.6s ease-in;
      :hover {
        box-shadow: inset 12em 0 #02aab0;
        color: #eee;
      }
    }
    //!button 2
  }
  @media (max-width: 1200px) {
    /* margin-top: 70px; */
    width: 900px;
    .project__info {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }
    .project__description {
      width: auto;
    }
    .project__image {
      /* height: 40px; */
      height: auto;
      width: 500px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    .project__image {
      /* width: 400px;
      height: auto; */
      /* display: grid;
      grid-template-columns: 1fr; */
    }
  }
  @media (max-width: 550px) {
    .project__image {
      width: 350px;
      height: 200px;
    }
  }
`;
