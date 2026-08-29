import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import ProductCard
  from "../../components/cards/ProductCard/ProductCard";

import {
  products,
} from "../../data/products";

import "./Products.css";


function Products() {

  return (

    <main className="products-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="products-hero">

        <div className="container">

          <div className="products-hero-grid">


            {/* HERO CONTENT */}

            <div className="products-hero-content">

              <div className="products-eyebrow">

                <Sparkles size={15} />

                <span>
                  Products we build
                </span>

              </div>


              <h1>

                Digital products
                <span> built to grow.</span>

              </h1>


              <p>
                Ready-to-use digital products designed
                to solve real business problems, simplify
                operations and create better digital
                experiences.
              </p>


              <div className="products-hero-actions">

                <a
                  href="#products-list"
                  className="products-primary-button"
                >
                  Explore products

                  <ArrowUpRight size={17} />

                </a>


                <Link
                  to="/contact"
                  className="products-text-link"
                >
                  Build something custom

                  <ArrowUpRight size={15} />

                </Link>

              </div>

            </div>



            {/* HERO VISUAL */}

            <div className="products-hero-visual">

              <div className="products-visual-orbit products-orbit-one" />

              <div className="products-visual-orbit products-orbit-two" />


              <div className="products-visual-card">

                <span>
                  EVERGROW PRODUCTS
                </span>


                <strong>
                  Software
                </strong>

                <strong>
                  + Design
                </strong>

                <strong>
                  + Growth
                </strong>


                <div className="products-visual-dot" />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="products-intro"
        id="products-list"
      >

        <div className="container">

          <div className="products-intro-grid">


            <span className="eyebrow">
              Our products
            </span>


            <div>

              <h2>
                Software built around
                real business needs.
              </h2>


              <p>
                Explore our digital products built for
                specific industries and operational
                challenges. Each product is designed
                to be practical, scalable and easy to use.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PRODUCT DIRECTORY
      ===================================================== */}

      <section className="products-directory">

        <div className="container">


          <div className="products-section-heading">

            <div>

              <span className="eyebrow">
                Product portfolio
              </span>


              <h2>
                Solutions made
                for business.
              </h2>

            </div>


            <p>
              Discover products created to help
              businesses manage operations, improve
              customer experiences and grow digitally.
            </p>

          </div>



          <div className="products-grid">

            {products.map(
              (product, index) => (

                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />

              )
            )}

          </div>

        </div>

      </section>


{/* =====================================================
    CTA
===================================================== */}

<section className="products-cta">

  <div className="container">

    <div className="products-cta-box">

      {/* Background */}

      <div className="products-cta-grid" />

      <div className="products-cta-glow products-cta-glow-one" />
      <div className="products-cta-glow products-cta-glow-two" />

      <div className="products-cta-orb">
        <span />
      </div>

      {/* Floating Label */}

      <div className="products-cta-floating-label">

        <Sparkles size={14} />

        <span>Custom built</span>

      </div>

      {/* Content */}

      <div className="products-cta-content">

        <span className="eyebrow products-cta-eyebrow">
          Need something different?
        </span>

        <h2>
          Your business needs
          <br />

          <span className="products-cta-highlight">
            its own solution.
          </span>
        </h2>

        <p>
          Tell us what you want to build and
          we'll create a digital product around
          your business requirements.
        </p>

        <div className="products-cta-meta">

          <span className="meta-dot" />

          <span>Web Apps</span>

          <span className="meta-separator">/</span>

          <span>Software</span>

          <span className="meta-separator">/</span>

          <span>Automation</span>

        </div>

      </div>

      {/* Button */}

      <div className="products-cta-action">

        <Link
          to="/contact"
          className="products-cta-button"
        >

          <span>Start a conversation</span>

          <span className="products-cta-button-icon">

            <ArrowUpRight size={19} />

          </span>

        </Link>

      </div>

      {/* Corner Text */}

      <div className="products-cta-corner-text">
        EVERGROW TECHNOLOGY
      </div>

    </div>

  </div>

</section>
      





    </main>

  );
}


export default Products;