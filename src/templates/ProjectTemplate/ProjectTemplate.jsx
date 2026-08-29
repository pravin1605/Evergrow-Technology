

import {
  ArrowUpRight,
  ExternalLink,
  FileText
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ProjectTemplate.css";

import { useEffect, useRef, useState } from "react";


/* =====================================================
   REVEAL
   Lightweight scroll-reveal wrapper. Adds a class once
   the element enters the viewport; CSS does the rest.
   No-ops gracefully if IntersectionObserver is missing.
===================================================== */

function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {

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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();

  }, []);


  return (

    <Tag
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>

  );

}



/* =====================================================
   LIVE WEBSITE PREVIEW  — the page centerpiece
   Renders the deployed project inside a dark, layered
   browser-style frame. Falls back to a clean "open
   externally" state if the site refuses to embed
   (X-Frame-Options / CSP on the target site).
===================================================== */

function LiveWebsitePreview({ project }) {

  const [status, setStatus] = useState("loading");
  // "loading" | "loaded" | "blocked"

  const timeoutRef = useRef(null);


  useEffect(() => {

    setStatus("loading");

    // Iframes blocked by X-Frame-Options / CSP rarely fire a
    // detectable JS error, so we treat "no load event within
    // a reasonable window" as a signal the site refused to embed.
    timeoutRef.current = setTimeout(() => {

      setStatus((current) =>
        current === "loading" ? "blocked" : current
      );

    }, 6000);

    return () => clearTimeout(timeoutRef.current);

  }, [project.liveUrl]);


  const handleLoad = () => {

    clearTimeout(timeoutRef.current);
    setStatus("loaded");

  };


  let displayUrl = project.liveUrl;

  try {

    const parsed = new URL(project.liveUrl);
    displayUrl = parsed.hostname + (
      parsed.pathname !== "/" ? parsed.pathname : ""
    );

  } catch {

    // keep raw string if the URL can't be parsed

  }


  return (

    <section className="live-preview-section">

      <div className="container">

        <Reveal as="div" className="section-heading section-heading--live">

          <span className="live-indicator">
            <span className="live-indicator-dot" />
            Live Project
          </span>

          <h2>
            Explore the Website
          </h2>

          <p className="section-subtitle">
            Interact with the live project
            and experience it yourself.
          </p>

        </Reveal>


        <Reveal as="div" className="live-frame-outer" delay={80}>

          <div className="browser-frame">

            <div className="browser-chrome">

              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                <span className="live-dot" />
                {displayUrl}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="browser-open-link"
              >
                <span>Open Website</span>
                <ExternalLink size={14} strokeWidth={2.5} />
              </a>

            </div>


            <div className="browser-viewport">

              {status !== "blocked" && (

                <iframe
                  key={project.liveUrl}
                  src={project.liveUrl}
                  title={`${project.title} live preview`}
                  loading="lazy"
                  allow="fullscreen"
                  scrolling="auto"
                  onLoad={handleLoad}
                  className={
                    status === "loaded"
                      ? "live-iframe is-visible"
                      : "live-iframe"
                  }
                />

              )}


              {status === "loading" && (

                <div className="preview-state preview-state--loading">

                  <span className="preview-spinner" />

                  <p>Loading the live site&hellip;</p>

                </div>

              )}


              {status === "blocked" && (

                <div className="preview-state preview-state--blocked">

                  <span className="preview-state-label">
                    Live website
                  </span>

                  <p>
                    This site can't be displayed inside
                    the preview window, but it's live
                    and ready to explore.
                  </p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-button primary"
                  >
                    Open Website
                    <ExternalLink size={17} />
                  </a>

                </div>

              )}

            </div>

          </div>

        </Reveal>


        {/*
         * Mobile uses the real website directly instead of an iframe.
         * This avoids nested scrolling problems on phones and lets the
         * external website use the phone browser's normal responsive layout.
         */}
        <div className="mobile-live-preview">

          <div className="mobile-live-preview-icon" aria-hidden="true">
            <ExternalLink size={22} />
          </div>

          <span className="mobile-live-preview-label">
            Live Project
          </span>

          <h3>
            Explore this website on your phone
          </h3>

          <p>
            Open the live project in your mobile browser
            for the best scrolling and responsive experience.
          </p>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mobile-live-preview-button"
          >
            Open Website
            <ExternalLink size={17} />
          </a>

        </div>


        <p className="preview-footnote">
          Having trouble viewing it here?{" "}
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Open it in a new tab
          </a>
          .
        </p>

      </div>

    </section>

  );

}



