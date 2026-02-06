import React from "react";

function Certifications() {
  return (
    <section id="Certifications" className="cert-section">
      <h2>Certifications</h2>
      <p>
        These certifications highlight my achievements and participation in
        technical learning activities.
      </p>

      <div className="cert-list">

        <div className="cert-item">
          <p>Vibe Coding – Top Performer</p>
          <a href="/VIBECODING.jpeg" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        <div className="cert-item">
          <p>2nd Prize – Web Architect (CSI Mahotsav)</p>
          <a href="/WEBARCHITECT.jpeg" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        <div className="cert-item">
          <p>Full Stack Development Completion</p>
          <a href="/FULLSTACK.jpeg" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        <div className="cert-item">
          <p>Wiser Qubitech – Course Completion</p>
          <a href="/WISER.jpeg" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

        <div className="cert-item">
          <p>Innovarsity – Workshop Certificate</p>
          <a href="/INNOVARSITY.jpeg" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certifications;
