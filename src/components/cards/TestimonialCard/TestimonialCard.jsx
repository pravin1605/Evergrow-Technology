import "./TestimonialCard.css";

const TestimonialCard = ({ client }) => {
  const {
    name,
    role,
    company,
    industry,
    location,
    image,
    testimonial,
  } = client;

  const rating = testimonial?.rating ?? 5;
  const content = testimonial?.content ?? "";

  return (
    <article className="testimonial-card">

      {/* LEFT PROFILE */}
      <div className="testimonial-profile">

        {image ? (
          <img
            src={image}
            alt={name}
            className="testimonial-image"
            loading="lazy"
          />
        ) : (
          <div className="testimonial-avatar">
            {name?.charAt(0)}
          </div>
        )}

        <div className="testimonial-person">

          <h3>{name}</h3>

          <p>{role}</p>

          <span>{company}</span>

        </div>

      </div>


      {/* MIDDLE CONTENT */}
      <div className="testimonial-main">

        <div className="testimonial-rating">
          {"★".repeat(rating)}
        </div>

        <p className="testimonial-content">
          "{content}"
        </p>

        <div className="testimonial-meta">

          <span>{industry}</span>

          <span className="testimonial-meta-dot">
            •
          </span>

          <span>{location}</span>

        </div>

      </div>


      {/* RIGHT QUOTE */}
      <div
        className="testimonial-quote"
        aria-hidden="true"
      >
        "
      </div>

    </article>
  );
};

export default TestimonialCard;