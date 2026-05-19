export default function App() {
  return (
    <div className="container">
      <section className="hero">
        <img src="/profile.jpg" alt="Adewale Sunday Garreth" className="profile-photo" />

        <h1>Adewale Sunday Garreth</h1>
        <h2>Civil Site Engineer & Full Stack Web Developer</h2>

        <p>
          Dedicated and results-driven professional with experience in construction
          supervision, project coordination, and digital solutions development.
        </p>

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
    </div>
  );
}
