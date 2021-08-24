import React from "react";

import projectData from "../assets/Data";
import Projects from "./Projects";

const Test = () => {
  console.log(projectData);
  return (
    <div>
      <h1 className="text-4xl font-black text-gray-900 text-center">
        Projects
      </h1>
      <div className="project__container">
        {projectData.map(({ img, title, description, seeLive, source }) => (
          <Projects
            key={img}
            img={img}
            title={title}
            description={description}
            seeLive={seeLive}
            source={source}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
