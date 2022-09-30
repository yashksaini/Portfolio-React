import React from "react";
import "../styles/about.scss";
import image from "../images/about_img.png";
const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about_box">
        <div>
          <img src={image}></img>
        </div>
        <div>
          <p>
            I am <b>Yash Kumar Saini</b>.
            <br /> Presently, I am doing engineering in the field of{" "}
            <b>Computer Science</b> (2019 - 2023) from{" "}
            <b>Government Engineering College</b>, Ajmer ( Rajasthan ).
          </p>
          <p>
            I am giving my time to developing <b>Dynamic | Static</b> web pages.
            I get energized by making real-life projects on the web.
          </p>
          <p className="tagline">
            "I am young enthusiastic and dedicated to work with full energy."
          </p>
          <div className="box1"></div>
          <div className="long1"></div>
          <a href="/skills" className="contact_btn">
            My Skills
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
