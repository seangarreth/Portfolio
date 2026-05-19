export default function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <section className="hero">
        <img
          src="/profile.jpg"
          alt="Adewale Sunday Garreth"
          className="profile-photo"
        />

        <h1>Adewale Sunday Garreth</h1>

        <h2>Civil Site Engineer & Full Stack Web Developer</h2>

        <p>
          Dedicated and results-driven professional with experience in
          construction supervision, project coordination, and digital
          solutions development.
        </p>

        <div className="links">
          <a href="mailto:adewalegarreth1@gmail.com">
            Contact Me
          </a>

          <a
            href="https://github.com/seangarreth"
            target="_blank"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section>
        <h2>Featured Projects</h2>

        <div className="grid">

          <div className="card">
            <h3>EXPAT'SNEST LTD</h3>

            <img
              src="/project.jpg"
              alt="EXPAT'SNEST Website"
              className="project-image"
            />

            <p>
              Professional relocation and housing services platform
              developed with modern frontend technologies.
            </p>

            <a
              href="https://expatsnests.com"
              target="_blank"
            >
              Visit Website
            </a>
          </div>

          <div className="card">
            <h3>G.S.S JIWA CLASS OF 2012</h3>

            <p>
              Alumni association website built for community engagement,
              gallery management, announcements, and member interaction.
            </p>

            <a
              href="https://www.gssjiwaclass2012.com"
              target="_blank"
            >
              Visit Website
            </a>
          </div>

          <div className="card">
            <h3>2 Tons Overhead Tank</h3>

            <img
              src="/over-head-tank.jpg"
              alt="Overhead Tank"
              className="project-image"
            />

            <p>
              Completed construction and supervision of a 2 tons
              overhead tank project.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
