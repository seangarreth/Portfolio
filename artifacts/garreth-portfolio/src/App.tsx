import { useState } from "react";

import duplexFinished from "./assets/twin-duplex-base-university.jpg";
import siteSupervision from "./assets/site-supervision.jpg";
import renovationStage from "./assets/renovation-stage-1.jpg";
import interiorFinishing1 from "./assets/interior-finishing-1.jpg";
import interiorFinishing2 from "./assets/interior-finishing-2.jpg";
import popCeiling from "./assets/pop-ceiling.jpg";
import popCeiling2 from "./assets/pop-ceiling-2.jpg";

const engineeringProjects = [
  {
    title: "Modern Duplex Construction",
    image: duplexFinished,
    category: "Construction",
    description:
      "Supervised and coordinated exterior finishing, painting, rendering, and final delivery.",
  },
  {
    title: "Site Supervision & Rendering",
    image: siteSupervision,
    category: "Site Supervision",
    description:
      "Managed artisans and monitored rendering, plastering, and construction quality.",
  },
  {
    title: "Renovation Project",
    image: renovationStage,
    category: "Renovation",
    description:
      "Handled renovation and upgrade works for residential properties.",
  },
  {
    title: "Interior Finishing",
    image: interiorFinishing1,
    category: "Interior",
    description:
      "Interior finishing works including painting, fittings, and space finishing.",
  },
  {
    title: "Luxury Interior Design",
    image: interiorFinishing2,
    category: "Interior",
    description:
      "Executed modern finishing with detailed ceiling and wall aesthetics.",
  },
  {
    title: "POP Ceiling Installation",
    image: popCeiling,
    category: "POP Design",
    description:
      "Designed and supervised modern POP ceiling installation.",
  },
  {
    title: "Modern Ceiling Finishing",
    image: popCeiling2,
    category: "POP Design",
    description:
      "Contemporary ceiling finishing with clean architectural detailing.",
  },
];

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className={lightMode ? "portfolio light-mode" : "portfolio"}>
      <button
        className="theme-toggle"
        onClick={() => setLightMode(!lightMode)}
      >
        {lightMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      {/* 1. HERO SECTION */}
      <section className="hero">
        {/* Left: Coding / Developer panel */}
        <div className="hero-code-panel" aria-hidden="true">
          <div className="code-window">
            <div className="code-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="code-body">
              <div className="cl"><span className="ck">const</span> <span className="cf">engineer</span> = {'{'}</div>
              <div className="cl ci"><span className="cp">name</span>: <span className="cs">"Garreth"</span>,</div>
              <div className="cl ci"><span className="cp">role</span>: <span className="cs">"Civil+Dev"</span>,</div>
              <div className="cl ci"><span className="cp">stack</span>: [</div>
              <div className="cl ci2"><span className="cs">"React"</span>, <span className="cs">"Node"</span>,</div>
              <div className="cl ci2"><span className="cs">"PostgreSQL"</span></div>
              <div className="cl ci">],</div>
              <div className="cl ci"><span className="cp">cad</span>: <span className="cs">"AutoCAD"</span>,</div>
              <div className="cl ci"><span className="cp">site</span>: <span className="cs">"Abuja, NG"</span></div>
              <div className="cl">{'}'}</div>
              <div className="cl">&nbsp;</div>
              <div className="cl"><span className="ck">function</span> <span className="cf">build</span><span className="cn">()</span> {'{'}</div>
              <div className="cl ci"><span className="ck">return</span> <span className="cs">"excellence"</span>;</div>
              <div className="cl">{'}'}</div>
              <div className="cl">&nbsp;</div>
              <div className="cl"><span className="cc">// 5+ yrs on-site</span></div>
              <div className="cl"><span className="cc">// 4 live projects</span></div>
              <div className="cl"><span className="code-cursor">█</span></div>
            </div>
          </div>
        </div>

        {/* Center: Main content card */}
        <div className="hero-content">
          <div className="profile-wrapper">
            <div className="profile-ring"></div>
            <img src="/profile.jpg" alt="Adewale Sunday Garreth" className="profile-photo" />
          </div>

          <div className="hero-badge">Civil Engineer · Full Stack Developer</div>

          <h1>Adewale Sunday Garreth</h1>
          <h2 className="typing-text">
            Civil Site Engineer | Full Stack Web Developer | Project Supervisor
          </h2>
          <p className="hero-desc">
            Dedicated and results-driven professional with experience in construction
            supervision, project coordination, and digital solutions development.
          </p>

          <div className="action-buttons">
            <a
              href="/Adewale_Garreth_CV.pdf"
              download
              className="cv-button"
            >
              Download CV
            </a>
            <a
              href="https://wa.me/2348167339703"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              WhatsApp Me
            </a>
          </div>

          <div className="links">
            <a href="mailto:Adewalegarreth1@gmail.com">Contact Me</a>
            <a href="https://github.com/seangarreth" target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </div>

        {/* Right: Blueprint / Engineering panel */}
        <div className="hero-blueprint-panel" aria-hidden="true">
          <div className="blueprint-window">
            <svg className="blueprint-svg" viewBox="0 0 200 270" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56,189,248,0.14)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="200" height="270" fill="url(#bp-grid)"/>
              <polyline points="30,85 100,32 170,85" stroke="rgba(56,189,248,0.8)" strokeWidth="1.5" fill="none"/>
              <rect x="40" y="85" width="120" height="140" stroke="rgba(56,189,248,0.8)" strokeWidth="1.5" fill="rgba(56,189,248,0.03)"/>
              <rect x="85" y="178" width="30" height="47" stroke="rgba(56,189,248,0.7)" strokeWidth="1" fill="rgba(56,189,248,0.05)"/>
              <rect x="50" y="108" width="30" height="28" stroke="rgba(56,189,248,0.65)" strokeWidth="1" fill="rgba(56,189,248,0.06)"/>
              <rect x="120" y="108" width="30" height="28" stroke="rgba(56,189,248,0.65)" strokeWidth="1" fill="rgba(56,189,248,0.06)"/>
              <line x1="50" y1="118" x2="80" y2="118" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5"/>
              <line x1="65" y1="108" x2="65" y2="136" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5"/>
              <line x1="120" y1="118" x2="150" y2="118" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5"/>
              <line x1="135" y1="108" x2="135" y2="136" stroke="rgba(56,189,248,0.25)" strokeWidth="0.5"/>
              <line x1="22" y1="85" x2="22" y2="225" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8" strokeDasharray="4,3"/>
              <line x1="18" y1="85" x2="26" y2="85" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8"/>
              <line x1="18" y1="225" x2="26" y2="225" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8"/>
              <text x="11" y="160" fill="rgba(34,197,94,0.7)" fontSize="6" textAnchor="middle" transform="rotate(-90,11,160)">6.5m</text>
              <line x1="40" y1="245" x2="160" y2="245" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8" strokeDasharray="4,3"/>
              <line x1="40" y1="241" x2="40" y2="249" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8"/>
              <line x1="160" y1="241" x2="160" y2="249" stroke="rgba(34,197,94,0.6)" strokeWidth="0.8"/>
              <text x="100" y="258" fill="rgba(34,197,94,0.7)" fontSize="6" textAnchor="middle">8.0m</text>
              <circle cx="168" cy="22" r="14" stroke="rgba(56,189,248,0.5)" strokeWidth="1" fill="none"/>
              <line x1="168" y1="10" x2="168" y2="34" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
              <line x1="156" y1="22" x2="180" y2="22" stroke="rgba(56,189,248,0.5)" strokeWidth="0.8"/>
              <text x="168" y="8" fill="rgba(56,189,248,0.7)" fontSize="5.5" textAnchor="middle">N</text>
              <text x="168" y="40" fill="rgba(56,189,248,0.7)" fontSize="5.5" textAnchor="middle">S</text>
              <text x="152" y="24" fill="rgba(56,189,248,0.7)" fontSize="5.5" textAnchor="middle">W</text>
              <text x="184" y="24" fill="rgba(56,189,248,0.7)" fontSize="5.5" textAnchor="middle">E</text>
            </svg>
            <div className="blueprint-label">◈ SITE PLAN · SCALE 1:100</div>
          </div>
        </div>
      </section>

      {/* 2. PROFILE / ABOUT ME — Skills + Stats */}
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
            <p>Structural projects completed</p>
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

      {/* 3. ENGINEERING PROJECTS */}
      <section id="engineering-projects" className="projects-section">
        <h2>Engineering Projects</h2>
        <div className="projects-grid">
          {engineeringProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SITE INSPECTION / PROJECT GALLERY */}
      <section>
        <h2>Featured Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>EXPAT'SNEST LTD</h3>
            <img src="/project.jpg" alt="EXPAT'SNEST Website" className="project-image" />
            <p>Professional relocation and housing services platform developed with modern frontend technologies.</p>
            <a href="https://expatsnests.com" target="_blank" rel="noreferrer">Visit Website</a>
          </div>
          <div className="card">
            <h3>G.S.S JIWA CLASS OF 2012</h3>
            <p>Alumni association website built for community engagement, gallery management, announcements, and member interaction.</p>
            <a href="https://www.gssjiwaclass2012.com" target="_blank" rel="noreferrer">Visit Website</a>
          </div>
          <div className="card">
            <h3>2 Tons Overhead Tank</h3>
            <img src="/over-head-tank.jpg" alt="Overhead Tank" className="project-image" />
            <p>Completed construction and supervision of a 2 tons overhead tank project.</p>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE AND CERTIFICATIONS */}
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

      {/* 6. CONTACT SECTION */}
      <section className="contact">
        <h2>Let's Work Together</h2>
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
          <a href="https://github.com/seangarreth" target="_blank" rel="noreferrer" className="contact-card">
            <span>💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/seangarreth</p>
            </div>
          </a>
          <a href="https://portfolio-woad-six-24.vercel.app" target="_blank" rel="noreferrer" className="contact-card">
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

      {/* 7. FOOTER */}
      <footer>
        <p>© 2026 Adewale Sunday Garreth. Civil Site Engineer & Full Stack Web Developer.</p>
      </footer>

      {/* Fixed floating social buttons */}
      <div className="floating-socials">
        <a
          href="https://wa.me/2348167339703"
          target="_blank"
          rel="noreferrer"
          className="social-icon whatsapp"
        >
          💬
        </a>
        <a
          href="https://github.com/seangarreth"
          target="_blank"
          rel="noreferrer"
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
