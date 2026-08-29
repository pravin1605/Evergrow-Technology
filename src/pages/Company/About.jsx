import { useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";

import company from "../../data/company/company";

import Team from "../../components/sections/Team/Team";
import WhyEvergrow from "../../components/sections/WhyEvergrow/WhyEvergrow";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Process from "../../components/sections/Process/Process";

import teamImage from "../../../public/images/team/team02.png";

import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";

import "./About.css";


function About() {

  const [storyExpanded, setStoryExpanded] = useState(false);

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-section about-section--hero about-hero"
        style={{
          "--about-team-image": `url(${teamImage})`,
        }}
      >

        {/* Background effects */}

        <div className="about-hero-overlay" />

        <div className="about-hero-light about-hero-light-one" />
        <div className="about-hero-light about-hero-light-two" />


        <div className="container about-hero-container">

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="about-hero-content">

            <div className="about-hero-topline">

              <span className="eyebrow">
                About Evergrow
              </span>

              <span className="about-hero-location">
                Digital • Technology • Growth
              </span>

            </div>


            <h1 className="about-hero-title">

              <span className="hero-line">
                Building digital
              </span>

              <span className="hero-line">
                experiences that
              </span>

              <span className="hero-line hero-line-accent">
                help businesses grow.
              </span>

            </h1>


            <p className="about-hero-description">
              {company.shortDescription}
            </p>


            <div className="about-hero-bottom">

              <Link
                to="/contact"
                className="about-hero-button"
              >
                Start a conversation

                <ArrowUpRight size={16} />
              </Link>


              <div className="about-hero-scroll">

                <span className="scroll-circle">
                  <ArrowDown size={14} />
                </span>

                <span>
                  Explore our story
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              HERO META
          ================================================= */}

          <div className="about-hero-meta">

            <span>
              EVERGROW
            </span>

            <span>
              © 2026
            </span>

          </div>

        </div>


        {/* =================================================
            MOBILE TEAM IMAGE
        ================================================= */}

        <div className="about-hero-image-band" />


        <div className="about-hero-image-label">

          <span />

          The people behind Evergrow

        </div>


        {/* =================================================
            MOBILE EXPLORE
        ================================================= */}

        <div className="about-hero-explore">

          <span className="scroll-circle">
            <ArrowDown size={14} />
          </span>

          <span>
            Explore our story
          </span>

        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      {company.story && (

        <section
          className="about-section about-section--story"
          data-section-number="01"
          data-section-name="OUR STORY"
        >

          <div className="about-introduction">

            <div className="container">

              <div className="about-introduction-grid">

                {/* LEFT */}

                <div className="about-story-sidebar">

                  <span className="eyebrow">
                    Our story
                  </span>

                  <div className="story-index">
                    01
                  </div>

                  <div className="story-vertical-line" />

                </div>


                {/* RIGHT */}

                <div className="about-story-content">

                  <h2 className="about-story-title">
                    {company.story.title}
                  </h2>


                  <p className="about-large-text">
                    {company.story.description}
                  </p>


                  {company.story.paragraphs?.map(
                    (paragraph, index) => {

                      const isHidden =
                        index > 0 && !storyExpanded;

                      return (
                        <p
                          key={index}
                          className={`about-story-paragraph ${
                            isHidden
                              ? "story-hidden-paragraph"
                              : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      );

                    }
                  )}


                  {/* READ MORE */}

                  {company.story.paragraphs?.length > 1 && (

                    <button
                      type="button"
                      className="story-read-more"
                      onClick={() =>
                        setStoryExpanded(!storyExpanded)
                      }
                      aria-expanded={storyExpanded}
                    >

                      <span>
                        {storyExpanded
                          ? "Read less"
                          : "Read more"}
                      </span>


                      <span
                        className={`story-plus ${
                          storyExpanded
                            ? "story-plus-open"
                            : ""
                        }`}
                      >

                        <Plus size={17} />

                      </span>

                    </button>

                  )}


                  <Link
                    to="/contact"
                    className="about-link"
                  >

                    Start a conversation

                    <ArrowUpRight size={16} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      )}




      {/* =====================================================
          WHY EVERGROW
      ===================================================== */}

      <section
        className="about-section about-section--why"
        data-section-number="02"
        data-section-name="WHY EVERGROW"
      >

        <WhyEvergrow />

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="about-section about-section--process"
        data-section-number="03"
        data-section-name="OUR PROCESS"
      >

        <Process />

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section
        className="about-section about-section--testimonials"
        data-section-number="04"
        data-section-name="TESTIMONIALS"
      >

        <Testimonials />

      </section>


      
      {/* =====================================================
          TEAM
      ===================================================== */}

      <section
        className="about-section about-section--team"
        data-section-number="05"
        data-section-name="OUR TEAM"
      >

        <Team />

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="about-section about-section--cta"
        data-section-number="06"
        data-section-name="LET'S WORK TOGETHER"
      >

        <FinalCTA />

      </section>

    </main>
  );
}


export default About;