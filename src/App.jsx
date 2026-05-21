import { useState } from "react";

export default function App() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={lightMode ? "container light-mode" : "container"}>
      <button
  className="theme-toggle"
  onClick={() => setLightMode(!lightMode)}
>
  {lightMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
      <section className="hero">
        <img src="/profile.jpg" alt="Adewale Sunday Garreth" className="profile-photo" />

        <h1>Adewale Sunday Garreth</h1>
        <h2 className="typing-text">
  Civil Site Engineer | Full Stack Web Developer | Project Supervisor
</h2>

        <p>
          Dedicated and results-driven professional with experience in construction
          supervision, project coordination, and digital solutions development.
        </p>

<section className="certifications">
  <h2>Certifications</h2>

  <div className="cert-grid">
    <div className="cert-card">
      <h3>Full Stack Software Engineering</h3>
      <p>Axiom Institute of Advanced Learning</p>
      <span>2024</span>
    </div>

    <div className="cert-card">
      <h3>Python Programming Diploma</h3>
      <p>Opecsta Academy</p>
      <span>2022</span>
    </div>

    <div className="cert-card">
      <h3>AutoCAD Certification</h3>
      <p>Professional Technical Certification</p>
      <span>Completed</span>
    </div>

    <div className="cert-card">
      <h3>Project Management Certification</h3>
      <p>Professional Development</p>
      <span>Completed</span>
    </div>
  </div>
</section>
        
        <div className="links">
          <a href="mailto:Adewalegarreth1@gmail.com">Contact Me</a>
          <a href="https://github.com/seangarreth" target="_blank">GitHub Profile</a>
        </div>
        
        <div className="action-buttons">
  <a
    href="/Adewale-garreth-cv.pdf"
    download
    className="cv-button"
  >
    Download CV
  </a>

  <a
    href="https://wa.me/2348167339703"
    target="_blank"
    className="whatsapp-button"
  >
    WhatsApp Me
  </a>
</div>
      </section>

      <section className="skills">
  <h2>Professional Skills</h2>

  <div className="skill">
    <span>Site Supervision</span>
    <div className="skill-bar"><div style={{ width: "90%" }}></div></div>
  </div>

  <div className="skill">
    <span>AutoCAD</span>
    <div className="skill-bar"><div style={{ width: "80%" }}></div></div>
  </div>

  <div className="skill">
    <span>Project Management</span>
    <div className="skill-bar"><div style={{ width: "85%" }}></div></div>
  </div>

  <div className="skill">
    <span>React / Web Development</span>
    <div className="skill-bar"><div style={{ width: "75%" }}></div></div>
  </div>

  <div className="skill">
    <span>Python Programming</span>
    <div className="skill-bar"><div style={{ width: "70%" }}></div></div>
  </div>

  <div className="skill">
    <span>Microsoft Excel</span>
    <div className="skill-bar"><div style={{ width: "80%" }}></div></div>
  </div>
</section>
      
      <section className="stats">
  <h2>Professional Highlights</h2>

  <div className="stats-grid">
    <div className="stat-card">
      <h3>5+</h3>
      <p>Years of Site Engineering Experience</p>
    </div>

    <div className="stat-card">
      <h3>5</h3>
      <p> structural projects completed </p>
    </div>

    <div className="stat-card">
      <h3>4</h3>
      <p>Live Website Projects Deployed</p>
    </div>

    <div className="stat-card">
      <h3>15%</h3>
      <p>Reduction in Project Delays</p>
    </div>
  </div>
</section>

      <section className="timeline-section">
  <h2>Experience Timeline</h2>

  <div className="timeline">
    <div className="timeline-item">
      <span className="timeline-year">2021 - Present</span>
      <h3>Civil Site Engineer</h3>
      <p>
        Supervised construction activities, managed artisans and subcontractors,
        interpreted structural drawings, and supported project delivery from
        planning to completion.
      </p>
    </div>

    <div className="timeline-item">
      <span className="timeline-year">2024</span>
      <h3>Full Stack Software Engineering</h3>
      <p>
        Completed full stack software engineering training and developed
        practical experience with React, GitHub, PostgreSQL, Render, and Vercel.
      </p>
    </div>

    <div className="timeline-item">
      <span className="timeline-year">2024</span>
      <h3>Primary Health Care Structures</h3>
      <p>
        Participated in the completion of 3 units of Primary Health Care
        structures with focus on site coordination and quality delivery.
      </p>
    </div>

    <div className="timeline-item">
      <span className="timeline-year">2022</span>
      <h3>Python Programming Diploma</h3>
      <p>
        Completed Python Programming Diploma at Opecsta Academy, gaining
        knowledge in programming fundamentals and problem-solving.
      </p>
    </div>

    <div className="timeline-item">
      <span className="timeline-year">2021</span>
      <h3>2 Tons Overhead Tank Project</h3>
      <p>
        Completed construction and supervision of a 2 tons capacity overhead
        tank project.
      </p>
    </div>
  </div>
</section>
      
      <section>
        <h2>Featured Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>EXPAT'SNEST LTD</h3>
            <img src="/project.jpg" alt="EXPAT'SNEST Website" className="project-image" />
            <p>Professional relocation and housing services platform developed with modern frontend technologies.</p>
            <a href="https://expatsnests.com" target="_blank">Visit Website</a>
          </div>

          <div className="card">
            <h3>G.S.S JIWA CLASS OF 2012</h3>
            <p>Alumni association website built for community engagement, gallery management, announcements, and member interaction.</p>
            <a href="https://www.gssjiwaclass2012.com" target="_blank">Visit Website</a>
          </div>

          <div className="card">
            <h3>2 Tons Overhead Tank</h3>
            <img src="/over-head-tank.jpg" alt="Overhead Tank" className="project-image" />
            <p>Completed construction and supervision of a 2 tons overhead tank project.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Let’s Work Together</h2>

        <p className="contact-intro">
          Available for civil engineering supervision, construction projects,
          web development, and technical collaboration.
        </p>

        <div className="contact-grid">
          <a href="tel:08167339703" className="contact-card">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>08167339703</p>
            </div>
          </a>

          <a href="mailto:Adewalegarreth1@gmail.com" className="contact-card">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>Adewalegarreth1@gmail.com</p>
            </div>
          </a>

          <a href="https://github.com/seangarreth" target="_blank" className="contact-card">
            <span>💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/seangarreth</p>
            </div>
          </a>

          <a href="https://portfolio-woad-six-24.vercel.app" target="_blank" className="contact-card">
            <span>🌐</span>
            <div>
              <h3>Portfolio</h3>
              <p>portfolio-woad-six-24.vercel.app</p>
            </div>
          </a>

          <div className="contact-card">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Jabi, Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Adewale Sunday Garreth. Civil Site Engineer & Full Stack Web Developer.</p>
      </footer>
<div className="floating-socials">

  <a
    href="https://wa.me/2348167339703"
    target="_blank"
    className="social-icon whatsapp"
  >
    💬
  </a>

  <a
    href="https://github.com/seangarreth"
    target="_blank"
    className="social-icon github"
  >
    💻
  </a>

  <a
    href="mailto:Adewalegarreth1@gmail.com"
    className="social-icon email"
  >
    📧
  </a>

</div>
      
    </div>
  );
}
