import { useState } from "react";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  Clock3,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import company from "../../data/site/company";

import "./Contact.css";


/* =====================================================
   CONTACT PAGE OFFICE ADDRESS

   Kept here intentionally so company.js remains
   untouched because it is used elsewhere.
===================================================== */

const officeAddress =
  "B-34, Agroli Village, CBD Belapur, Navi Mumbai, Maharashtra 400614";

const mapAddress = encodeURIComponent(officeAddress);

const googleMapsUrl =
  `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;


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


  /* =====================================================
     HANDLE INPUT
  ===================================================== */

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  /* =====================================================
     HANDLE FORM SUBMIT
  ===================================================== */

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


      {/* =================================================
          HERO
      ================================================= */}

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


          {/* HERO QUICK STATUS */}

          <div className="contact-hero-status">

            <span className="contact-status-dot" />

            <span>
              Let's start a conversation
            </span>

          </div>

        </div>

      </section>



      {/* =================================================
          MAIN CONTACT SECTION
      ================================================= */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">


            {/* =================================================
                LEFT — FORM
            ================================================= */}

            <div className="contact-form-wrapper">


              {/* FORM HEADER */}

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



              {/* FORM */}

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
                      autoComplete="name"
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
                      autoComplete="organization"
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
                      autoComplete="email"
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
                      autoComplete="tel"
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



                {/* SUBMITTED MESSAGE */}

                {submitted && (

                  <div className="contact-form-note">

                    <span className="contact-note-check">
                      ✓
                    </span>

                    <span>
                      Your enquiry is being prepared
                      in your email application.
                    </span>

                  </div>

                )}

              </form>

            </div>



            {/* =================================================
                RIGHT — CONTACT INFORMATION
            ================================================= */}

            <aside className="contact-information">


              {/* HEADER */}

              <div className="contact-info-header">

                <span className="eyebrow">
                  Get in touch
                </span>


                <h2>
                  Let's talk about
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


                <ArrowUpRight
                  className="contact-info-arrow"
                  size={17}
                />

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


                <ArrowUpRight
                  className="contact-info-arrow"
                  size={17}
                />

              </a>



              {/* LOCATION */}

              <a
                href={googleMapsUrl}
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


                <ArrowUpRight
                  className="contact-info-arrow"
                  size={17}
                />

              </a>



              {/* =================================================
                  OFFICE HOURS
              ================================================= */}

              <div className="contact-hours">

                <div className="contact-hours-icon">

                  <Clock3 size={18} />

                </div>


                <div>

                  <small>
                    Office Hours
                  </small>

                  <strong>
                    Monday – Saturday
                  </strong>

                  <span>
                    9:00 AM – 7:00 PM
                  </span>

                </div>

              </div>



              {/* =================================================
                  MAP
              ================================================= */}

              <div className="contact-map-wrapper">


                <div className="contact-map-header">

                  <div>

                    <span className="eyebrow">
                      Find us
                    </span>

                    <h3>
                      Navi Mumbai Office
                    </h3>

                  </div>


                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-map-link"
                    aria-label="Open office location in Google Maps"
                  >

                    Open Map

                    <ArrowUpRight size={15} />

                  </a>

                </div>


                <div className="contact-map">

                  <iframe
                    title="EverGrow Technology office location"
                    src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />

                </div>

              </div>



              {/* =================================================
                  QUICK CONTACT
              ================================================= */}

              <div className="contact-quick-actions">

                <span className="eyebrow">
                  Quick contact
                </span>


                <div className="contact-quick-grid">


                  {/* EMAIL */}

                  <a
                    href={`mailto:${company.contact.email}`}
                    className="contact-quick-action"
                  >

                    <Mail size={17} />

                    <span>
                      Email
                    </span>

                  </a>



                  {/* CALL */}

                  <a
                    href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                    className="contact-quick-action"
                  >

                    <Phone size={17} />

                    <span>
                      Call
                    </span>

                  </a>



                  {/* WHATSAPP */}

                  <a
                    href={`https://wa.me/${company.contact.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-quick-action"
                  >

                    <MessageCircle size={17} />

                    <span>
                      WhatsApp
                    </span>

                  </a>

                </div>

              </div>



              {/* SOCIAL */}

              <div className="contact-social">

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

              </div>



              {/* SIDE NOTE */}

              

            </aside>

          </div>

        </div>

      </section>



      {/* =================================================
          FINAL CTA
      ================================================= */}

      

    </main>
  );
}


export default Contact;