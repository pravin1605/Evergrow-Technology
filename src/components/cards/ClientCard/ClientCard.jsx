
import "./ClientCard.css";

const ClientCard = ({ client }) => {
  const {
    name,
    role,
    company,
    industry,
    location,
    image,
    testimonial,
  } = client;

  return (
    <article className="client-card">

      <div className="client-image-wrapper">

        {image ? (
          <img
            src={image}
            alt={name}
            className="client-image"
            loading="lazy"
          />
        ) : (
          <div
            className="client-avatar"
            aria-hidden="true"
          >
            {name?.charAt(0)}
          </div>
        )}

        <div className="client-identity">
          <h3>{name}</h3>
          <p className="client-role">{role}</p>
        </div>

      </div>


      <div className="client-meta">

        <span className="client-industry">
          {industry}
        </span>

        <span className="client-location">
          {location}
        </span>

      </div>


      <h4 className="client-company">
        {company}
      </h4>


      {testimonial && (
        <div className="client-testimonial-status">
          Client Experience Available
        </div>
      )}

    </article>
  );
};

export default ClientCard;