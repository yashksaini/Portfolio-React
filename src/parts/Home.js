import React from "react";
import "../styles/home.scss";
import home_image from "../images/home_img.png";

const Home = () => {
  const image = home_image;
  return (
    <div className="home">
      <h1>WELCOME</h1>
      <p>
        I am <span>Yash Kumar Saini</span>
      </p>
      <div className="outer_box">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1>
            Web <br /> Developer
          </h1>
          <p>I have a passion for designing and developing web pages.</p>
          <a href="/about" className="contact_btn">
            About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
