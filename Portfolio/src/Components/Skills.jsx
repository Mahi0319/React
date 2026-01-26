import React from "react";

function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <h2>Skills</h2>

      {/* Skills paragraph */}
      <p className="skills-summary">
        I have a strong interest in frontend development and a solid foundation
        in HTML, CSS, and JavaScript. I am currently working with React.js and
        learning how to build component-based user interfaces. I am curious
        about programming languages and enjoy understanding how things work at a
        deeper level. Along with frontend technologies, I have learned the
        basics of C and Java, and I am currently learning Python to further
        improve my programming skills.
      </p>
      <div className="skills-points">
        <h4>Frontend</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>

        <h4>Programming Languages</h4>
        <ul>
          <li>C </li>
          <li>Java </li>
          <li>Python </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
