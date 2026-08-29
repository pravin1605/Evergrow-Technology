import { useEffect, useRef, useState } from "react";

import {
  Lightbulb,
  Target,
  Layers3,
  Users,
} from "lucide-react";

import "./WhyEvergrow.css";


const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Business-first thinking",
    description:
      "We understand the business problem first and then choose the right technology, design and digital strategy.",
  },

  {
    number: "02",
    icon: Target,
    title: "Solutions with purpose",
    description:
      "We don't build technology just for the sake of it. Every solution is designed around a clear business objective.",
  },

  {
    number: "03",
    icon: Layers3,
    title: "One digital partner",
    description:
      "From websites and software to marketing and automation, we bring multiple digital capabilities together.",
  },

  {
    number: "04",
    icon: Users,
    title: "Built for long-term growth",
    description:
      "Our goal is not just to launch a project. We build solutions that can evolve as your business grows.",
  },
];


// ======================================================
// SCROLL REVEAL HOOK
// Triggers once when the element scrolls into view.
// ======================================================

function useRevealOnScroll(threshold = 0.2) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const el = ref.current;

    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();

  }, [threshold]);

  return [ref, visible];

}


// ======================================================
// SINGLE REASON — its own component so the reveal hook
// can be called once per instance (hooks can't live
// inside the .map() loop of the parent).
// ======================================================

function ReasonItem({ reason, index }) {

  const [ref, visible] = useRevealOnScroll();
  const Icon = reason.icon;

  return (

    <article
      ref={ref}
      className={`why-reason why-reason-${index + 1}${
        visible ? " is-revealed" : ""
      }`}
      style={{
        "--reason-delay": `${index * 130}ms`,
      }}
    >

      {/* Connector line */}

      <span className="why-connector" />


      {/* Icon circle */}

      <div className="why-reason-icon">

        <Icon
          size={25}
          strokeWidth={1.8}
        />

      </div>


      {/* Text */}

      <div className="why-reason-content">

        <div className="why-reason-heading">

          <span className="why-reason-number">
            {reason.number}
          </span>

          <h3>
            {reason.title}
          </h3>

        </div>

        <p>
          {reason.description}
        </p>

      </div>

    </article>

  );

}


function WhyEvergrow() {

  const [reasonsRef, reasonsVisible] = useRevealOnScroll(0.15);
  const [bottomRef, bottomVisible] = useRevealOnScroll(0.3);

  return (
    <section className="why-evergrow-section">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="why-evergrow-bg-glow why-glow-one" />
      <div className="why-evergrow-bg-glow why-glow-two" />


      <div className="why-evergrow-container">


        {/* =========================================
            SECTION LABEL
        ========================================= */}

        <div className="why-section-label">

          <span className="why-label-line" />

          <span>
            WHY EVERGROW
          </span>

        </div>



        {/* =========================================
            MAIN VISUAL
        ========================================= */}

        <div className="why-evergrow-visual">


          {/* =====================================
              CENTER — glow, orbit ring and circle
              share one wrapper so they stay perfectly
              centered on each other at every size.
          ===================================== */}

          <div className="why-center-wrap">

            <div className="why-center-glow" />

            <div className="why-orbit-ring" />

            <div className="why-center-circle">

              <div className="why-center-inner">

                <span className="why-center-small">
                  WHY
                </span>

                <span className="why-center-title">
                  CHOOSE
                </span>

                <span className="why-center-title">
                  EVERGROW
                </span>

                <span className="why-center-line" />

                <span className="why-center-subtitle">
                  Digital solutions
                  <br />
                  built for growth.
                </span>

              </div>

            </div>

          </div>



          {/* =====================================
              REASONS
              A continuous connecting line grows in
              behind the list once it scrolls into
              view (mobile/tablet-portrait only —
              see CSS).
          ===================================== */}

          <div
            ref={reasonsRef}
            className={`why-reasons${reasonsVisible ? " is-revealed" : ""}`}
          >

            {reasons.map((reason, index) => (
              <ReasonItem
                key={reason.number}
                reason={reason}
                index={index}
              />
            ))}

          </div>


        </div>



        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <div
          ref={bottomRef}
          className={`why-evergrow-bottom${bottomVisible ? " is-revealed" : ""}`}
        >

          <div className="why-bottom-line" />

          <p>
            <strong>
              Technology
            </strong>{" "}
            should simplify your business,
            not complicate it.
          </p>

          <div className="why-bottom-mark">
            EG
          </div>

        </div>


      </div>

    </section>
  );
}


export default WhyEvergrow;