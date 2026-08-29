import {
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="hero-background"
        aria-hidden="true"
      >
        <div className="hero-background-image" />
        <div className="hero-background-overlay" />
        <div className="hero-background-glow hero-glow-one" />
        <div className="hero-background-glow hero-glow-two" />
        <div className="hero-grid" />
      </div>


      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div className="container hero-container">

        {/* ==================================================
            EYEBROW
        ================================================== */}

        <div className="hero-eyebrow-wrap">

          <span className="hero-eyebrow-line" />

          <span className="eyebrow">
            Evergrow Technologies
          </span>

          <span className="hero-eyebrow-line hero-eyebrow-line-right" />

        </div>


        {/* ==================================================
            MAIN HEADING
        ================================================== */}

        <div className="hero-title-wrap">

          <h1 className="hero-title">

            <span className="hero-title-line">
              We build digital
            </span>

            <span className="hero-title-line">
              solutions that help
            </span>

            <span className="hero-title-highlight">
              businesses grow.
            </span>

          </h1>

        </div>


        {/* ==================================================
            VIDEO
        ================================================== */}

        <div className="hero-video-section">

          <div className="hero-video-wrap">

            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/company/evergrow.mp4"
                type="video/mp4"
              />
            </video>


            {/* Video overlay */}

            <div className="hero-video-overlay" />

            <div className="hero-video-top">

              <span className="hero-video-label">
                DIGITAL SOLUTIONS
              </span>

              <span className="hero-video-number">
                01
              </span>

            </div>


            <div className="hero-video-bottom">

              <span className="hero-video-caption">
                From vision to digital success.
              </span>

              <span className="hero-video-icon">
                ↗
              </span>

            </div>

          </div>

        </div>


        {/* ==================================================
            SERVICES
        ================================================== */}

        <div className="hero-description">

          <span>
            Websites
          </span>

          <span className="hero-dot">
            •
          </span>

          <span>
            Software
          </span>

          <span className="hero-dot">
            •
          </span>

          <span>
            Marketing
          </span>

        </div>


        {/* ==================================================
            SUPPORTING DESCRIPTION
        ================================================== */}

        <p className="hero-subdescription">

          From gyms and schools to healthcare, societies and
          growing businesses, we create practical digital
          solutions designed around real business needs.

        </p>


        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="hero-actions">

          <Link
            to="/work"
            className="hero-button hero-button-primary"
          >

            <span>
              View Our Portfolio
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />

          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;