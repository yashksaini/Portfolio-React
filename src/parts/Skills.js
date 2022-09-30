import React from "react";
import "../styles/skills.scss";

const images = [
  "html",
  "css",
  "js",
  "php",
  "bootstrap",
  "jquery",
  "firebase",
  "mysql",
  "c",
  "c++",
  "angular",
  "react",
  "python",
  "figma",
  "inkscape",
  "sass",
  "java",
];
const renderImages = [];
for (let i = 0; i < images.length; i++) {
  let a = "all_skills/" + images[i] + ".png";
  renderImages.push(
    <div className="each_skill">
      <img src={a}></img>
      <p>{images[i]}</p>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="heading">My Skills</h1>
      <div className="all_skills">{renderImages}</div>
      <a href="/projects" className="contact_btn">
        My Projects
      </a>
    </div>
  );
};

export default Skills;
