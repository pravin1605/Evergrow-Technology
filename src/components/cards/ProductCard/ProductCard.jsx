import {
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "./ProductCard.css";


function ProductCard({
  product,
  index = 0,
}) {

  if (!product) {
    return null;
  }


  return (

    <Link
      to={`/products/${product.slug}`}
      className="product-card"
      style={{
        "--product-card-delay": `${index * 80}ms`,
      }}
    >


      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="product-card-image">

        {product.thumbnail ? (

          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
          />

        ) : (

          <div className="product-card-placeholder">

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

          </div>

        )}


        <div className="product-card-overlay" />


        {product.status && (

          <span className="product-status">
            {product.status}
          </span>

        )}


        <div className="product-card-arrow">

          <ArrowUpRight size={18} />

        </div>

      </div>



      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="product-card-content">


        <div className="product-card-meta">

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>
            {product.category || "Product"}
          </span>

        </div>



        {/* MAJOR PRODUCT NAME */}

        <h3>
          {product.name}
        </h3>



        {product.shortDescription && (

          <p>
            {product.shortDescription}
          </p>

        )}



        <div className="product-card-footer">

          <span>
            {product.targetAudience || "Business solution"}
          </span>


          <span className="product-card-link">

            View product

            <ArrowUpRight size={15} />

          </span>

        </div>

      </div>

    </Link>

  );

}


export default ProductCard;