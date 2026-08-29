import "./CaseStudyTemplate.css";

const CaseStudyTemplate = ({
  caseStudy
}) => {

  if (!caseStudy) {
    return null;
  }

  return (
    <main className="case-study-template">

      {/* =========================
          HERO
      ========================= */}

      <section className="case-study-hero">

        <div className="case-study-hero-container">

          <span className="case-study-category">
            {caseStudy.category}
          </span>

          <h1>
            {caseStudy.title}
          </h1>

          <p>
            {caseStudy.shortDescription}
          </p>

          <div className="case-study-meta">

            <div>
              <span>PROJECT</span>
              <strong>
                {caseStudy.type}
              </strong>
            </div>

            <div>
              <span>CLIENT</span>
              <strong>
                {caseStudy.client}
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          COVER
      ========================= */}

      <section className="case-study-cover">

        <div className="case-study-cover-container">

          <img
            src={caseStudy.image}
            alt={caseStudy.title}
          />

        </div>

      </section>


      {/* =========================
          CHALLENGE
      ========================= */}

      <section className="case-study-content-section">

        <div className="case-study-content-grid">

          <span className="case-study-section-label">
            01 / CHALLENGE
          </span>

          <div>

            <h2>
              The challenge
            </h2>

            <p>
              {caseStudy.challenge}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SOLUTION
      ========================= */}

      <section className="case-study-content-section">

        <div className="case-study-content-grid">

          <span className="case-study-section-label">
            02 / SOLUTION
          </span>

          <div>

            <h2>
              What we built
            </h2>

            <p>
              {caseStudy.solution}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================= */}

      <section className="case-study-features">

        <div className="case-study-features-container">

          <div className="case-study-features-header">

            <span className="case-study-section-label">
              03 / FEATURES
            </span>

            <h2>
              What's included
            </h2>

          </div>

          <div className="case-study-feature-list">

            {caseStudy.features.map(
              (feature, index) => (

                <div
                  className="case-study-feature"
                  key={feature}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <p>
                    {feature}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================
          TECHNOLOGY
      ========================= */}

      <section className="case-study-tech">

        <div className="case-study-tech-container">

          <span className="case-study-section-label">
            04 / TECHNOLOGY
          </span>

          <div className="case-study-tech-list">

            {caseStudy.technologies.map(
              (technology) => (

                <span
                  key={technology}
                >
                  {technology}
                </span>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================
          OUTCOME
      ========================= */}

      <section className="case-study-content-section">

        <div className="case-study-content-grid">

          <span className="case-study-section-label">
            05 / OUTCOME
          </span>

          <div>

            <h2>
              The outcome
            </h2>

            <p>
              {caseStudy.outcome}
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="case-study-cta">

        <div className="case-study-cta-container">

          <h2>
            Have a similar
            project in mind?
          </h2>

          <a href="/contact">
            Start a conversation →
          </a>

        </div>

      </section>

    </main>
  );
};

export default CaseStudyTemplate;