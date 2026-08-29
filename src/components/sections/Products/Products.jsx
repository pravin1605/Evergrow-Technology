import { ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

import ProductCard from "../../cards/ProductCard/ProductCard";

import { products } from "../../../data/products";

import "./Products.css";

function Products() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 3);

  return (
    <section className="products-section">

      <div className="container">

        {/* Header */}

        <div className="products-heading">

          <div>

            <span className="eyebrow">
              Our products
            </span>

            <h2>
              Technology we
              <br />

              <span className="text-gradient">
                are building.
              </span>
            </h2>

          </div>

          <div className="products-heading-right">

            <p>
              Alongside client projects, we build
              reusable digital products designed to
              solve real business problems.
            </p>

            <Link
              to="/products"
              className="products-view-all"
            >
              Explore products

              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

        {/* Products */}

        {featuredProducts.length > 0 ? (

          <div className="products-grid">

            {featuredProducts.map((product) => (

              <ProductCard
                key={product.slug}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="products-empty">

            <h3>
              Products are coming soon.
            </h3>

            <p>
              We're currently building our product
              portfolio.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Products;