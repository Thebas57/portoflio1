import React, { useState } from "react";
import { projectsData } from "../data/projects.js";
import Project from "./Project.js";

const Projects = () => {
  const [isFilter, setIsFilter] = useState("javascript");
  return (
    <div className="projects-container">
      <div className="projects">
        <h1>Mes projets</h1>
        <p>
          Le lorem ipsum est, en imprimerie, une suite de mots sans
          signification utilisée à titre provisoire pour calibrer une mise en
          page, le texte définitif venant remplacer le faux-texte dès qu'il est
          prêt.
        </p>
        <div className="filter">
          <div
            className={isFilter === "javascript" ? "select" : ""}
            onClick={(e) => setIsFilter("javascript")}
          >
            JS
          </div>
          <div
            className={isFilter === "react" ? "select" : ""}
            onClick={(e) => setIsFilter("react")}
          >
            REACT
          </div>
          <div
            className={isFilter === "css" ? "select" : ""}
            onClick={(e) => setIsFilter("css")}
          >
            CSS
          </div>
        </div>
        <div className="projects-list">
          {projectsData
            .filter((project) => project.languages.includes(isFilter))
            .map((project) => {
              return <Project props={project} key={project.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
