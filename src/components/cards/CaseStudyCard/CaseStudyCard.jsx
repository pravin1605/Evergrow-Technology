import "./CaseStudyCard.css";

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <article className="case-study-card">

      {/* Image */}

      <div className="case-study-card-image">

        <img
          src={caseStudy.image}
          alt={caseStudy.title}
        />

        <span className="case-study-card-badge">
          {caseStudy.category}
        </span>

      </div>


      {/* Content */}

      <div className="case-study-card-content">

        <div className="case-study-card-meta">

          <span>
            {caseStudy.type}
          </span>

          <span>
            DEMO
          </span>

        </div>

        <h3>
          {caseStudy.title}
        </h3>

        <p>
          {caseStudy.shortDescription}
        </p>

        <a
          href={caseStudy.projectUrl}
          className="case-study-card-link"
        >
          View Case Study
          <span>→</span>
        </a>

      </div>

    </article>
  );
};

export default CaseStudyCard;