import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import FinalCTA from "../../components/sections/FinalCTA/FinalCTA";

import ProjectCard
  from "../../components/cards/ProjectCard/ProjectCard";

import {
  allProjects,
} from "../../data/projects";

import "./Work.css";


function Work() {

  const [filter, setFilter] =
    useState("All");


  /* =====================================================
     INDUSTRY FILTERS
  ===================================================== */

  const industries = [
    "All",

    ...new Set(
      allProjects.map(
        (project) =>
          project.industry
      )
    ),
  ];


  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  const filteredProjects =
    useMemo(() => {

      if (filter === "All") {
        return allProjects;
      }

      return allProjects.filter(
        (project) =>
          project.industry === filter
      );

    }, [filter]);


  return (

    <main className="work-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="work-hero">

        <div className="container">

          <div className="work-hero-grid">


            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div className="work-hero-content">

              <div className="work-eyebrow">

                <Sparkles
                  size={15}
                  strokeWidth={2}
                />

                <span>
                  Our work
                </span>

              </div>


              <h1>

                Things we've
                <span> built.</span>

              </h1>


              <p>

                Explore websites, software
                and digital experiences
                created by Evergrow for
                different industries and
                business needs.

              </p>


              <div className="work-hero-actions">

                <Link
                  to="/contact"
                  className="work-primary-button"
                >

                  <span>
                    Start a project
                  </span>

                  <ArrowUpRight
                    size={17}
                  />

                </Link>


                <a
                  href="#work-list"
                  className="work-text-link"
                >

                  <span>
                    Explore our work
                  </span>

                  <ArrowUpRight
                    size={15}
                  />

                </a>

              </div>

            </div>


            {/* =================================================
                HERO VISUAL
            ================================================= */}

            <div className="work-hero-visual">


              <div
                className="
                  work-visual-orbit
                  work-orbit-one
                "
              />


              <div
                className="
                  work-visual-orbit
                  work-orbit-two
                "
              />


              <div className="work-visual-card">

                <span>
                  DIGITAL WORK
                </span>


                <strong>
                  Websites
                </strong>

                <strong>
                  Software
                </strong>

                <strong>
                  Experiences
                </strong>


                <div className="work-visual-dot" />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORK DIRECTORY
      ===================================================== */}

      <section
        className="work-directory"
        id="work-list"
      >

        <div className="container">


          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div className="work-section-heading">

            <div>

              <span className="work-directory-eyebrow">
                Explore our work
              </span>


              <h2>

                Built for different
                business needs.

              </h2>

            </div>


            <p>

              Browse our projects by
              industry and discover the
              type of digital solutions
              we create.

            </p>

          </div>


          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="work-filters">

            {industries.map(
              (industry) => (

                <button
                  key={industry}
                  type="button"
                  className={
                    filter === industry
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setFilter(industry)
                  }
                >

                  {industry}

                </button>

              )
            )}

          </div>


          {/* =================================================
              RESULTS META
          ================================================= */}

          <div className="work-results-meta">

            <span>

              {filteredProjects.length}

              {" "}

              {
                filteredProjects.length === 1
                  ? "project"
                  : "projects"
              }

            </span>


            <span className="work-results-line" />


            <span>
              {filter}
            </span>

          </div>


          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <div className="work-grid">

            {filteredProjects.map(
              (project, index) => (

                <ProjectCard
                  key={
                    project.projectSlug
                  }
                  project={project}
                  index={index}
                />

              )
            )}

          </div>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredProjects.length === 0 && (

            <div className="work-empty-state">

              <div className="work-empty-icon">
                <Sparkles size={20} />
              </div>

              <h3>
                No projects found
              </h3>

              <p>
                We don't have any projects
                listed under this industry yet.
              </p>

              <button
                type="button"
                onClick={() =>
                  setFilter("All")
                }
              >
                View all projects
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <FinalCTA />

    </main>

  );
}


export default Work;