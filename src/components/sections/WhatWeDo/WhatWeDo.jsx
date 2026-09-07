import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Smartphone,
  Settings,
  ShoppingBag,
  Palette,
} from "lucide-react";

import { Link } from "react-router-dom";

import { primaryServices } from "../../../data/services";

import "./WhatWeDo.css";


/* =========================================================
   SERVICE ICONS
========================================================= */

const serviceIcons = {
  "web-development": Code2,
  "custom-software": Settings,
  "digital-marketing": Megaphone,
  "mobile-apps": Smartphone,
  ecommerce: ShoppingBag,
  "ui-ux": Palette,
};


/* =========================================================
   SERVICE VISUAL INFORMATION
========================================================= */

const serviceVisuals = {
  "web-development": {
    type: "web",
    label: "Digital Experiences",
  },

  "custom-software": {
    type: "software",
    label: "Business Systems",
  },

  "digital-marketing": {
    type: "marketing",
    label: "Digital Growth",
  },

  "mobile-apps": {
    type: "mobile",
    label: "Mobile Experiences",
  },

  ecommerce: {
    type: "commerce",
    label: "Online Commerce",
  },

  "ui-ux": {
    type: "design",
    label: "Product Design",
  },
};


/* =========================================================
   ACCENT COLOR PER SERVICE TYPE
   Gives each card its own identity so a visitor can tell
   services apart at a glance instead of six identical blue cards.
========================================================= */

const accentColors = {
  web: "#2563eb",
  software: "#7c3aed",
  marketing: "#f97316",
  mobile: "#0ea5e9",
  commerce: "#16a34a",
  design: "#db2777",
  default: "#2563eb",
};


/* =========================================================
   QUICK-GLANCE TAGS SHOWN ON HOVER
   Falls back to a sensible default per service type if the
   service object itself doesn't define tags/features.
========================================================= */

const defaultTags = {
  web: ["Responsive design", "Fast load times", "SEO friendly"],
  software: ["Custom workflows", "Scalable systems", "Secure by design"],
  marketing: ["Targeted campaigns", "Analytics driven", "Brand growth"],
  mobile: ["iOS & Android", "Smooth UX", "Push notifications"],
  commerce: ["Secure checkout", "Inventory sync", "Payment gateways"],
  design: ["User research", "Wireframes", "Pixel-perfect UI"],
  default: ["Tailored approach", "Modern stack", "Ongoing support"],
};


/* =========================================================
   FALLBACK SERVICE IMAGES
========================================================= */

const serviceImages = {

  "web-development":
    "https://www.orangeitsoftwares.com/wp-content/uploads/2026/03/Top-10-Reasons-to-Choose-an-Indian-Website-Development-Company-in-2024-.jpg",

  "digital-marketing":
    "https://wimt.org/wp-content/uploads/2025/09/10001-1.jpg",

  "mobile-apps":
    "https://www.smartinsights.com/wp-content/uploads/2014/07/Screen-Shot-2014-07-07-at-16.27.15.png",

  "custom-software":
    "https://belighted.com/644b6ab153ef61f3e0269d04/65ca6a00b5177a529b9a38f9_6564900380b182df62f86c9d_20943761%20(1).jpg",

  ecommerce:
    "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FWhat_is_E_commerce_and_What_are_its_Applications_2_d2eb0d4402.jpg&w=4500&q=90",

  "ui-ux":
    "https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/06/ux-vs-ui.jpg",
};


/* =========================================================
   GET SERVICE IMAGE
========================================================= */

function getServiceImage(service) {
  return (
    service.image ||
    service.imageUrl ||
    service.thumbnail ||
    service.coverImage ||
    null
  );
}


/* =========================================================
   WHAT WE DO
========================================================= */

