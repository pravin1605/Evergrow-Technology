import { useState } from "react";

import {
  ArrowUpRight,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";

import generalFAQ from "../../../data/faq/general";

import "./FAQ.css";


function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Keep homepage clean — only featured FAQs
  const featuredFAQs = generalFAQ.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section">

      {/* Decorative background */}
      <div className="faq-bg-orb faq-bg-orb-one" />
      <div className="faq-bg-orb faq-bg-orb-two" />

      <div className="container faq-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="faq-heading">

          <div className="faq-heading-main">

            <span className="eyebrow faq-eyebrow">
              Frequently asked
            </span>

            <h2>
              Questions,
              <br />
              <span className="text-gradient">
                answered.
              </span>
            </h2>

          </div>


          <div className="faq-heading-right">

            <p>
              Have a question about our services,
              process or working with Evergrow?
              We've got you covered.
            </p>

            <Link
              to="/contact"
              className="faq-contact-link"
            >
              <span>Ask us directly</span>

              <span className="faq-contact-icon">
                <ArrowUpRight size={16} />
              </span>
            </Link>

          </div>

        </div>


        {/* =================================
            FAQ LIST
        ================================= */}

        <div className="faq-list">

          {featuredFAQs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <article
                className={`faq-item ${
                  isOpen ? "open" : ""
                }`}
                key={faq.id || index}
                style={{
                  "--faq-index": index,
                }}
              >

                {/* Animated active line */}
                <div className="faq-active-line" />

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >

                  <div className="faq-question-left">

                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                  </div>


                  <span className="faq-icon">

                    <Plus size={19} />

                  </span>

                </button>


                {/* Animated answer */}
                <div className="faq-answer">

                  <div className="faq-answer-inner">

                    <div className="faq-answer-line" />

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </article>
            );
          })}

        </div>


        {/* =================================
            FOOTER
        ================================= */}

        <div className="faq-footer">

          <span className="faq-footer-text">
            Still have questions?
          </span>

          <Link
            to="/contact"
            className="faq-view-more"
          >

            <span>
              Let's talk
            </span>

            <span className="faq-footer-icon">
              <ArrowUpRight size={16} />
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}


export default FAQ;