import "./ClientLogos.css";

import clients from "../../../data/clients/clients";

import ClientCard
  from "../../cards/ClientCard/ClientCard";

const ClientLogos = () => {

  const featuredClients =
    clients.filter((client) => client.featured);

  return (
    <section
      className="clients-section"
      id="clients"
    >

      <div className="clients-container">

        {/* Header */}
        <div className="clients-header">

          <span className="clients-eyebrow">
            CLIENTS & PARTNERS
          </span>

          <h2>
            Businesses that
            <span> trust digital.</span>
          </h2>

          <p>
            We work with businesses across different
            industries to create websites, software,
            marketing systems and digital experiences.
          </p>

        </div>

        {/* Clients */}
        <div className="clients-grid">

          {featuredClients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ClientLogos;