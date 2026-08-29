import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Play,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "./ProjectCard.css";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackImage =
  "/images/industries/replaceimage.png";


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index = 0,
}) {

  if (!project) {
    return null;
  }


  /* =======================================================
     IMAGE
  ======================================================= */

  const image =
    project?.image ||
    project?.coverImage ||
    fallbackImage;


  /* =======================================================
     TITLE
  ======================================================= */

  const title =
    project?.title ||
    "Project";


  /* =======================================================
     DESCRIPTION
  ======================================================= */

  const description =
    project?.description ||
    "Discover how Evergrow Technology delivers innovative digital solutions designed to solve real business challenges.";


  /* =======================================================
     INDUSTRY
  ======================================================= */

  const industry =
    project?.industry ||
    "Project";


  /* =======================================================
     PROJECT URL
  ======================================================= */

  const detailUrl =
    `/work/${project?.projectSlug}`;


  /* =======================================================
     LIVE URL
  ======================================================= */

  const liveUrl =
    project?.liveUrl &&
    project.liveUrl !== "#"
      ? project.liveUrl
      : "";


  return (

    <article
      className="project-directory-item"
      style={{
        "--card-delay":
          `${index * 80}ms`,
      }}
    >


      {/* ===================================================
          IMAGE
      ==================================================== */}

      <Link
        to={detailUrl}
        className="project-card-image"
      >

        <img
          src={image}
          alt={`${title} - Evergrow Technology`}
          loading={
            index < 3
              ? "eager"
              : "lazy"
          }
          onError={(event) => {

            if (
              event.currentTarget.src.includes(
                "replaceimage.png"
              )
            ) {
              return;
            }

            event.currentTarget.src =
              fallbackImage;

          }}
        />


        {/* =================================================
            IMAGE OVERLAY
        ================================================== */}

        <div
          className="project-card-image-overlay"
        />


        {/* =================================================
            PROJECT NUMBER
        ================================================== */}

        <span className="project-number">

          {String(index + 1)
            .padStart(2, "0")}

        </span>


        {/* =================================================
            TOP RIGHT ARROW
        ================================================== */}

        <span className="project-card-arrow">

          <ArrowUpRight size={19} />

        </span>


        {/* =================================================
            STATUS
        ================================================== */}

        {project?.status && (

          <span className="project-status">

            {project.status}

          </span>

        )}


        {/* =================================================
            IMAGE BOTTOM LABEL
        ================================================== */}

        <div className="project-image-label">

          <span>
            EVERGROW TECHNOLOGY
          </span>

        </div>

      </Link>


      {/* ===================================================
          CARD BODY
      ==================================================== */}

      <div className="project-directory-content">


        {/* =================================================
            INDUSTRY
        ================================================== */}

        <div className="project-card-industry">

          <span>
            {industry}
          </span>

        </div>


        {/* =================================================
            TITLE
        ================================================== */}

        <h3>

          <Link
            to={detailUrl}
          >

            {title}

          </Link>

        </h3>


        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <p className="project-description">

          {description}

        </p>


        {/* =================================================
            DIVIDER
        ================================================== */}

        <div className="project-content-divider">

          <span />

        </div>


        {/* =================================================
            BUTTONS
        ================================================== */}

        <div className="project-directory-actions">


          {/* =================================================
              READ MORE
          ================================================== */}

          <Link
            to={detailUrl}
            className="project-know-more-link"
          >

            <span>
              Read More
            </span>

            <ArrowRight size={16} />

          </Link>


          {/* =================================================
              LIVE PROJECT
          ================================================== */}

          {liveUrl ? (

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-solution-link"
            >

              <ExternalLink size={14} />

              <span>
                Live Project
              </span>

            </a>

          ) : (

            <Link
              to={detailUrl}
              className="project-solution-link"
            >

              <Play size={14} />

              <span>
                Explore
              </span>

            </Link>

          )}

        </div>

      </div>

    </article>

  );

}


export default ProjectCard;