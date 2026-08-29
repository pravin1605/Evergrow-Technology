import "./ClientCard.css";

const ClientCard = ({ client }) => {
  const {
    name,
    logo,
    industry,
    location,
    description,
    type,
    website
  } = client;

  return (
    <article className="client-card">

      {/* Logo */}
      <div className="client-logo-wrapper">

        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="client-logo"
          />
        ) : (
          <div className="client-logo-placeholder">
            {name.charAt(0)}
          </div>
        )}

      </div>

      {/* Content */}
      <div className="client-content">

        <div className="client-meta">

          <span className="client-industry">
            {industry}
          </span>

          {type === "sample" && (
            <span className="client-type">
              Sample
            </span>
          )}

          {type === "client" && (
            <span className="client-type client-type-real">
              Client
            </span>
          )}

        </div>

        <h3>{name}</h3>

        <p className="client-location">
          {location}
        </p>

        <p className="client-description">
          {description}
        </p>

        {website && website !== "#" && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="client-link"
          >
            Visit Website
            <span>↗</span>
          </a>
        )}

      </div>

    </article>
  );
};

export default ClientCard;