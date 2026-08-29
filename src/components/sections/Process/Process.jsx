import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Check,
  Lightbulb,
  Target,
  Layers3,
  Users,
  Rocket,
} from "lucide-react";

import "./Process.css";

import process from "../../../data/process/process";


// ======================================================
// FALLBACK ICONS
// ======================================================

const fallbackIcons = [
  Lightbulb,
  Target,
  Layers3,
  Users,
  Rocket,
];


// ======================================================
// FALLBACK POINTS
// ======================================================

const fallbackPoints = [
  "Understand business requirements",
  "Define clear project goals",
  "Create a practical solution",
];


// ======================================================
// SCROLL REVEAL HOOK
// Fires once when the element actually scrolls into view,
// instead of animating immediately on page load (which is
// what was happening before — by the time you scrolled to
// card 3 its entrance animation had already finished
// off-screen).
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
      { threshold, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();

  }, [threshold]);

  return [ref, visible];

}


// ======================================================
// SINGLE PROCESS CARD
// Its own component so useRevealOnScroll (a hook) can be
// called once per card instance — hooks can't be called
// inside the .map() loop in the parent.
// ======================================================

function ProcessCard({ step, index, Icon, points, isLast }) {

  const [ref, visible] = useRevealOnScroll();

  return (

    <article
      ref={ref}
      className={`process-card${visible ? " is-revealed" : ""}${
        isLast ? " is-last" : ""
      }`}
      style={{
        "--process-delay": `${index * 100}ms`,
      }}
    >

      {/* =================================================
          NUMBER
      ================================================= */}

      <div className="process-number-wrapper">

        <div className="process-number">

          <span>
            {step.number ||
              String(index + 1)}
          </span>

        </div>

      </div>


      {/* =================================================
          CARD
      ================================================= */}

      <div className="process-card-inner">

        {/* =================================================
            ICON AREA
        ================================================= */}

        <div className="process-icon-area">

          <div className="process-icon-circle">

            <Icon
              size={42}
              strokeWidth={1.6}
            />

          </div>

        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="process-card-content">

          <span className="process-step-label">
            STEP{" "}
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>

          <h3>
            {step.title}
          </h3>

          <p>
            {step.description}
          </p>


          {/* =================================================
              POINTS — each one staggers in individually
          ================================================= */}

          <ul className="process-points">

            {points
              .slice(0, 3)
              .map(
                (
                  point,
                  pointIndex
                ) => (
                  <li
                    key={pointIndex}
                    style={{
                      "--point-delay": `${pointIndex * 90}ms`,
                    }}
                  >

                    <span className="process-check">
                      <Check
                        size={11}
                        strokeWidth={3}
                      />
                    </span>

                    <span>
                      {point}
                    </span>

                  </li>
                )
              )}

          </ul>

        </div>


        {/* =================================================
            ARROW
        ================================================= */}

        <div className="process-card-arrow">

          <ArrowRight
            size={18}
            strokeWidth={2}
          />

        </div>


        {/* =================================================
            ACCENT SWEEP — thin gradient bar that sweeps in
            along the bottom edge once the card is revealed
        ================================================= */}

        <span className="process-card-accent" />

      </div>

    </article>

  );

}


// ======================================================
// PROCESS COMPONENT
// ======================================================

const Process = () => {
  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-title"
    >

      {/* =================================================
          TOP COLORED AREA
      ================================================= */}

      <div className="process-top-background">

        <div className="process-top-glow process-glow-one" />
        <div className="process-top-glow process-glow-two" />

        <div className="process-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="process-header">

            <span className="process-eyebrow">
              HOW IT WORKS
            </span>

            <h2 id="process-title">
              How it works
            </h2>

            <p>
              From understanding your business to delivering
              practical digital solutions.
            </p>

          </div>

        </div>
      </div>


      {/* =================================================
          PROCESS CARDS AREA
      ================================================= */}

      <div className="process-cards-wrapper">

        <div className="process-container">

          <div className="process-cards">

            {process.map((step, index) => {

              const points =
                Array.isArray(step.points) &&
                step.points.length > 0
                  ? step.points
                  : fallbackPoints;


              const Icon =
                step.icon ||
                fallbackIcons[index % fallbackIcons.length];


              return (
                <ProcessCard
                  key={
                    step.id ||
                    step.number ||
                    index
                  }
                  step={step}
                  index={index}
                  Icon={Icon}
                  points={points}
                  isLast={index === process.length - 1}
                />
              );
            })}

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM SPACE / DECORATION
      ================================================= */}

      <div className="process-bottom-space">

        <div className="process-bottom-line" />

      </div>

    </section>
  );
};


export default Process;