import React from "react";

function Projects() {
  return (
    <section id="Projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built to showcase my skills, projects,
            and contact information. It is fully responsive and built using
            modern frontend technologies.
          </p>
          <p className="tech">
            <strong>Tech:</strong> HTML, CSS, JavaScript, React
          </p>
        </div>

        <div className="project-card">
          <h3>Ship Reservation System</h3>
          <p>
            A frontend ship reservation system developed during a workshop.
            Users can view ship details and make reservations using a clean UI.
          </p>
          <p className="tech">
            <strong>Tech:</strong> HTML, CSS, JavaScript
          </p>
        </div>
       <div className="project-card">
  <h3>KIVO :Kids Integrated Value-Oriented Mobile</h3>
  <p>
    A value-oriented website concept designed for kids, focusing on combining
    learning and technology in a simple and user-friendly interface. The project
    emphasizes clean UI, responsiveness, and structured content.
  </p>
  <p className="tech">
    <strong>Tech:</strong> HTML, CSS, JavaScript
  </p>
</div>
  <div className="project-card">
  <h3>Farmer Soil Testing Kit</h3>
  <p>
    I implemented a hardware-based soil testing kit using Arduino and real-time soil sensors to measure important soil parameters. 
    The sensor data was transmitted to the cloud using Blynk for live monitoring and ThingSpeak for data storage and visualization
    through graphs. This project helped me understand real-time data acquisition, IoT cloud integration, and the connection between
    hardware and software systems for practical agricultural applications.
  </p>
  <p className="tech">
    <strong>Tech:</strong> Arduino, Soil Sensors, Blynk, ThingSpeak
  </p>
</div>
      </div>
    </section>
  );
}

export default Projects;
