import React from "react";
import "../styles/card.scss";
const Card = () => {
  const projects = [
    {
      id: "1",
      name: "ProjectNet",
      link: "https://projectnet-b4b88.firebaseapp.com/",
      skills: "Angular,HTML,CSS,Firebase,Typescript",
      desc: "A project sharing platform.Here you find projects shared by others.You can also add your projects.",
    },
    {
      id: "2",
      name: "Classroom",
      link: "https://signup-cbcaa.firebaseapp.com/",
      skills: "Angular,HTML,CSS,Firebase,Typescript",
      desc: "Create your own classroom. Add students, give assignments, give notice to the class.",
    },
    {
      id: "3",
      name: "Data Collection",
      link: "http://datacollection.epizy.com/",
      skills: "PHP,MySql,HTML,CSS,JavaScript",
      desc: "It is a data collection website where teachers submit marks according to the test.Admin get filled data in excel format.",
    },
    {
      id: "4",
      name: "NeoApp",
      link: "http://neoapp.epizy.com/",
      skills: "PHP,MySql,HTML,CSS,JavaScript,Ajax",
      desc: "A social networking site.Connect with like minded students and share your thoughts with them.",
    },
    {
      id: "5",
      name: "My Portfolio",
      link: "https://yashksportfolio.netlify.app/",
      skills: "React,Sass",
      desc: "My portfolio website, it tells about me, my skills,my projects and experience in an attractive way. ",
    },
    {
      id: "6",
      name: "Cricket T20 World Cup",
      link: "https://t20worldcup.netlify.app/",
      skills: "Jquery,JavaScript,HTML,CSS,Game",
      desc: "Create your own world cup match with your perfect playing 11.It is a 20 Over Match.",
    },
    {
      id: "7",
      name: "IPL 2021",
      link: "https://2021ipl.netlify.app/",
      skills: "Jquery,JavaScript,HTML,CSS,Game",
      desc: "Create your own IPL match with your perfect playing 11.It is a 20 Over Match.",
    },
    {
      id: "8",
      name: "LUDO",
      link: "https://gameludo.netlify.app/",
      skills: "JavaScript,HTML,CSS,Game",
      desc: "Play LUDO Game with four players. Start the game with red first.Play and enjoy the game.",
    },
    {
      id: "9",
      name: "Mathematics Website",
      link: "https://babulaldms.github.io/maths/",
      skills: "HTML,CSS,JavaScript,Educational",
      desc: "This site contains video lectures of Mathematics of class 10th, 11th, 12th . View video lectures through this website.",
    },
    {
      id: "10",
      name: "Bingo V/s Computer",
      link: "https://cbingo.netlify.app/",
      skills: "HTML,CSS,JavaScript,Game",
      desc: "Play Bingo game against computer and enjoy the game.",
    },
    {
      id: "11",
      name: "Tic Tac Toe V/s AI",
      link: "https://tictactoe-vs-ai.netlify.app/",
      skills: "HTML,CSS,JavaScript,Game",
      desc: "Play Tic Tac Toe V/s Computer. Try to defeat the computer and enjoy playing the game.",
    },
    {
      id: "12",
      name: "Code Time Music",
      link: "https://codetimemusic.netlify.app/",
      skills: "HTML,CSS,JavaScript,Music",
      desc: "This site contain some background music which can be played in background while coding.",
    },
  ];
  const all_projects = [];

  for (let i = 0; i < projects.length; i++) {
    let img_link = "project_images/" + projects[i].id + ".png";

    let a_skills = projects[i].skills.split(",");
    let data = [];
    for (let j = 0; j < a_skills.length; j++) {
      data.push(<div>{a_skills[j]}</div>);
    }

    all_projects.push(
      <a className="card" href={projects[i].link} target="_blank">
        <div className="card-top">
          <img src={img_link} alt=""></img>
          <div className="counter">{projects[i].id}</div>
        </div>
        <div className="card-bottom">
          <h1>{projects[i].name}</h1>
          <div className="all_lang">{data}</div>
          <div className="prj_desc">{projects[i].desc}</div>
        </div>
      </a>
    );
  }
  return <>{all_projects}</>;
};

export default Card;
