import {
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "./ServiceCard.css";


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  service,
  index = 0,
}) {

  if (!service) {
    return null;
  }


  /* =======================================================
     BASIC DATA
  ======================================================= */

  const name =
    service.name ||
    service.title ||
    "Service";


  const category =
    service.category ||
    "Digital Solutions";


  const slug =
    service.slug ||
    "";


  /* =======================================================
     DESCRIPTION
  ======================================================= */

  const description =
    service.description ||
    service.shortDescription ||
    service.summary ||
    `Discover innovative and powerful digital solutions designed to help your business grow with ${name}.`;


  /* =======================================================
     IMAGE
  ======================================================= */

  const image =
    service.image ||
    service.heroImage ||
    "/images/services/replaceimage.png";


  /* =======================================================
     URLS
  ======================================================= */

  const detailUrl =
    `/services/${slug}`;


  const demoUrl =
    service.demoUrl ||
    service.solution?.demoUrl ||
    "";


  return (

    <article
      className="service-card"
      style={{
        "--service-delay":
          `${index * 80}ms`,
      }}
    >


      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="service-card-image-wrap">


        <img
          src={image}
          alt={`${name} - Evergrow Technology`}
          className="service-card-image"
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
              "/images/services/replaceimage.png";

          }}
        />


        {/* IMAGE OVERLAY */}

        <div className="service-card-image-overlay" />


        {/* NUMBER */}

        <span className="service-card-number">

          {String(index + 1)
            .padStart(2, "0")}

        </span>


        {/* CATEGORY */}

        <span className="service-card-image-category">

          {category}

        </span>


        {/* TOP ARROW */}

        <span className="service-card-top-arrow">

          <ArrowUpRight size={19} />

        </span>


      </div>


      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div className="service-card-content">


        {/* LABEL */}

        <span className="service-card-label">

          EVERGROW TECHNOLOGY

        </span>


        {/* TITLE */}

        <h3>

          {name}

        </h3>


        {/* DESCRIPTION */}

        <p className="service-card-description">

          {description}

        </p>


        {/* DIVIDER */}

        <div className="service-card-divider">

          <span />

        </div>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <div className="service-card-actions">


          {/* READ MORE */}

          <Link
            to={detailUrl}
            className="
              service-card-button
              service-card-button-secondary
            "
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
              className="
                service-card-button
                service-card-button-primary
              "
            >

              <Play size={14} />

              <span>
                Explore Demo
              </span>

            </a>

          ) : (

            <Link
              to={detailUrl}
              className="
                service-card-button
                service-card-button-primary
              "
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


export default ServiceCard;