/* =====================================================
   PROJECT TEMPLATE
===================================================== */

function ProjectTemplate({ project }) {

  if (!project) {

    return (
      <main className="project-not-found">

        <div className="container">

          <h1>
            Project not found
          </h1>

          <Link to="/work">
            Back to work
          </Link>

        </div>

      </main>
    );
  }


  const meta = [project.category, project.type].filter(Boolean);

  const documentationUrl =
    project.documentation || project.documents?.documentation;


  return (
    <main className="project-template">


      {/* =================================
          1. PROJECT HEADLINE
      ================================= */}

      <section className="project-hero">

        <div className="hero-backdrop" aria-hidden="true" />

        <div className="container">

          {meta.length > 0 && (

            <div
              className="project-hero-meta hero-anim"
              style={{ "--d": "0ms" }}
            >

              {meta.map((item, index) => (

                <span
                  key={index}
                  className={index === 0 ? "is-primary" : ""}
                >
                  {item}
                </span>

              ))}

            </div>

          )}


          <h1 className="hero-anim" style={{ "--d": "90ms" }}>
            {project.title}
          </h1>


          {(project.tagline || project.description) && (

            <p
              className="project-tagline hero-anim"
              style={{ "--d": "180ms" }}
            >
              {project.tagline || project.description}
            </p>

          )}

        </div>

      </section>



      {/* =================================
          2. EXPLORE THE WEBSITE
      ================================= */}

      {project.liveUrl && (

        <LiveWebsitePreview project={project} />

      )}



      {/* =================================
          3. PROJECT RESOURCE
      ================================= */}

      {documentationUrl && (

        <section className="project-resource">

          <div className="container">

            <Reveal as="div" className="resource-box">

              <div className="resource-box-text">

                <span className="eyebrow">
                  Project Resource
                </span>

                <h2>
                  Explore the complete
                  project documentation.
                </h2>

              </div>

              <a
                href={documentationUrl}
                target="_blank"
                rel="noreferrer"
                className="project-action-button primary"
              >
                <FileText size={17} />
                View Documentation
                <ArrowUpRight size={17} />
              </a>

            </Reveal>

          </div>

        </section>

      )}



      {/* =================================
          4. WHAT THIS PROJECT PROVIDES
      ================================= */}

      {project.provides?.length > 0 && (

        <section className="project-provides">

          <div className="container">

            <Reveal as="div" className="section-heading">

              <span className="eyebrow">
                What This Project Provides
              </span>

              <h2>
                A digital experience built
                around real business needs.
              </h2>

            </Reveal>


            <div className="provides-grid">

              {project.provides.map(

                (item, index) => (

                  <Reveal
                    as="div"
                    key={index}
                    className="provides-card"
                    delay={index * 70}
                  >

                    <span className="provides-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                      {item.title || item}
                    </h3>

                    {item.description && (

                      <p>
                        {item.description}
                      </p>

                    )}

                  </Reveal>

                )

              )}

            </div>

          </div>

        </section>

      )}



      {/* =================================
          5. HAVE A SIMILAR REQUIREMENT?
      ================================= */}

      <section className="project-final-cta">

        <div className="final-cta-backdrop" aria-hidden="true" />

        <Reveal as="div" className="container">

          <span className="eyebrow eyebrow--on-dark">
            Have a Similar Requirement?
          </span>

          <h2>
            Let's build a digital solution
            tailored to your business.
          </h2>

          <Link
            to="/contact"
            className="project-action-button primary"
          >

            Start a Project

            <ArrowUpRight size={17} />

          </Link>

        </Reveal>

      </section>


    </main>
  );
}

export default ProjectTemplate;