import React from "react";

function Contact() {
  return (
    <section id="Contact" className="contact-section" align="center">
      <h2>Contact Me</h2>
      <p>I’m always open to internships, collaborations, or questions. Feel free to reach out!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> maheshmarella2006@gmail.com</p>
        <p><strong>Phone:</strong> +91 6281051033</p>
        <p><strong>Location:</strong> India</p>
      </div>

      {/* Buttons for GitHub & LinkedIn */}
      <div className="contact-buttons">
        <a href="https://github.com/Mahi0319"target="_blank"className="contact-btn">GitHub</a>

        <a
          href="https://linkedin.com/in/mahesh-babu-marella-687156387"target="_blank"rel="noopener noreferrer" className="contact-btn">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
