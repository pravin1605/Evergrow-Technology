import {
  ArrowUpRight,
  Check,
  ArrowDownRight,
  Sparkles,
  Layers3,
  Target,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ServiceTemplate.css";

import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";


function ServiceTemplate({ service }) {

  /* =====================================================
     SERVICE NOT FOUND
  ===================================================== */

  if (!service) {
    return (

      <main className="service-not-found">

        <div className="container">

          <span className="eyebrow">
            404
          </span>

          <h1>
            Service not found.
          </h1>

          <p>
            The service you are looking for does not exist.
          </p>

          <Link
            to="/services"
            className="service-back-link"
          >
            Back to services
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </main>

    );
  }


  /* =====================================================
     IMAGE
  ===================================================== */

  const serviceImage =
    service.image ||
    service.heroImage ||
    "/images/services/service-default.jpg";


  /* =====================================================
     SHORT BENEFITS

     These are automatically generated from your data.
     No service data changes required.
  ===================================================== */

  const heroBenefits = [

    service.solutions?.[0]?.title ||
      "Tailored digital solutions",

    service.industries?.[0]
      ? `Built for ${service.industries[0]}`
      : "Designed around your goals",

    service.technologies?.[0]
      ? `Powered by ${service.technologies[0]}`
      : "Built for long-term growth",

  ];


  return (

    <main className="service-template">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="service-hero">

        {/* BACKGROUND DECORATION */}

        <div className="service-hero-grid-lines" />

        <div className="service-hero-glow service-hero-glow-one" />

        <div className="service-hero-glow service-hero-glow-two" />


        <div className="container">

          <div className="service-hero-layout">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="service-hero-content">


              {/* BREADCRUMB */}

              <div className="service-breadcrumb">

                <Link to="/services">
                  Services
                </Link>

                <span>/</span>

                <span>
                  {service.category}
                </span>

              </div>


              {/* EYEBROW */}

              <span className="service-eyebrow">

                <Sparkles size={13} />

                {service.category || "Digital Service"}

              </span>


              {/* TITLE */}

              <h1>

                {service.title}

              </h1>


              {/* SHORT HEADLINE */}

              {service.shortHeadline && (

                <h2>

                  {service.shortHeadline}

                </h2>

              )}


              {/* DESCRIPTION */}

              {service.description && (

                <p className="service-hero-description">

                  {service.description}

                </p>

              )}


              {/* =================================================
                  QUICK BENEFITS
              ================================================= */}

              <div className="service-hero-benefits">

                {heroBenefits.map(
                  (benefit, index) => (

                    <div
                      className="service-hero-benefit"
                      key={index}
                    >

                      <span className="service-benefit-icon">

                        <Check size={14} />

                      </span>

                      <span>

                        {benefit}

                      </span>

                    </div>

                  )
                )}

              </div>


              {/* =================================================
                  ACTIONS
              ================================================= */}

              <div className="service-hero-actions">

                <Link
                  to="/contact"
                  className="service-primary-button"
                >

                  <span>
                    Start a project
                  </span>

                  <ArrowUpRight size={17} />

                </Link>


                <a
                  href="#solutions"
                  className="service-secondary-button"
                >

                  <span>
                    Explore solutions
                  </span>

                  <ArrowDownRight size={16} />

                </a>

              </div>


              {/* SMALL TRUST ROW */}

              <div className="service-hero-trust">

                <span>
                  Strategy
                </span>

                <span className="service-trust-dot" />

                <span>
                  Design
                </span>

                <span className="service-trust-dot" />

                <span>
                  Technology
                </span>

              </div>


            </div>


            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div className="service-hero-visual">


              {/* BACK DECORATION */}

              <div className="service-visual-outline" />

              <div className="service-visual-dot service-dot-one" />

              <div className="service-visual-dot service-dot-two" />


              {/* MAIN IMAGE */}

              <div className="service-hero-image-wrap">

                <img
                  src={serviceImage}
                  alt={service.title}
                  className="service-hero-image"
                  onError={(event) => {

                    event.currentTarget.src =
                      "/images/services/service-default.jpg";

                  }}
                />


                {/* IMAGE GRADIENT */}

                <div className="service-hero-image-overlay" />


                {/* IMAGE CATEGORY */}

                <div className="service-image-category">

                  <Layers3 size={13} />

                  <span>

                    {service.category || "Digital Solutions"}

                  </span>

                </div>


              </div>


              {/* FLOATING INFO CARD */}

              <div className="service-floating-card service-floating-card-main">

                <span className="floating-card-icon">

                  <Target size={16} />

                </span>

                <div>

                  <small>
                    Focus
                  </small>

                  <strong>
                    Measurable Growth
                  </strong>

                </div>

              </div>


              {/* FLOATING NUMBER */}

              <div className="service-floating-number">

                <span>
                  01
                </span>

                <small>
                  Evergrow
                </small>

              </div>


            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          SERVICE SNAPSHOT
      ===================================================== */}

      <section className="service-snapshot">

        <div className="container">

          <div className="service-snapshot-grid">


            <div className="service-snapshot-intro">

              <span className="eyebrow">
                At a glance
              </span>

              <h2>

                Clear strategy.

                <span>
                  Better outcomes.
                </span>

              </h2>

            </div>


            <div className="service-snapshot-item">

              <span className="snapshot-number">
                01
              </span>

              <div>

                <h3>
                  Understand
                </h3>

                <p>
                  We understand your business,
                  users and goals first.
                </p>

              </div>

            </div>


            <div className="service-snapshot-item">

              <span className="snapshot-number">
                02
              </span>

              <div>

                <h3>
                  Build
                </h3>

                <p>
                  We create practical solutions
                  around real requirements.
                </p>

              </div>

            </div>


            <div className="service-snapshot-item">

              <span className="snapshot-number">
                03
              </span>

              <div>

                <h3>
                  Grow
                </h3>

                <p>
                  We focus on solutions that
                  support long-term growth.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>



      {/* =====================================================
          INTRO / APPROACH
      ===================================================== */}

      {service.approach && (

        <section className="service-intro">

          <div className="container">

            <div className="service-intro-grid">


              <div className="service-intro-visual">

                <div className="service-intro-circle">

                  <span>
                    01
                  </span>

                </div>

                <div className="service-intro-line-vertical" />

              </div>


              <div className="service-intro-content">

                <span className="eyebrow">
                  Our approach
                </span>


                <h2>

                  Solve the real problem.

                  <span>
                    Not just the request.
                  </span>

                </h2>


                <p>

                  {service.approach}

                </p>


                <div className="service-intro-mini-points">

                  <span>
                    <Check size={13} />
                    Practical
                  </span>

                  <span>
                    <Check size={13} />
                    Scalable
                  </span>

                  <span>
                    <Check size={13} />
                    Goal-focused
                  </span>

                </div>


              </div>


            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      {service.solutions?.length > 0 && (

        <section
          className="service-solutions"
          id="solutions"
        >

          <div className="container">


            <div className="service-section-header">


              <div>

                <span className="eyebrow">
                  What we offer
                </span>

                <h2>

                  Everything you need

                  <span>
                    to move forward.
                  </span>

                </h2>

              </div>


              <p>

                Focused solutions.
                Clear outcomes.
                Technology built around
                your business goals.

              </p>


            </div>



            <div className="service-solution-grid">

              {service.solutions.map(
                (solution, index) => (

                  <article
                    className="service-solution-card"
                    key={index}
                  >


                    <div className="solution-card-top">

                      <span>

                        {String(index + 1)
                          .padStart(2, "0")}

                      </span>

                      <div className="solution-arrow">

                        <ArrowUpRight size={18} />

                      </div>

                    </div>


                    <div className="solution-card-body">


                      <h3>

                        {solution.title}

                      </h3>


                      {solution.description && (

                        <p>

                          {solution.description}

                        </p>

                      )}


                      {solution.features?.length > 0 && (

                        <div className="solution-feature-list">

                          {solution.features
                            .slice(0, 4)
                            .map(
                              (
                                feature,
                                featureIndex
                              ) => (

                                <div
                                  className="solution-feature"
                                  key={featureIndex}
                                >

                                  <Check size={13} />

                                  <span>
                                    {feature}
                                  </span>

                                </div>

                              )
                            )}

                        </div>

                      )}


                    </div>


                    <div className="solution-card-accent" />


                  </article>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          PROCESS
      ===================================================== */}

      {service.process?.length > 0 && (

        <section className="service-process">

          <div className="container">


            <div className="service-process-header">

              <span className="eyebrow">
                How we work
              </span>

              <h2>

                Simple process.

                <span>
                  Serious results.
                </span>

              </h2>

            </div>


            <div className="service-process-grid">

              {service.process.map(
                (step, index) => (

                  <article
                    className="service-process-card"
                    key={index}
                  >


                    <div className="process-top">

                      <span className="process-number">

                        {String(index + 1)
                          .padStart(2, "0")}

                      </span>

                      {index <
                        service.process.length - 1 && (

                        <span className="process-connector" />

                      )}

                    </div>


                    <h3>

                      {step.title}

                    </h3>


                    <p>

                      {step.description}

                    </p>


                  </article>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          SUB SERVICES
      ===================================================== */}

      {service.subServices?.length > 0 && (

        <section className="service-related">

          <div className="container">


            <div className="service-section-header">

              <div>

                <span className="eyebrow">
                  Explore more
                </span>

                <h2>

                  Go deeper

                  <span>
                    when you need more.
                  </span>

                </h2>

              </div>


              <p>

                Explore specialized solutions
                built for specific business needs.

              </p>

            </div>


            <div className="service-related-grid">

              {service.subServices.map(
                (subService, index) => (

                  <Link
                    key={subService.slug}
                    to={`/services/${subService.slug}`}
                    className="service-related-card"
                  >


                    <span className="related-number">

                      {String(index + 1)
                        .padStart(2, "0")}

                    </span>


                    <div className="related-content">

                      <h3>

                        {subService.title}

                      </h3>


                      {subService.description && (

                        <p>

                          {subService.description}

                        </p>

                      )}

                    </div>


                    <span className="related-arrow">

                      <ArrowUpRight size={18} />

                    </span>


                  </Link>

                )
              )}

            </div>

          </div>

        </section>

      )}



     



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA />


    </main>

  );

}


export default ServiceTemplate;