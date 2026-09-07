import "./ClientLogos.css";

import clients from "../../../data/clients/clients";

import ClientCard
  from "../../cards/ClientCard/ClientCard";

const ClientLogos = () => {

  const featuredClients = clients.filter(
    (client) => client.featured
  );

  return (
    <section
      className="clients-section"
      id="clients"
    >

      <div className="clients-container">

        <div className="clients-header">

          <span className="clients-eyebrow">
            OUR CLIENTS
          </span>

          <h2>
            Businesses we
            <span> work with.</span>
          </h2>

          <p>
            We help businesses across different
            industries build better digital experiences
            and practical technology solutions.
          </p>

        </div>


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