import {
  ArrowUpRight,
  ExternalLink,
  Monitor,
} from "lucide-react";

import { Link } from "react-router-dom";

import { allProjects } from "../../../data/projects";

import "./LiveWebsites.css";


function LiveWebsites() {

  const liveProjects = allProjects
    .filter(
      (project) =>
        project.status === "Live" &&
        project.liveUrl &&
        project.liveUrl !== "#"
    )
    .slice(0, 4);


  return (
    <section className="live-websites-section">

      <div className="container">


        {/* HEADER */}

        <div className="live-websites-heading">

          <div>

            <span className="eyebrow">
              Live experiences
            </span>


            <h2>
              Don't just take
              <br />

              <span className="text-gradient">
                our word for it.
              </span>
            </h2>

          </div>


          <div className="live-websites-intro">

            <p>
              Explore some of our deployed
              website experiences and see how
              our work performs in the real world.
            </p>


            <div className="live-websites-note">

              <Monitor size={15} />

              Open the live website and
              explore it yourself.

            </div>

          </div>

        </div>



        {/* LIVE PROJECTS */}

        {liveProjects.length > 0 ? (

          <div className="live-websites-grid">

            {liveProjects.map((project) => (

              <div
                className="live-website-card"
                key={project.projectSlug}
              >


                {/* PREVIEW */}

                <div className="live-website-preview">

                  <img
                    src={
                      project.image ||
                      project.coverImage
                    }
                    alt={project.title}
                    loading="lazy"
                  />


                  <div className="live-website-overlay">

                    <span className="live-website-badge">
                      Live Website
                    </span>


                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-website-open"
                    >

                      <ExternalLink size={17} />

                    </a>

                  </div>

                </div>



                {/* CONTENT */}

                <div className="live-website-content">

                  <div>

                    <span className="live-website-category">
                      {project.industry}
                    </span>


                    <h3>
                      {project.title}
                    </h3>


                    <p>
                      {project.description}
                    </p>

                  </div>


                  <div className="live-website-actions">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-website-button"
                    >

                      Open Live Website

                      <ExternalLink size={15} />

                    </a>


                    <Link
                      to={`/work/${project.projectSlug}`}
                      className="live-website-details"
                    >

                      Project details

                      <ArrowUpRight size={15} />

                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="live-websites-empty">

            <Monitor size={28} />

            <h3>
              Live projects are coming soon.
            </h3>

            <p>
              We're currently preparing our
              live project showcase.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}


export default LiveWebsites;