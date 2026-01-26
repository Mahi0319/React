import React from "react";

function About() {
  return (
    <>
      <section id="About" className="about-section">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
             Hi, I’m Mahesh, a passionate frontend developer focused on building clean and responsive web applications using HTML, CSS, JavaScript, and React.
             I’m currently improving my React skills and strengthening my JavaScript fundamentals by building real-world projects. I strongly believe in understanding concepts deeply rather than copying code.
            My goal is to grow as a full-stack developer and contribute to meaningful products while continuously learning new technologies.
            </p>
          </div>

          <div className="about-image">
            <h2>My image </h2>
            <img src="MYIMAGE.jpg" alt="Mahesh" height= {100} width={100} align="center" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
