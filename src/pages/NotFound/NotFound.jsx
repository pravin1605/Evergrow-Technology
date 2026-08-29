import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">

      <section className="not-found-section">

        <div className="container">

          <div className="not-found-content">

            {/* Error Code */}

            <span className="not-found-code">
              404
            </span>


            {/* Eyebrow */}

            <span className="eyebrow">
              Page not found
            </span>


            {/* Heading */}

            <h1>
              We couldn't find
              <br />
              that page.
            </h1>


            {/* Description */}

            <p>
              The page you're looking for may have been
              moved, removed or doesn't exist anymore.
            </p>


            {/* Actions */}

            <div className="not-found-actions">

              <Link
                to="/"
                className="not-found-button primary"
              >

                <ArrowLeft size={17} />

                Back Home

              </Link>


              <Link
                to="/work"
                className="not-found-button"
              >

                Explore Our Work

                <ArrowUpRight size={17} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default NotFound;