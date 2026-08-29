import "./CaseStudies.css";

import CaseStudyCard
  from "../../cards/CaseStudyCard/CaseStudyCard";

import { caseStudies }
  from "../../../data/caseStudies";

const CaseStudies = ({
  limit,
  title = "Selected case studies.",
  description =
    "Explore how we approach different business and digital challenges."
}) => {

  const visibleCaseStudies = limit
    ? caseStudies.slice(0, limit)
    : caseStudies;

  return (
    <section
      className="case-studies-section"
      id="case-studies"
    >

      <div className="case-studies-container">

        {/* Header */}

        <div className="case-studies-header">

          <div>

            <span className="case-studies-eyebrow">
              CASE STUDIES
            </span>

            <h2>
              {title}
            </h2>

          </div>

          <p>
            {description}
          </p>

        </div>


        {/* Grid */}

        <div className="case-studies-grid">

          {visibleCaseStudies.map(
            (caseStudy) => (

              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
              />

            )
          )}

        </div>

      </div>

    </section>
  );
};

export default CaseStudies;