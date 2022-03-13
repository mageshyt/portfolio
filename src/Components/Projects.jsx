import React from "react";
import styled from "styled-components";
import Tilty from "react-tilty";
import Img from "react-cool-img";

const Projects = ({
  img,
  title,
  description,
  seeLive,
  source,
  screenSize,
  isLoading,
}) => {
  return (
    <Container className="project__container center">
      <InnerContainer className="flex items-center justify-evenly ">
        {/* Left side */}
        <div className="projects__description text-gray-500">
          <div>
            <h2 className="project_topic text-2xl font-bold ">{title}</h2>
            {/* button */}
            <p className="">{description}</p>
            <div className="buttons font-bold p-3">
              {seeLive !== null ? (
                <>
                  <a href={seeLive} className="btn-1 ">
                    See Live
                  </a>
                </>
              ) : (
                <a href={seeLive} className="btn-1 ">
                  Under Development
                </a>
              )}

              <a
                href={source}
                className="btn-2 transition duration-500 ease-in-out  transform hover:-translate-y-2 hover:scale-110"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        {/* Right side */}
        {/* <div className="  project__image border-4  border-gray-900  rounded-lg thumbnail js-tilt"> */}
        <div className="project__image__container shadow-2xl   ">
          {screenSize > 640 ? (
            <Tilty>
              <Img
                src={img}
                className="h-full w-full  p-0.5 rounded-xl  img-fluid"
                alt="project_img"
              />
            </Tilty>
          ) : (
            <img
              src={img}
              className="h-full w-full p-0.5 rounded-xl  img-fluid"
              alt="project_img"
            />
          )}
        </div>
      </InnerContainer>
      {/* <div className="Ptoject__title text-2xl font-bold">Project Title 0</div> */}
    </Container>
  );
};

export default Projects;

//------------------------------------------------------------------------------
const Container = styled.div`
  height: 650px;

  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
  @media (max-width: 550px) {
    height: 550px;
  }
`;
//------------------------------------------------------------------------------
//! Wrap
const InnerContainer = styled.div`
  height: 600px;
  width: 98%;
  margin: auto;
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    a {
      padding: 9px 20px;
      color: #03aab0;
    }

    .btn-1 {
      border: 2px solid #31c6da;
      transition: all 0.6s ease-in;
      :hover {
        box-shadow: inset 12em 0 #02aab0;
        color: #eee;
      }
    }
  }
  .projects__description {
    width: 400px;
    height: 200px;
  }

  .project__image__container {
    /* height: 100%; */
    background-color: #eee;
    width: 900px;
  }
  @media (max-width: 1200px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    .project__image__container {
      width: 700px;
    }
  }
  /* @media (max-width: 900px) {
    flex-wrap: wrap;
  } */

  @media (max-width: 550px) {
    height: 500px;
    .projects__description {
      width: 400px;
    }
  }
`;
