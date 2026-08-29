import "./Technology.css";

const technologyGroups = [
  {
    id: 1,
    category: "Web Development",
    label: "WEB",
    description:
      "Modern, responsive websites and web applications built for performance and usability.",

    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3"
    ]
  },

  {
    id: 2,
    category: "Backend & APIs",
    label: "BACKEND",
    description:
      "Reliable backend systems and APIs that power business applications.",

    technologies: [
      "Spring Boot",
      "Node.js",
      "REST APIs"
    ]
  },

  {
    id: 3,
    category: "Database",
    label: "DATA",
    description:
      "Structured and scalable data solutions for applications and business systems.",

    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB"
    ]
  },

  {
    id: 4,
    category: "Mobile Development",
    label: "MOBILE",
    description:
      "Cross-platform mobile applications designed for practical business use.",

    technologies: [
      "Flutter",
      "Firebase"
    ]
  },

  {
    id: 5,
    category: "Digital Marketing",
    label: "MARKETING",
    description:
      "Digital marketing technologies and platforms that help businesses reach and convert customers.",

    technologies: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Analytics"
    ]
  },

  {
    id: 6,
    category: "Design & Product",
    label: "DESIGN",
    description:
      "Design tools and practices used to create intuitive and engaging digital experiences.",

    technologies: [
      "Figma",
      "UI/UX",
      "Prototyping"
    ]
  }
];

const Technology = () => {
  return (
    <section
      className="technology-section"
      id="technology"
    >

      <div className="technology-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="technology-header">

          <div className="technology-heading">

            <span className="technology-eyebrow">
              TECHNOLOGY
            </span>

            <h2>
              The right technology
              <span> behind every solution.</span>
            </h2>

          </div>

          <p>
            We choose technology based on your
            business requirements, scalability,
            performance and long-term goals.
          </p>

        </div>


        {/* =========================
            TECHNOLOGY GRID
        ========================= */}

        <div className="technology-grid">

          {technologyGroups.map((group) => (

            <article
              className="technology-card"
              key={group.id}
            >

              <div className="technology-card-top">

                <span className="technology-label">
                  {group.label}
                </span>

                <span className="technology-number">
                  0{group.id}
                </span>

              </div>

              <h3>
                {group.category}
              </h3>

              <p>
                {group.description}
              </p>

              <div className="technology-list">

                {group.technologies.map(
                  (technology) => (
                    <span
                      className="technology-item"
                      key={technology}
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================= */}

        <div className="technology-footer">

          <span>
            TECH STACK DEPENDS ON THE PROJECT
          </span>

          <p>
            We don't force every project into the
            same technology stack. The solution
            determines the technology.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Technology;