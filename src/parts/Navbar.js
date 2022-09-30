import React from "react";
import "../styles/navbar.scss";

const Navbar = () => {
  const currentURL = window.location.href + "#";
  let currentValue;
  const url = window.location.href;
  const url_part = url.split("/");
  const part = url_part[3];
  console.log(part);
  if (part === "about") {
    currentValue = 2;
    console.log(currentValue);
  } else if (part === "skills") {
    currentValue = 3;
    console.log(currentValue);
  } else if (part === "projects") {
    currentValue = 4;
    console.log(currentValue);
  } else if (part === "contact") {
    currentValue = 5;
    console.log(currentValue);
  } else {
    currentValue = 1;
  }

  return (
    <>
      <div className="navbar">
        <h1>
          <span>Y</span>ash<span>KS</span>
        </h1>
        <a href="#portfolio" id="portfolio">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <a href={currentURL}></a>

          <div className="navs">
            <a href="/" className={currentValue === 1 ? "active" : ""}>
              HOME
            </a>
            <a href="/about" className={currentValue === 2 ? "active" : ""}>
              ABOUT
            </a>
            <a href="/skills" className={currentValue === 3 ? "active" : ""}>
              SKILLS
            </a>
            <a href="/projects" className={currentValue === 4 ? "active" : ""}>
              PROJECTS
            </a>
            <a href="/contact" className={currentValue === 5 ? "active" : ""}>
              CONTACT
            </a>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
