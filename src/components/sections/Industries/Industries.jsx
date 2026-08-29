import {
  ArrowUpRight,
  Dumbbell,
  HeartPulse,
  GraduationCap,
  Building2,
  House,
  Utensils,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Industries.css";


/* =========================================================
   INDUSTRY DATA
========================================================= */

const industries = [
  {
    name: "Gym & Fitness",
    description:
      "Websites, management software and digital marketing for fitness businesses.",
    path: "/industries/gym-fitness",
    icon: Dumbbell,
    label: "Fitness Solutions",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },

  {
    name: "Healthcare",
    description:
      "Modern digital experiences and software solutions for healthcare businesses.",
    path: "/industries/healthcare",
    icon: HeartPulse,
    label: "Healthcare Solutions",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
  },

  {
    name: "Education",
    description:
      "Websites, admission systems and digital solutions for educational institutions.",
    path: "/industries/education",
    icon: GraduationCap,
    label: "Education Solutions",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  },

  {
    name: "Housing Society",
    description:
      "Smart digital management solutions for residential communities.",
    path: "/industries/housing-society",
    icon: Building2,
    label: "Community Solutions",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
  },

  {
    name: "Real Estate",
    description:
      "Digital platforms and marketing systems for real estate businesses.",
    path: "/industries/real-estate",
    icon: House,
    label: "Property Solutions",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
  },

  {
    name: "Restaurants",
    description:
      "Websites, ordering experiences and marketing solutions for restaurants.",
    path: "/industries/restaurants",
    icon: Utensils,
    label: "Restaurant Solutions",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  },
];


/* =========================================================
   INDUSTRIES
========================================================= */

function Industries() {
  return (
    <section className="industries-section">

      {/* ===================================================
          BACKGROUND DECORATION
      =================================================== */}

      <div
        className="industries-background"
        aria-hidden="true"
      >
        <div className="industries-grid-pattern" />
        <div className="industries-glow" />
        <div className="industries-orb industries-orb-one" />
        <div className="industries-orb industries-orb-two" />
      </div>


      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="industries-heading">

          <div className="industries-title-block">

            <div className="industries-eyebrow">

              <span className="industries-eyebrow-line" />

              <span className="eyebrow">
                Industries
              </span>

            </div>


            <h2>

              Digital solutions

              <br />

              <span className="text-gradient">
                shaped for your industry.
              </span>

            </h2>

          </div>


          <div className="industries-intro">

            <p>
              Every business operates differently. We combine
              technology, design and digital growth strategies
              to create solutions around the way your business
              actually works.
            </p>


            <Link
              to="/industries"
              className="industries-link"
            >

              <span>
                Explore all industries
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />

            </Link>

          </div>

        </div>


        {/* =================================================
            INDUSTRY GRID
        ================================================= */}

        <div className="industries-grid">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <Link
                key={industry.path}
                to={industry.path}
                className="industry-card"
                style={{
                  "--card-index": index,
                  "--industry-image": `url("${industry.image}")`,
                }}
              >

                {/* =========================================
                    CARD TOP
                ========================================= */}

                <div className="industry-card-top">

                  <span className="industry-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="industry-card-category">
                    {industry.label}
                  </span>

                </div>


                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="industry-card-visual">

                  <img
                    src={industry.image}
                    alt={`${industry.name} digital solutions`}
                    className="industry-card-image"
                    loading={index > 1 ? "lazy" : "eager"}
                  />


                  {/* IMAGE OVERLAY */}

                  <div className="industry-card-overlay" />


                  {/* IMAGE SHINE */}

                  <div
                    className="industry-card-shine"
                    aria-hidden="true"
                  />


                  {/* ICON */}

                  <div className="industry-card-icon">

                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />

                  </div>

                </div>


                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="industry-card-content">

                  <span className="industry-card-label">
                    Digital solutions
                  </span>


                  <h3>
                    {industry.name}
                  </h3>


                  <p>
                    {industry.description}
                  </p>

                </div>


                {/* =========================================
                    BOTTOM ACTION
                ========================================= */}

                <div className="industry-card-bottom">

                  <span className="industry-card-action-label">
                    Explore industry
                  </span>


                  <span className="industry-card-link">

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

      </div>

    </section>
  );
}


export default Industries;