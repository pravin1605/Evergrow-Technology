import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectCard from "../../cards/ProjectCard/ProjectCard";

import { projects } from "../../../data/projects";

import "./Projects.css";

function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section className="projects-section">

      <div className="container">

        {/* Header */}

        <div className="projects-heading">

          <div>

            <span className="eyebrow">
              Selected work
            </span>

            <h2>
              Ideas we've
              <br />

              <span className="text-gradient">
                brought to life.
              </span>
            </h2>

          </div>

          <div className="projects-heading-right">

            <p>
              Explore websites, software concepts and
              digital experiences we've designed and built
              across different industries.
            </p>

            <Link
              to="/work"
              className="projects-view-all"
            >
              View all work

              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

        {/* Project Grid */}

        <div className="projects-grid">

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;