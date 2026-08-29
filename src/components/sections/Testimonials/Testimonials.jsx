import "./Testimonials.css";

import testimonials from "../../../data/testimonials/testimonials";

import TestimonialCard
  from "../../cards/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  /*
    Duplicate the cards so the horizontal train can
    continuously loop without a visible empty space.
  */
  const sliderTestimonials = [
    ...testimonials,
    ...testimonials
  ];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="testimonials-container">

        <div className="testimonials-header">

          <span className="testimonials-eyebrow">
            CLIENT EXPERIENCE
          </span>

          <h2 id="testimonials-title">
            Built around
            <span> real business needs.</span>
          </h2>

          <p>
            We work closely with businesses to understand
            their challenges first, then create practical
            digital solutions that make everyday work easier.
          </p>

        </div>

      </div>


      {/* =========================================
          TESTIMONIAL TRAIN
      ========================================= */}

      <div className="testimonials-slider-wrapper">

        <div className="testimonials-slider">

          {sliderTestimonials.map((testimonial, index) => (

            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />

          ))}

        </div>

      </div>


      {/* =========================================
          BOTTOM INFO
      ========================================= */}

      <div className="testimonials-container">

        <div className="testimonials-bottom">

          <span className="testimonials-bottom-line" />

          <span>
            Businesses across multiple industries
          </span>

          <span className="testimonials-bottom-line" />

        </div>

      </div>

    </section>
  );
};

export default Testimonials;