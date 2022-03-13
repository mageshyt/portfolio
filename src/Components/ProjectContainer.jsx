import React, { useEffect } from "react";

import projectData from "../assets/Data";
import { client } from "../lib/SanityClinet";
import Projects from "./Projects";

const ProjectContainer = React.memo(({ WidthSize }) => {
  const [project, setProject] = React.useState([]);
  //! to track loading and setloading
  const [loading, setLoading] = React.useState(null);
  useEffect(() => {
    const fetchData = async (sanityClient = client) => {
      const query = `
     *[_type =='project']{
  title,
  description,
  "projectImg":image.asset->url,
  url,
  repo_url
}
     `;
      setLoading(true);
      const result = await sanityClient.fetch(query);
      setProject(result);
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log("project 👉", project);
  return (
    <div>
      <h1 className="text-4xl font-black mt-4 text-gray-900 text-center">
        Projects
      </h1>
      <div className="project__container">
        {project.map((item, idx) => (
          <Projects
            key={idx}
            img={item?.projectImg}
            title={item?.title}
            description={item?.description}
            seeLive={item?.url}
            source={item?.repo_url}
            screenSize={WidthSize}
            isLoading={loading}
          />
        ))}
      </div>
    </div>
  );
});

export default ProjectContainer;
