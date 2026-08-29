import { useEffect, useRef, useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Globe,
  Users,
  Smartphone,
  Zap,
  Calendar,
  Stethoscope,
  UtensilsCrossed,
  Building2,
  ShoppingCart,
  BarChart3,
  Layers,
  CreditCard,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./IndustryTemplate.css";


// =====================================================
// ICON REGISTRY — data files reference icons by name.
// =====================================================

const ICONS = {
  Globe,
  Users,
  Smartphone,
  Zap,
  Calendar,
  Stethoscope,
  UtensilsCrossed,
  Building2,
  ShoppingCart,
  BarChart3,
  Layers,
  CreditCard,
  ClipboardList,
};

function Icon({ name, size = 18 }) {
  const Cmp = ICONS[name] || Sparkles;

  return <Cmp size={size} />;
}


// =====================================================
// REVEAL — scroll-triggered reveal wrapper.
// =====================================================

function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  onVisible,
  ...rest
}) {
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

          onVisible?.();

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );


    observer.observe(el);


    return () => observer.disconnect();

  }, [onVisible]);


  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={
        delay
          ? {
              transitionDelay: `${delay}ms`,
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}


const SOLUTIONS_ID = "industry-solutions";


// =====================================================
// INDUSTRY TEMPLATE
// =====================================================

function IndustryTemplate({ industry }) {

  // =====================================================
  // NOT FOUND
  // =====================================================

  if (!industry) {
    return (
      <main className="industry-not-found">

        <div className="container">

          <span className="eyebrow">
            Industry
          </span>

          <h1>
            Industry not found
          </h1>

          <p>
            The industry you are looking for does not exist.
          </p>

          <Link
            to="/industries"
            className="industry-btn industry-btn-primary"
          >
            Back to industries
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </main>
    );
  }


  // =====================================================
  // DATA
  // =====================================================

  const {
    label,
    title,
    description,
    heroImage,

    floatingElements = [],
    heroActions = [],

    problems = [],
    solutions = [],

    workflow = [],

    whyEvergrow,

    process = [],

    cta,

  } = industry;


  // =====================================================
  // SCROLL TO SOLUTIONS
  // =====================================================

  function scrollToSolutions(event) {

    event.preventDefault();

    document
      .getElementById(SOLUTIONS_ID)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

  }


  return (

    <main className="industry-template">


      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section className="ind-hero">


        {/* BACKGROUND */}

        <div className="ind-hero-bg">

          <img
            src={heroImage}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="ind-hero-overlay" />

        </div>


        {/* FLOATING INDUSTRY ELEMENTS */}

        {floatingElements.length > 0 && (

          <div
            className="ind-hero-floats"
            aria-hidden="true"
          >

            {floatingElements.map((chip, i) => (

              <div
                className={`ind-float ind-float-${i % 4}`}
                key={i}
                style={{
                  "--i": i,
                }}
              >

                <span className="ind-float-dot" />

                <div>

                  <strong>
                    {chip.label}
                  </strong>

                  {chip.sublabel && (

                    <em>
                      {chip.sublabel}
                    </em>

                  )}

                </div>

              </div>

            ))}

          </div>

        )}


        {/* HERO CONTENT */}

        <div className="container ind-hero-inner">

          <span className="eyebrow eyebrow-light">
            {label}
          </span>


          <h1>
            {title}
          </h1>


          <p>
            {description}
          </p>


          {/* HERO ACTIONS */}

          {heroActions.length > 0 && (

            <div className="ind-hero-actions">

              {heroActions.map((action, i) =>

                action.to ? (

                  <Link
                    key={i}
                    to={action.to}
                    className={`industry-btn industry-btn-${
                      action.style || "primary"
                    }`}
                  >

                    {action.label}

                    <ArrowUpRight size={16} />

                  </Link>

                ) : (

                  <a
                    key={i}
                    href={action.href}
                    onClick={
                      action.href === `#${SOLUTIONS_ID}`
                        ? scrollToSolutions
                        : undefined
                    }
                    className={`industry-btn industry-btn-${
                      action.style || "ghost"
                    }`}
                  >

                    {action.label}

                    <ArrowDown size={16} />

                  </a>

                )

              )}

            </div>

          )}

        </div>

      </section>



      {/* =====================================================
          02 — CHALLENGES
      ===================================================== */}

      {problems.length > 0 && (

        <section className="ind-problems">

          <div className="container">


            {/* HEADING */}

            <Reveal
              as="div"
              className="ind-heading"
            >

              <span className="eyebrow">
                The Reality
              </span>

              <h2>
                Running your business shouldn't mean managing everything manually.
              </h2>

            </Reveal>


            {/* PROBLEM LIST */}

            <div className="ind-problem-list">

              {problems.map((problem, i) => (

                <Reveal
                  as="article"
                  key={i}
                  className="ind-problem-row"
                  delay={i * 60}
                >

                  <span className="ind-problem-index">

                    {String(i + 1).padStart(2, "0")}

                  </span>


                  <div className="ind-problem-body">

                    <h3>
                      {problem.title}
                    </h3>

                    <p>
                      {problem.description}
                    </p>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          03 — DIGITAL SOLUTIONS
      ===================================================== */}

      {solutions.length > 0 && (

        <section
          className="ind-solutions"
          id={SOLUTIONS_ID}
        >

          <div className="container">


            {/* HEADING */}

            <Reveal
              as="div"
              className="ind-heading"
            >

              <span className="eyebrow">
                What We Build
              </span>

              <h2>
                Digital solutions built around your industry.
              </h2>

            </Reveal>


            {/* SOLUTIONS */}

            <div className="ind-solution-list">

              {solutions.map((solution, i) => (

                <Reveal
                  as="article"
                  className="ind-solution-row"
                  key={i}
                  delay={i * 50}
                >


                  {/* TEXT */}

                  <div className="ind-solution-text">


                    <div className="ind-solution-top">

                      <span className="ind-solution-index">

                        {String(i + 1).padStart(2, "0")}

                      </span>


                      <span className="ind-solution-icon">

                        <Icon
                          name={solution.icon}
                        />

                      </span>

                    </div>


                    <h3>
                      {solution.title}
                    </h3>


                    <p>
                      {solution.description}
                    </p>


                    {/* FEATURES */}

                    {solution.features?.length > 0 && (

                      <ul className="ind-solution-features">

                        {solution.features.map(
                          (feature, featureIndex) => (

                            <li key={featureIndex}>
                              {feature}
                            </li>

                          )
                        )}

                      </ul>

                    )}

                  </div>


                  {/* VISUAL */}

                  <div className="ind-solution-visual">

                    {solution.image ? (

                      <img
                        src={solution.image}
                        alt={solution.title}
                        loading="lazy"
                        onError={(e) => {

                          e.currentTarget.style.display = "none";

                          e.currentTarget.parentElement.classList.add(
                            "ind-fallback"
                          );

                        }}
                      />

                    ) : (

                      <div className="ind-fallback" />

                    )}


                    <span className="ind-solution-arrow">

                      <ArrowUpRight size={18} />

                    </span>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          04 — WORKFLOW
      ===================================================== */}

      {workflow.length > 0 && (

        <section className="ind-workflow">

          <div className="container">


            {/* HEADING */}

            <Reveal
              as="div"
              className="ind-heading"
            >

              <span className="eyebrow">
                How It Works
              </span>

              <h2>
                How the digital solution works.
              </h2>

            </Reveal>


            {/* WORKFLOW CHAIN */}

            <div className="ind-workflow-chain">

              <div
                className="ind-workflow-line"
                aria-hidden="true"
              />


              {workflow.map((step, i) => (

                <Reveal
                  as="div"
                  className="ind-workflow-step"
                  key={i}
                  delay={i * 70}
                >

                  <span className="ind-workflow-dot">

                    {i + 1}

                  </span>


                  <div>

                    <h4>
                      {step.title}
                    </h4>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          05 — WHY EVERGROW
      ===================================================== */}

      {whyEvergrow && (

        <section className="ind-why">

          <div className="container ind-why-grid">


            {/* LEFT */}

            <Reveal
              as="div"
              className="ind-why-statement"
            >

              <span className="eyebrow">
                Why Evergrow
              </span>


              <h2>
                Technology built around your business,
                not the other way around.
              </h2>


              <p>
                {whyEvergrow.statement}
              </p>

            </Reveal>


            {/* RIGHT */}

            <div className="ind-why-list">

              {whyEvergrow.points?.map(
                (point, i) => (

                  <Reveal
                    as="div"
                    className="ind-why-item"
                    key={i}
                    delay={i * 60}
                  >

                    <span>

                      {String(i + 1).padStart(2, "0")}

                    </span>


                    <div>

                      <h4>
                        {point.title}
                      </h4>

                      <p>
                        {point.description}
                      </p>

                    </div>

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          06 — OUR APPROACH
      ===================================================== */}

      {process.length > 0 && (

        <section className="ind-process">

          <div className="container">


            {/* HEADING */}

            <Reveal
              as="div"
              className="ind-heading"
            >

              <span className="eyebrow">
                Our Approach
              </span>

              <h2>
                How we get you there.
              </h2>

            </Reveal>


            {/* TIMELINE */}

            <div className="ind-process-timeline">

              {process.map((step, i) => (

                <Reveal
                  as="div"
                  className="ind-process-step"
                  key={i}
                  delay={i * 60}
                >

                  <span className="ind-process-index">

                    {String(i + 1).padStart(2, "0")}

                  </span>


                  <h4>
                    {step.title}
                  </h4>


                  <p>
                    {step.description}
                  </p>

                </Reveal>

              ))}

            </div>

          </div>

        </section>

      )}



      {/* =====================================================
          07 — FINAL CTA
      ===================================================== */}

      {cta && (

        <section className="ind-cta">

          <div
            className="ind-cta-glow"
            aria-hidden="true"
          />


          <Reveal
            as="div"
            className="container ind-cta-inner"
          >

            <h2>
              {cta.heading}
            </h2>


            <div className="ind-cta-actions">


              {/* PRIMARY */}

              {cta.primary && (

                <Link
                  to={cta.primary.to}
                  className="industry-btn industry-btn-primary"
                >

                  {cta.primary.label}

                  <ArrowUpRight size={17} />

                </Link>

              )}


              {/* SECONDARY */}

              {cta.secondary && (

                <Link
                  to={cta.secondary.to}
                  className="industry-btn industry-btn-ghost"
                >

                  {cta.secondary.label}

                  <ArrowUpRight size={17} />

                </Link>

              )}

            </div>

          </Reveal>

        </section>

      )}


    </main>

  );
}


export default IndustryTemplate;