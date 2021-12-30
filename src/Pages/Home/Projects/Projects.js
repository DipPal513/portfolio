import React from "react";
import "../../../Styles/Projects.css";
import Project from "./Project";

const Projects = () => {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "gym website",
      link: "https://simple-gym-website.firebaseapp.com/home",
      id: 1,
    },
    {
      image:
        "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "furniture website",
      link: "https://amado-template.netlify.app/",
      id: 2,
    },
    {
      image:
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "jewelry website",
      link: "https://simple-jewelry-website.firebaseapp.com/",
      id: 3,
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="text-uppercase text-center fw-bold">
          my recent <span style={{ color: "var(--main-color)" }}>projects</span>
        </h2>
     
        <div className="row ">
          {data.map((info, index) => (
         
              <Project key={index} info={info} />
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
