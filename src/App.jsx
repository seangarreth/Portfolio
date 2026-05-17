
export default function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <div>
          <p className="label">Professional Portfolio</p>
          <h1>Adewale Sunday Garreth</h1>
          <h2>Civil Site Engineer & Full Stack Web Developer</h2>
          <p className="intro">
            I build structures physically and digitally — combining civil
            engineering experience with modern web development skills.
          </p>

          <div className="buttons">
            <a href="mailto:Adewalegarreth1@gmail.com">Contact Me</a>
            <a href="https://github.com/seangarreth" target="_blank">
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar">AG</div>
          <h3>Adewale Garreth</h3>
          <p>Jabi, Abuja, Nigeria</p>
          <p>08167339703</p>
          <p>Adewalegarreth1@gmail.com</p>
        </div>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Civil Site Engineer with over 3 years of experience in site
          supervision, project coordination, construction planning, and
          structural implementation. I also have practical experience in full
          stack web development, software deployment, and digital project
          management.
        </p>
      </section>

      <section>
        <h2>Core Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Civil Engineering</h3>
            <p>
              Site Supervision, Quantity Surveying, AutoCAD, Structural Rebar
              Drawing, Construction Planning, Project Management, Masonry Works,
              Painting & Screeding.
            </p>
          </div>

          <div className="card">
            <h3>Technology</h3>
            <p>
              Python, HTML/CSS, JavaScript, React, GitHub, Render, Vercel,
              PostgreSQL, Cloudinary, Microsoft Excel.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>G.S.S JIWA CLASS OF 2012 Website</h3>
            <p>
              Built and deployed an alumni website using React, PostgreSQL,
              GitHub, Render, and Cloudinary.
            </p>
          </div>

          <div className="card">
            <h3>Primary Health Care Structures</h3>
            <p>
              Completed 3 units of Primary Health Care structures in 2024 with
              focus on quality delivery and supervision.
            </p>
          </div>

          <div className="card">
            <h3>2 Tons Overhead Tank</h3>
            <p>
              Completed construction and supervision of a 2 tons capacity
              overhead tank project in 2021.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Education & Certifications</h2>
        <div className="grid">
          <div className="card">
            <h3>HND Civil Engineering</h3>
            <p>Auchi Polytechnic, Auchi — 2017</p>
          </div>

          <div className="card">
            <h3>Full Stack Software Engineering</h3>
            <p>Axiom Institute of Advanced Learning — 2024</p>
          </div>

          <div className="card">
            <h3>Python Programming Diploma</h3>
            <p>Opecsta Academy — 2022</p>
          </div>
        </div>
      </section>

      <footer>
        <h2>Let’s Work Together</h2>
        <p>Email: Adewalegarreth1@gmail.com</p>
        <p>GitHub: github.com/seangarreth</p>
      </footer>
    </main>
  );
}

<div className="card">
  <h3>EXPAT'SNEST LTD</h3>

  <img
    src="/expatsnest.png"
    alt="ExpatsNest Website"
    className="project-image"
  />

  <p>
    Professional relocation and housing services website developed
    with modern frontend technologies.
  </p>

  <a href="https://expatsnests.com" target="_blank">
    Visit Website
  </a>
</div>

<div className="card">
  <h3>G.S.S JIWA CLASS OF 2012</h3>

  <img
    src="/gss-jiwa.png"
    alt="GSS Jiwa Website"
    className="project-image"
  />

  <p>
    Alumni association website for community engagement,
    announcements, and gallery management.
  </p>
</div>
