import { useState } from "react";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import company from "../../data/site/company";

import "./Contact.css";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    requirement: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  // ==========================================
  // COMPANY LOCATION
  // ==========================================

  const officeAddress =
    "B-34, Agroli Village, CBD Belapur, Navi Mumbai, Maharashtra 400614";

  const mapAddress = encodeURIComponent(officeAddress);


  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(`
Name: ${formData.name}

Company: ${formData.company}

Email: ${formData.email}

Phone: ${formData.phone}

Business Type: ${formData.businessType}

What do you need:
${formData.requirement}

Message:
${formData.message}
    `);

    window.location.href =
      `mailto:${company.contact.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };


  return (
    <main className="contact-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact-hero">

        <div className="container">

          <span className="eyebrow">
            Contact EverGrow
          </span>

          <h1>
            Let's build
            <br />

            <span className="text-gradient">
              something useful.
            </span>
          </h1>

          <p>
            Tell us about your business, idea or
            digital challenge. We'll help you
            identify the right solution.
          </p>

        </div>

      </section>


      {/* =========================================
          MAIN CONTACT SECTION
      ========================================= */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">


            {/* =====================================
                FORM
            ===================================== */}

            <div className="contact-form-wrapper">

              <div className="contact-section-heading">

                <span className="eyebrow">
                  Start a conversation
                </span>

                <h2>
                  Tell us what
                  <br />
                  you need.
                </h2>

                <p>
                  Share a few details about your
                  requirement and we'll get back
                  to you.
                </p>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME + COMPANY */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="name">
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                {/* EMAIL + PHONE */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                {/* BUSINESS TYPE */}

                <div className="contact-field">

                  <label htmlFor="businessType">
                    Business Type
                  </label>

                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select your business type
                    </option>

                    <option value="Gym & Fitness">
                      Gym & Fitness
                    </option>

                    <option value="Healthcare">
                      Healthcare
                    </option>

                    <option value="Education">
                      Education
                    </option>

                    <option value="Kindergarten & Preschool">
                      Kindergarten & Preschool
                    </option>

                    <option value="Housing Society">
                      Housing Society
                    </option>

                    <option value="Real Estate">
                      Real Estate
                    </option>

                    <option value="Restaurant">
                      Restaurant
                    </option>

                    <option value="Other Business">
                      Other Business
                    </option>

                  </select>

                </div>


                {/* REQUIREMENT */}

                <div className="contact-field">

                  <label htmlFor="requirement">
                    What do you need?
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Custom Software">
                      Custom Software
                    </option>

                    <option value="Mobile Application">
                      Mobile Application
                    </option>

                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="Google Ads">
                      Google Ads
                    </option>

                    <option value="Meta Ads">
                      Meta Ads
                    </option>

                    <option value="Business Automation">
                      Business Automation
                    </option>

                    <option value="Not Sure">
                      I'm not sure yet
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <div className="contact-field">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell us about your project, goals or problem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <span>
                    Send Enquiry
                  </span>

                  <Send size={17} />

                </button>


                {submitted && (

                  <p className="contact-form-note">
                    Your enquiry is being prepared in
                    your email application.
                  </p>

                )}

              </form>

            </div>


            {/* =====================================
                CONTACT INFORMATION
            ===================================== */}

            <aside className="contact-information">


              {/* HEADER */}

              <div className="contact-info-header">

                <span className="eyebrow">
                  Get in touch
                </span>

                <h2>
                  Let's talk about
                  <br />
                  your next idea.
                </h2>

                <p>
                  Whether you need a website,
                  software solution or digital
                  marketing support, we're here
                  to help.
                </p>

              </div>


              {/* EMAIL */}

              <a
                href={`mailto:${company.contact.email}`}
                className="contact-info-item"
              >

                <span className="contact-info-icon">
                  <Mail size={20} />
                </span>

                <div>

                  <small>
                    Email
                  </small>

                  <strong>
                    {company.contact.email}
                  </strong>

                </div>

              </a>


              {/* PHONE */}

              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="contact-info-item"
              >

                <span className="contact-info-icon">
                  <Phone size={20} />
                </span>

                <div>

                  <small>
                    Phone
                  </small>

                  <strong>
                    {company.contact.phone}
                  </strong>

                </div>

              </a>


              {/* LOCATION */}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                target="_blank"
                rel="noreferrer"
                className="contact-info-item contact-location-item"
              >

                <span className="contact-info-icon">
                  <MapPin size={20} />
                </span>

                <div>

                  <small>
                    Office
                  </small>

                  <strong>
                    {officeAddress}
                  </strong>

                </div>

                <ExternalLink
                  className="contact-location-arrow"
                  size={16}
                />

              </a>


              {/* =================================
                  MAP
              ================================= */}

              <div className="contact-map-wrapper">

                <div className="contact-map-header">

                  <div>

                    <span className="contact-map-label">
                      Find us
                    </span>

                    <strong>
                      Navi Mumbai Office
                    </strong>

                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-map-link"
                  >
                    Open Map
                    <ExternalLink size={14} />
                  </a>

                </div>


                <div className="contact-map">

                  <iframe
                    title="EverGrow Technology Office Location"
                    src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                </div>

              </div>


              {/* SOCIAL */}

              {/* <div className="contact-social">

                <span className="eyebrow">
                  Follow EverGrow
                </span>

                <div className="contact-social-links">

                  <a
                    href={company.contact.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>


                  <a
                    href={company.contact.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={18} />
                  </a>

                </div>

              </div> */}


              {/* QUICK MESSAGE */}

              {/* <div className="contact-side-note">

                <strong>
                  Not sure what you need?
                </strong>

                <p>
                  That's completely fine. Tell us
                  about your business and we'll help
                  you figure out the right digital
                  solution.
                </p>

              </div> */}


            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}


export default Contact;