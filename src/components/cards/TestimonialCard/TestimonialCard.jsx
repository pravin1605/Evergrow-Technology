import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {

  const {
    name,
    role,
    company,
    industry,
    location,
    image,
    rating,
    content
  } = testimonial;


  return (

    <article className="testimonial-card">

      {/* =========================================
          TOP
      ========================================= */}

      <div className="testimonial-top">

        <div className="testimonial-profile">

          {image ? (

            <img
              src={image}
              alt={`${name} - ${role}`}
              className="testimonial-image"
              loading="lazy"
            />

          ) : (

            <div
              className="testimonial-avatar"
              aria-hidden="true"
            >
              {name?.charAt(0)}
            </div>

          )}


          <div className="testimonial-person">

            <h3>
              {name}
            </h3>

            <p>
              {role}
            </p>

          </div>

        </div>


        <div
          className="testimonial-quote"
          aria-hidden="true"
        >
          "
        </div>

      </div>


      {/* =========================================
          INDUSTRY
      ========================================= */}

      <div className="testimonial-industry">

        <span className="testimonial-industry-dot" />

        <span>
          {industry}
        </span>

      </div>


      {/* =========================================
          RATING
      ========================================= */}

      <div
        className="testimonial-rating"
        aria-label={`${rating} out of 5 stars`}
      >

        {"★".repeat(rating)}

      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <p className="testimonial-content">
        {content}
      </p>


      {/* =========================================
          FOOTER
      ========================================= */}

      <div className="testimonial-footer">

        <span className="testimonial-company">
          {company}
        </span>

        <span className="testimonial-location">
          {location}
        </span>

      </div>

    </article>

  );
};

export default TestimonialCard;