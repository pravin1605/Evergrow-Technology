import {
  ArrowUpRight,
  ExternalLink,
  Presentation,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./ProductTemplate.css";


function ProductTemplate({ product }) {

  if (!product) {

    return (
      <main className="product-not-found">

        <div className="container">

          <span className="eyebrow">
            Products
          </span>

          <h1>
            Product not found
          </h1>

          <p>
            The product you are looking for
            does not exist.
          </p>

          <Link
            to="/products"
            className="product-button primary"
          >
            Back to products

            <ArrowUpRight size={17} />
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="product-template">


      {/* =================================
          HERO
      ================================= */}

      <section className="product-hero">

        <div className="container">

          <span className="eyebrow">
            {product.category}
          </span>


          <h1>
            {product.name}
          </h1>


          <p>
            {product.description}
          </p>


          <div className="product-hero-actions">

            {product.demoUrl &&
              product.demoUrl !== "#" && (

                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button primary"
                >

                  Explore demo

                  <ExternalLink size={17} />

                </a>

              )}


            <Link
              to="/contact"
              className="product-button"
            >

              Request this product

              <ArrowUpRight size={17} />

            </Link>

          </div>

        </div>

      </section>



      {/* =================================
          COVER
      ================================= */}

      {product.coverImage && (

        <section className="product-cover">

          <div className="container">

            <img
              src={product.coverImage}
              alt={product.name}
            />

          </div>

        </section>

      )}



      {/* =================================
          INTRODUCTION
      ================================= */}

      {product.introduction && (

        <section className="product-introduction">

          <div className="container">

            <div className="product-two-column">

              <span className="eyebrow">
                The platform
              </span>


              <div>

                <h2>
                  {product.introduction.title}
                </h2>


                <p>
                  {product.introduction.description}
                </p>

              </div>

            </div>

          </div>

        </section>

      )}



      {/* =================================
          TARGET AUDIENCE
      ================================= */}

      {product.targetAudience && (

        <section className="product-audience">

          <div className="container">

            <span className="eyebrow">
              Built for
            </span>


            <h2>
              {product.targetAudience}
            </h2>

          </div>

        </section>

      )}



      {/* =================================
          FEATURES
      ================================= */}

      {product.features?.length > 0 && (

        <section className="product-features">

          <div className="container">

            <div className="product-section-heading">

              <span className="eyebrow">
                Features
              </span>

              <h2>
                Everything you need.
              </h2>

            </div>


            <div className="product-feature-grid">

              {product.features.map(
                (feature, index) => (

                  <div
                    key={index}
                    className="product-feature"
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <h3>
                      {feature.title || feature}
                    </h3>


                    {feature.description && (

                      <p>
                        {feature.description}
                      </p>

                    )}

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =================================
          SCREENSHOTS
      ================================= */}

      {product.gallery?.length > 0 && (

        <section className="product-gallery">

          <div className="container">

            <div className="product-section-heading">

              <span className="eyebrow">
                Product preview
              </span>

              <h2>
                See the platform.
              </h2>

            </div>


            <div className="product-gallery-grid">

              {product.gallery.map(
                (image, index) => (

                  <figure key={index}>

                    <img
                      src={image.src || image}
                      alt={
                        image.alt ||
                        `${product.name} screenshot`
                      }
                      loading="lazy"
                    />

                  </figure>

                )
              )}

            </div>

          </div>

        </section>

      )}



      {/* =================================
          TECHNOLOGY
      ================================= */}

      {product.technologies?.length > 0 && (

        <section className="product-technology">

          <div className="container">

            <div className="product-two-column">

              <span className="eyebrow">
                Technology
              </span>


              <div>

                <h2>
                  Built for reliability
                  and scalability.
                </h2>


                <div className="product-tech-list">

                  {product.technologies.map(
                    (technology, index) => (

                      <span key={index}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

      )}



      {/* =================================
          PRESENTATION
      ================================= */}

      {product.presentationUrl && (

        <section className="product-presentation">

          <div className="container">

            <div className="product-presentation-box">

              <div className="product-presentation-content">

                <span className="eyebrow">
                  Product presentation
                </span>


                <h2>
                  Want to understand
                  the product better?
                </h2>


                <p>
                  Explore the product presentation
                  to understand the platform,
                  features, use cases and business
                  value.
                </p>

              </div>


              <a
                href={product.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-button primary"
              >

                <Presentation size={17} />

                View Presentation

                <ExternalLink size={16} />

              </a>

            </div>

          </div>

        </section>

      )}



      {/* =================================
          CTA
      ================================= */}

      <section className="product-final-cta">

        <div className="container">

          <span className="eyebrow">
            Need something similar?
          </span>


          <h2>
            Let's build a solution
            for your business.
          </h2>


          <Link
            to="/contact"
            className="product-button primary"
          >

            Start a conversation

            <ArrowUpRight size={17} />

          </Link>

        </div>

      </section>


    </main>
  );
}


export default ProductTemplate;