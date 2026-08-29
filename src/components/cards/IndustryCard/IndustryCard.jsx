import {
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  useState,
} from "react";

import "./IndustryCard.css";


/* =========================================================
   FALLBACK IMAGE
========================================================= */

const fallbackImage =
  "/images/industries/replaceimage.png";


/* =========================================================
   INDUSTRY CARD
========================================================= */

function IndustryCard({
  industry,
  index = 0,
}) {

  const [
    imageError,
    setImageError,
  ] = useState(false);


  /* =======================================================
     IMAGE
  ======================================================= */

  const image =
    !imageError && industry?.heroImage
      ? industry.heroImage
      : fallbackImage;


  /* =======================================================
     TITLE
  ======================================================= */

  const title =
    industry?.label ||
    industry?.category ||
    "Industry";


  /* =======================================================
     DESCRIPTION
  ======================================================= */

  const description =
    industry?.description ||
    industry?.shortDescription ||
    industry?.summary ||
    `Discover innovative digital solutions and smart technology designed specifically for the ${title} industry.`;


  /* =======================================================
     DIGITAL SOLUTION
  ======================================================= */

  const demoUrl =
    industry?.solution?.demoUrl || "";


  /* =======================================================
     DETAILS URL
  ======================================================= */

  const detailUrl =
    `/industries/${industry?.slug}`;


  return (

    <article
      className="industry-directory-item"
      style={{
        "--card-delay":
          `${index * 80}ms`,
      }}
    >

      {/* ===================================================
         IMAGE
      ==================================================== */}

      <div className="industry-card-image">

        <img
          src={image}
          alt={`${title} - Evergrow Technology`}
          loading={
            index < 3
              ? "eager"
              : "lazy"
          }
          onError={() => {
            setImageError(true);
          }}
        />


        {/* IMAGE ERROR */}

        {imageError && (

          <div className="industry-image-error">

            <span>
              IMAGE NOT FOUND
            </span>

            <strong>
              {title}
            </strong>

          </div>

        )}


        {/* IMAGE OVERLAY */}

        <div
          className="industry-card-image-overlay"
        />


        {/* CARD NUMBER */}

        <span className="industry-number">

          {String(index + 1)
            .padStart(2, "0")}

        </span>


        {/* TOP ARROW */}

        <span className="industry-card-arrow">

          <ArrowUpRight size={19} />

        </span>


        {/* IMAGE BOTTOM LABEL */}

        <div className="industry-image-label">

          <span>
            EVERGROW TECHNOLOGY
          </span>

        </div>

      </div>


      {/* ===================================================
         CARD BODY
      ==================================================== */}

      <div className="industry-directory-content">


        {/* TITLE */}

        <h3>
          {title}
        </h3>


        {/* DESCRIPTION */}

        <p className="industry-description">

          {description}

        </p>


        {/* DIVIDER */}

        <div className="industry-content-divider">

          <span />

        </div>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="industry-directory-actions">


          {/* READ MORE */}

          <Link
            to={detailUrl}
            className="industry-know-more-link"
          >

            <span>
              Read More
            </span>

            <ArrowRight size={16} />

          </Link>


          {/* EXPLORE DEMO */}

          {demoUrl ? (

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="industry-solution-link"
            >

              <Play size={14} />

              <span>
                Explore Demo
              </span>

            </a>

          ) : (

            <Link
              to={detailUrl}
              className="industry-solution-link"
            >

              <Play size={14} />

              <span>
                Explore Demo
              </span>

            </Link>

          )}

        </div>

      </div>

    </article>

  );

}


export default IndustryCard;