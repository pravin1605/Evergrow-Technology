import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import IndustryCard
  from "../../components/cards/IndustryCard/IndustryCard";



import industries
  from "../../data/industries";

import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";

import "./Industries.css";


function Industries() {

  return (

    <main className="industries-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">

        <div className="container">

          <div className="industries-hero-grid">


            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="industries-hero-content">

              <div className="industries-eyebrow">

                <Sparkles size={15} />

                <span>
                  Industries we serve
                </span>

              </div>


              <h1>

                Digital solutions

                <span>
                  built around
                </span>

                your industry.

              </h1>


              <p>

                Every industry has different challenges.
                We combine technology, design and digital
                strategy to create solutions that fit the
                way your business actually works.

              </p>


              <div className="industries-hero-actions">

                <Link
                  to="/contact"
                  className="industries-primary-button"
                >

                  Discuss your business

                  <ArrowUpRight size={17} />

                </Link>


                <a
                  href="#industries-list"
                  className="industries-text-link"
                >

                  Explore industries

                  <ArrowUpRight size={15} />

                </a>

              </div>

            </div>



            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="industries-hero-visual">

              <div
                className="industries-visual-orbit orbit-one"
              />

              <div
                className="industries-visual-orbit orbit-two"
              />


              <div className="industries-visual-card">

                <span>
                  BUILT FOR BUSINESS
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

                <div className="industries-visual-dot" />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          INDUSTRY INTRO
      ===================================================== */}



      {/* =====================================================
          INDUSTRY CARDS
      ===================================================== */}

      <section className="industries-directory">

        <div className="container">


          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div className="industries-section-heading">

            <div>

              <span className="eyebrow">
                Explore industries
              </span>

              <h2>
                Built for different
                business needs.
              </h2>

            </div>


            <p>

              Choose your industry to discover
              the digital solutions we can build
              specifically for your business.

            </p>

          </div>



          {/* =================================================
              3 COLUMN INDUSTRY GRID
          ================================================= */}

          <div className="industries-grid">

            {industries.map(
              (industry, index) => (

                <IndustryCard
                  key={industry.slug}
                  industry={industry}
                  index={index}
                />

              )
            )}

          </div>

        </div>

      </section>



{/* <section className="industries-cta">

  <div className="container">

    <div className="industries-cta-box">

      <div className="industries-cta-grid" />

      <div className="industries-cta-glow industries-cta-glow-one" />
      <div className="industries-cta-glow industries-cta-glow-two" />

      <div className="industries-cta-orb">
        <span />
      </div>


      <div className="industries-cta-floating-label">
        <Sparkles size={14} />
        <span>Built for your business</span>
      </div>


      <div className="industries-cta-content">

        <span className="eyebrow industries-cta-eyebrow">
          Your industry isn't listed?
        </span>

        <h2>
          Your business is unique.
          <br />

          <span className="industries-cta-highlight">
            Your solution should be too.
          </span>
        </h2>

        <p>
          Tell us about your business and we'll
          help you find the right digital approach
          to build, improve and grow your business.
        </p>

        <div className="industries-cta-meta">

          <span className="meta-dot" />

          <span>Strategy</span>

          <span className="meta-separator">/</span>

          <span>Technology</span>

          <span className="meta-separator">/</span>

          <span>Growth</span>

        </div>

      </div>


      <div className="industries-cta-action">

        <Link
          to="/contact"
          className="industries-cta-button"
        >

          <span>Talk to us</span>

          <span className="industries-cta-button-icon">
            <ArrowUpRight size={19} />
          </span>

        </Link>

      </div>


      <div className="industries-cta-corner-text">
        EVERGROW TECHNOLOGY
      </div>

    </div>

  </div>

</section> */}



    <FinalCTA></FinalCTA>

      



    </main>

  );

}


export default Industries;