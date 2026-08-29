import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta-section">

      <div className="container">

        <div className="final-cta-box">

          {/* =================================
              BACKGROUND DECORATION
          ================================= */}

          <div className="final-cta-grid" />

          <div className="final-cta-glow final-cta-glow-one" />
          <div className="final-cta-glow final-cta-glow-two" />

          <div className="final-cta-orb">
            <span />
          </div>


          {/* =================================
              FLOATING LABEL
          ================================= */}

          <div className="final-cta-floating-label">
            <Sparkles size={14} />
            <span>Ready to grow?</span>
          </div>


          {/* =================================
              CONTENT
          ================================= */}

          <div className="final-cta-content">

            <span className="eyebrow final-cta-eyebrow">
              Let's work together
            </span>


            <h2>
              Have a business idea
              <br />

              <span className="final-cta-highlight">
                or digital challenge?
              </span>
            </h2>


            <p>
              Tell us what you're trying to build,
              improve or grow. We'll help you find
              the right digital solution for your business.
            </p>


            {/* Small supporting text */}

            <div className="final-cta-meta">

              <span className="meta-dot" />

              <span>
                Websites
              </span>

              <span className="meta-separator">
                /
              </span>

              <span>
                Software
              </span>

              <span className="meta-separator">
                /
              </span>

              <span>
                Marketing
              </span>

            </div>

          </div>


          {/* =================================
              ACTION
          ================================= */}

          <div className="final-cta-action">

            <Link
              to="/contact"
              className="final-cta-button"
            >

              <span>
                Let's Talk
              </span>

              <span className="final-cta-button-icon">
                <ArrowUpRight size={19} />
              </span>

            </Link>

          </div>


          {/* =================================
              CORNER TEXT
          ================================= */}

          <div className="final-cta-corner-text">
            EVERGROW TECHNOLOGY
          </div>

        </div>

      </div>

    </section>
  );
}

export default FinalCTA;