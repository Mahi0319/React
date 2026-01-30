import React from "react";
import './Hero.css'; // Make sure you have a CSS file

function Hero() {
  return (
    <>
      <div className="Hero">
        <h1>Hi, I'm Mahesh</h1>
        <p>
          Frontend Developer | Building modern web experiences with HTML, CSS, JavaScript, and React.
        </p>
      </div>

      <div className="Hero1">
        <a className="btn" href="#About">About Me</a>
        <a className="btn1" href="#Skills">Skills</a>
        <a className="btn2" href="#Projects">Projects</a>
        <a className="btn3" href="#Contact">Contact Me</a>
      </div>
    </>
  );
}

export default Hero;
