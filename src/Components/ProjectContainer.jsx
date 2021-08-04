import React from "react";
import Projects from "./Projects";
import styled from "styled-components";
function ProjectContainer() {
  return (
    <Container>
      <h1 className=" text-center text-3xl uppercase m-4 ">Projects</h1>
      <ProjectsContainer>
        {/* projects */}
        <Projects
          topics="Disney Clone"
          description="This is the Disney Plus Hotstar Clone .it is my First Beautiful react Project . "
          image="./images/project-1.png"
          seeLive="https://disney-hotstar-clone-f6f0b.web.app/"
          source="https://github.com/mageshyt/DisneyClone"
          animation="left"
        />
        <Projects
          topics="Tesla HomePage Clone"
          description="This is tesla Home page clone annd My favourite Project 🤟🏻"
          image="./images/project-2.png"
          seeLive="https://tesla-clone-a8624.web.app/"
          source="https://github.com/mageshyt/TeslaClone"
          animation=""
        />
        <Projects
          topics="Covid-19 Tracker"
          description="Covid 19 Tracker is one of the best projects i ever done because i learnt so much form it"
          image="./images/project-4.png"
          seeLive="https://covid-19-tracker-65d26.web.app/"
          source=""
          animation=""
        />
        <Projects
          topics="Space X clone"
          description="This is space X  Home page clone .soon i will clone Entire space X "
          image="./images/project-3.png"
          seeLive="https://space-x-4a9f1.web.app/"
          source=""
          animation=""
        />
        <Projects
          topics="Amazon 2.0"
          description="This is Amazon 2.0 clone made by using tailwind css .learnt many thing in Tailwind css "
          image="./images/project-5.png"
          seeLive="https://mageshyt.github.io/amazon-2.0/"
          source="https://github.com/mageshyt/amazon-2.0"
          animation=""
        />
      </ProjectsContainer>
    </Container>
  );
}

export default ProjectContainer;
const Container = styled.div`
  /* height: 1000px;
  width: 100vw; */
  h1 {
    font-weight: 800;
    letter-spacing: 2px;
  }
`;
const ProjectsContainer = styled.div``;
