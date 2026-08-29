import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import ServiceCard
  from "../../components/cards/ServiceCard/ServiceCard";

import {
  primaryServices,
} from "../../data/services";

import "./Services.css";


function Services() {

  return (

    <main className="services-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="container">

          <div className="services-hero-grid">


            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="services-hero-content">


              {/* EYEBROW */}

              <div className="services-eyebrow">

                <Sparkles size={15} />

                <span>
                  What we do
                </span>

              </div>


              {/* TITLE */}

              <h1>

                Digital solutions

                <span>
                  built to move
                </span>

                your business forward.

              </h1>


              {/* DESCRIPTION */}

              <p>

                We combine technology, design and digital
                strategy to create websites, software,
                applications and digital solutions that
                help businesses grow.

              </p>


              {/* ACTIONS */}

              <div className="services-hero-actions">

                <Link
                  to="/contact"
                  className="services-primary-button"
                >

                  <span>
                    Start a Project
                  </span>

                  <ArrowUpRight size={17} />

                </Link>


                <a
                  href="#services-list"
                  className="services-text-link"
                >

                  Explore Services

                  <ArrowUpRight size={15} />

                </a>

              </div>

            </div>



            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="services-hero-visual">


              <div className="services-orbit services-orbit-one" />

              <div className="services-orbit services-orbit-two" />


              <div className="services-visual-card">


                <span className="services-visual-small">
                  EVERGROW TECHNOLOGY
                </span>


                <strong>
                  Technology
                </strong>


                <strong>
                  + Design
                </strong>


                <strong>
                  + Growth
                </strong>


                <div className="services-visual-line" />


                <span className="services-visual-status">

                  <span />

                  Digital Solutions

                </span>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SERVICES INTRO
      ===================================================== */}

      <section
        className="services-intro"
        id="services-list"
      >

        <div className="container">

          <div className="services-section-heading">


            <div>

              <span className="services-section-eyebrow">
                Our services
              </span>


              <h2>

                Everything you need
                <span>
                  to grow digitally.
                </span>

              </h2>

            </div>


            <p>

              From websites and mobile applications to
              custom software and digital marketing, our
              services are designed around real business
              needs.

            </p>

          </div>



          {/* =================================================
              SERVICE GRID
          ================================================= */}

          <div className="services-grid">

            {primaryServices.map(
              (service, index) => (

                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={index}
                />

              )
            )}

          </div>

        </div>

      </section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta">

        <div className="container">

          <div className="services-cta-box">


            {/* BACKGROUND */}

            <div className="services-cta-grid" />

            <div className="services-cta-glow services-cta-glow-one" />

            <div className="services-cta-glow services-cta-glow-two" />


            {/* CONTENT */}

            <div className="services-cta-content">


              <span className="services-cta-eyebrow">

                Have a project in mind?

              </span>


              <h2>

                Let's build something

                <span>
                  meaningful.
                </span>

              </h2>


              <p>

                Tell us what you are trying to build,
                improve or grow. We will help you find
                the right digital solution.

              </p>


              <div className="services-cta-meta">

                <span className="services-meta-dot" />

                <span>
                  Strategy
                </span>

                <span className="services-meta-separator">
                  /
                </span>

                <span>
                  Technology
                </span>

                <span className="services-meta-separator">
                  /
                </span>

                <span>
                  Growth
                </span>

              </div>

            </div>



            {/* BUTTON */}

            <div className="services-cta-action">

              <Link
                to="/contact"
                className="services-cta-button"
              >

                <span>
                  Let's Talk
                </span>

                <ArrowUpRight size={19} />

              </Link>

            </div>



            {/* CORNER */}

            <div className="services-cta-corner">

              EVERGROW TECHNOLOGY

            </div>

          </div>

        </div>

      </section>


    </main>

  );

}


export default Services;