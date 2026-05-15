export default function Portfolio() {
  const skills = {
    engineering: [
      "Site Supervision",
      "Quantity Surveying",
      "Structural Rebar Drawing",
      "Construction Planning",
      "Project Management",
      "AutoCAD",
      "Masonry Works",
      "Painting & Screeding",
    ],
    technical: [
      "Python Programming",
      "HTML/CSS",
      "JavaScript",
      "React",
      "GitHub",
      "Render Deployment",
      "PostgreSQL",
      "Cloudinary",
      "Microsoft Excel",
      "Home Tutoring & Coaching",
    ],
  };

  const projects = [
    {
      title: "G.S.S JIWA CLASS OF 2012 Website",
      description:
        "Built and deployed a functional alumni website using React, PostgreSQL, GitHub, and Render. Managed authentication systems and cloud media integration using Cloudinary.",
      year: "2026",
    },
    {
      title: "Primary Health Care Structures",
      description:
        "Successfully supervised and completed 3 units of Primary Health Care structures with focus on quality execution and project coordination.",
      year: "2024",
    },
    {
      title: "2 Tons Capacity Overhead Tank",
      description:
        "Completed construction and supervision of a 2 tons capacity overhead tank project with proper structural implementation.",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-slate-400 text-sm mb-4">
              Professional Portfolio
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Adewale Sunday Garreth
            </h1>

            <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6 font-semibold">
              Civil Site Engineer & Full Stack Web Developer
            </h2>

            <p className="text-slate-400 text-lg leading-8 mb-8 max-w-2xl">
              Dedicated and results-driven professional with over 3 years of
              experience in construction supervision, project coordination, and
              digital solutions development. Passionate about building
              structures physically and digitally.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:Adewalegarreth1@gmail.com"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/seangarreth"
                target="_blank"
                className="border border-slate-600 px-6 py-3 rounded-2xl hover:bg-slate-900"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl border border-slate-800">
              <div className="space-y-6">
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <h3 className="text-xl font-semibold">Jabi, Abuja, Nigeria</h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  <h3 className="text-xl font-semibold">08167339703</h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <h3 className="text-xl font-semibold break-all">
                    Adewalegarreth1@gmail.com
                  </h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Specialization</p>
                  <h3 className="text-xl font-semibold">
                    Construction Supervision • Full Stack Development
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>

          <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800">
            <p className="text-slate-300 leading-8 text-lg">
              I am a Civil Site Engineer with strong expertise in site
              supervision, structural implementation, project coordination, and
              construction management. Alongside my engineering background, I
              possess practical experience in full stack web development,
              software deployment, and digital project management.
            </p>

            <p className="text-slate-400 leading-8 text-lg mt-6">
              My unique combination of engineering and technology enables me to
              approach projects with technical precision, creativity, and
              problem-solving excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 lg:px-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Professional Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Civil Engineering Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.engineering.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 px-4 py-2 rounded-full text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Technical & Digital Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 px-4 py-2 rounded-full text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800 hover:translate-y-[-5px] transition-all"
              >
                <p className="text-slate-500 mb-3">{project.year}</p>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="px-6 py-20 lg:px-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6">Education</h2>

            <div>
              <h3 className="text-2xl font-semibold">
                HND Civil Engineering
              </h3>
              <p className="text-slate-400 mt-2">
                Auchi Polytechnic, Auchi
              </p>
              <p className="text-slate-500 mt-1">Graduated: 2017</p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800">
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  Full Stack Software Engineering
                </h3>
                <p className="text-slate-400">
                  Axiom Institute of Advanced Learning • 2024
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Python Programming Diploma
                </h3>
                <p className="text-slate-400">
                  Opecsta Academy • 2022
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  AutoCAD & Project Management
                </h3>
                <p className="text-slate-400">
                  Professional Technical Certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">Adewale Sunday Garreth</h3>
            <p className="text-slate-400 mt-2">
              Civil Site Engineer • Full Stack Developer
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href="https://github.com/seangarreth" target="_blank">
              GitHub
            </a>
            <a href="mailto:Adewalegarreth1@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