function WhatWeDo() {

  /*
   * IMPORTANT:
   *
   * Only the first 6 services are rendered.
   *
   * Even if primaryServices contains 7 or more
   * services, this section will always display 6.
   */

  const visibleServices = primaryServices.slice(0, 6);


  return (
    <section className="what-we-do">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="what-we-do-background"
        aria-hidden="true"
      >

        <div className="what-we-do-grid-pattern" />

        <div className="what-we-do-glow" />

        <div className="what-we-do-orb what-we-do-orb-one" />

        <div className="what-we-do-orb what-we-do-orb-two" />

      </div>


      <div className="container">


        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="what-we-do-heading">


          <div className="what-we-do-title-block">

            <div className="what-we-do-eyebrow">

              <span className="what-we-do-eyebrow-line" />

              <span className="eyebrow">
                What we do
              </span>

            </div>


            <h2>
              Digital solutions
              <br />

              <span className="text-gradient">
                built around your business.
              </span>
            </h2>

          </div>


          <div className="what-we-do-intro">

            <p>
              We combine technology, design and digital
              marketing to create practical digital solutions
              that help businesses work smarter, connect better
              and grow with confidence.
            </p>


            <Link
              to="/services"
              className="what-we-do-link"
            >

              <span>
                Explore all services
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />

            </Link>

          </div>

        </div>


        {/* ===================================================
            SERVICES
        =================================================== */}

        <div className="what-we-do-grid">

          {visibleServices.map((service, index) => {

            const Icon =
              serviceIcons[service.slug] || Code2;


            const visual =
              serviceVisuals[service.slug] || {
                type: "default",
                label: "Digital Solutions",
              };


            const image =
              getServiceImage(service) ||
              serviceImages[service.slug];


            const accent =
              accentColors[visual.type] || accentColors.default;


            const tags = (
              service.tags ||
              service.features ||
              defaultTags[visual.type] ||
              defaultTags.default
            ).slice(0, 3);


            return (

              /*
                The whole card is now a single link to the
                service page — visitors don't have to hunt
                for the small arrow to explore a service.
              */
              <Link
                to={`/services/${service.slug}`}
                className={`
                  what-we-do-card
                  what-we-do-card-${visual.type}
                `}
                key={service.slug}
                aria-label={`Explore ${service.title}`}
                style={{
                  "--card-delay": `${index * 80}ms`,
                  "--card-accent": accent,
                }}
              >


                {/* =========================================
                    TOP
                ========================================= */}

                <div className="what-we-do-card-top">

                  <span className="what-we-do-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="what-we-do-category">
                    {visual.label}
                  </span>

                </div>


                {/* =========================================
                    VISUAL
                ========================================= */}

                <div className="what-we-do-visual">

                  {image ? (

                    <img
                      src={image}
                      alt={`${service.title} visual`}
                      className="what-we-do-image"
                      loading="lazy"
                    />

                  ) : (

                    <div
                      className="what-we-do-visual-fallback"
                      aria-hidden="true"
                    >

                      <div className="visual-grid" />

                      <div className="visual-orbit visual-orbit-one" />

                      <div className="visual-orbit visual-orbit-two" />

                      <div className="visual-main-icon">

                        <Icon
                          size={30}
                          strokeWidth={1.6}
                        />

                      </div>

                      <div className="visual-accent-dot" />

                    </div>

                  )}


                  <div className="what-we-do-visual-overlay" />


                  <div className="what-we-do-icon">

                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />

                  </div>


                  <div className="what-we-do-image-shine" />


                  {/* =======================================
                      HOVER REVEAL — quick-glance tags that
                      slide up over the image so a visitor
                      immediately sees what the service covers
                  ======================================= */}

                  <div
                    className="what-we-do-reveal"
                    aria-hidden="true"
                  >

                    {tags.map((tag) => (

                      <span
                        className="what-we-do-tag"
                        key={tag}
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>


                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="what-we-do-card-content">

                  <h3>
                    {service.shortHeadline ||
                      service.title}
                  </h3>


                  <p>
                    {service.shortDescription ||
                      service.description ||
                      "A practical digital solution designed around your business needs."}
                  </p>

                </div>


                {/* =========================================
                    BOTTOM
                ========================================= */}

                <div className="what-we-do-card-bottom">

                  <span className="what-we-do-card-label">
                    Explore solution
                  </span>


                  <span
                    className="what-we-do-card-link"
                    aria-hidden="true"
                  >

                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                    />

                  </span>

                </div>

              </Link>

            );

          })}

        </div>


        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div className="what-we-do-bottom">

          <div>

            <span>
              Need something more specific?
            </span>

            <p>
              We can build a solution around your
              exact business requirements.
            </p>

          </div>


          <Link
            to="/contact"
            className="what-we-do-bottom-button"
          >

            <span>
              Discuss your project
            </span>

            <ArrowUpRight
              size={17}
            />

          </Link>

        </div>

      </div>

    </section>
  );
}


export default WhatWeDo;