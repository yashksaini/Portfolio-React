import React from "react";
import "../styles/contact.scss";
import github_img from "../images/contact_images/github.png";
import linkedin_img from "../images/contact_images/linkedin.png";
import gmail_img from "../images/contact_images/gmail.png";
import twitter_img from "../images/contact_images/twitter.png";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="heading">Get In Touch</h1>
      <p>Feel free to contact me</p>
      <div className="circle1"></div>
      <div className="circle3"></div>
      <div className="circle2"></div>
      <div className="circle4"></div>
      <div className="social">
        <a href="https://github.com/yashkumarsaini1" target="_blank">
          <img src={github_img}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/yash-kumar-saini-890a95201/"
          target="_blank"
        >
          <img src={linkedin_img}></img>
        </a>
        <a href="https://twitter.com/Yash_0606" target="_blank">
          <img src={twitter_img}></img>
        </a>
        <a href="mailto:yashallendms@gmail.com" target="_blank">
          <img src={gmail_img}></img>
        </a>
      </div>
      <a href="/about" className="contact_btn">
        About Me
      </a>
    </div>
  );
};

export default Contact;
