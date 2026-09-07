import "./Testimonials.css";
import clients from "../../../data/clients/clients";
import TestimonialCard from "../../cards/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const testimonials = clients.filter(
    (client) => client.testimonial
  );

  // Duplicate for seamless infinite sliding
  const sliderTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            CLIENT EXPERIENCES
          </span>

          <h2>
            What our clients
            <span> say.</span>
          </h2>

          <p>
            Real experiences from businesses we've helped
            build, improve and grow digitally.
          </p>
        </div>

      </div>

      <div className="testimonials-slider-wrapper">

        <div className="testimonials-slider">

          {sliderTestimonials.map((client, index) => (
            <TestimonialCard
              key={`${client.id}-${index}`}
              client={client}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;