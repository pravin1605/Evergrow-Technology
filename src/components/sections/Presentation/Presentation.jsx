import {
  ArrowUpRight,
  FileText,
  Download,
} from "lucide-react";

import "./Presentation.css";

const presentations = [
  {
    id: "society-hub",
    title: "SocietyHub",
    category: "Residential Society Management",
    description:
      "Explore how SocietyHub can digitize maintenance, residents, complaints, visitors and society operations.",
    type: "Product Presentation",
    url: "#",
  },

  {
    id: "gym-management",
    title: "Gym Management Solution",
    category: "Fitness Management",
    description:
      "An overview of a digital management solution for gyms, memberships, payments and daily operations.",
    type: "Product Presentation",
    url: "#",
  },

  {
    id: "education-platform",
    title: "Education Platform",
    category: "Education Technology",
    description:
      "A concept platform for schools and educational institutions to simplify admissions and digital operations.",
    type: "Concept Presentation",
    url: "#",
  },
];

function Presentation() {
  return (
    <section className="presentation-section">

      <div className="container">

        <div className="presentation-heading">

          <div>

            <span className="eyebrow">
              Presentations
            </span>

            <h2>
              Want to see
              <br />

              <span className="text-gradient">
                the bigger picture?
              </span>
            </h2>

          </div>

          <p>
            Explore detailed presentations of selected
            solutions to understand the problem, approach,
            features and possibilities before starting a
            conversation with us.
          </p>

        </div>

        <div className="presentation-list">

          {presentations.map((presentation, index) => (

            <div
              className="presentation-row"
              key={presentation.id}
            >

              <div className="presentation-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="presentation-icon">
                <FileText size={20} />
              </div>

              <div className="presentation-content">

                <span>
                  {presentation.type}
                </span>

                <h3>
                  {presentation.title}
                </h3>

                <p>
                  {presentation.description}
                </p>

              </div>

              {presentation.url !== "#" ? (

                <a
                  href={presentation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presentation-action"
                >
                  View Presentation

                  <ArrowUpRight size={17} />
                </a>

              ) : (

                <div className="presentation-coming">
                  Coming soon
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Presentation;