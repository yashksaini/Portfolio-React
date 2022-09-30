import React from "react";
import "../styles/projects.scss";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">My Projects</h1>
      <div className="all_projects">
        <Card />
      </div>
      <a href="/contact" className="contact_btn">
        Connect with ME
      </a>
    </div>
  );
};

export default Projects;
