
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { footerData } from "../../../data/site/footer";

import "./Footer.css";


const socialIcons = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  YouTube: FaYoutube,
};


function Footer() {
  const {
    brand,
    socialLinks,
    companyLinks,
    serviceLinks,
    industryLinks,
    contact,
    cta,
    bottomLinks,
    copyright,
  } = footerData;


  return (
    <footer className="site-footer">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div
        className="footer-bg-orb footer-bg-orb-one"
        aria-hidden="true"
      />

      <div
        className="footer-bg-orb footer-bg-orb-two"
        aria-hidden="true"
      />

      <div
        className="footer-bg-grid"
        aria-hidden="true"
      />


      <div className="container footer-container">

        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="footer-main">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="footer-brand footer-reveal">

            <Link
              to="/"
              className="footer-logo"
              aria-label={brand.homeLabel}
            >

              <img
                className="footer-logo-image"
                src={brand.logo}
                alt={brand.logoAlt}
              />

            </Link>


            <p className="footer-description">
              {brand.description}
            </p>


            {/* SOCIALS */}

            <div className="footer-socials">

              {socialLinks.map((social) => {

                const Icon = socialIcons[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="footer-social"
                  >

                    {Icon && <Icon size={15} />}

                  </a>
                );

              })}

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="footer-column footer-reveal">

            <h3>
              Company
            </h3>

            <nav>

              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="footer-column footer-reveal">

            <h3>
              Services
            </h3>

            <nav>

              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>


          {/* =================================================
              INDUSTRIES
          ================================================= */}

          <div className="footer-column footer-reveal">

            <h3>
              Industries
            </h3>

            <nav>

              {industryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}

            </nav>

          </div>

        </div>


        {/* =================================================
            CONTACT STRIP
        ================================================= */}

        <div className="footer-contact footer-reveal">


          {/* EMAIL */}

          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <Mail size={16} />
            </div>

            <div className="footer-contact-content">

              <span>
                {contact.email.label}
              </span>

              <a href={contact.email.href}>
                {contact.email.value}
              </a>

            </div>

          </div>


          {/* PHONE */}

          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <Phone size={16} />
            </div>

            <div className="footer-contact-content">

              <span>
                {contact.phone.label}
              </span>

              <a href={contact.phone.href}>
                {contact.phone.value}
              </a>

            </div>

          </div>


          {/* LOCATION */}

          <div className="footer-contact-item">

            <div className="footer-contact-icon">
              <MapPin size={16} />
            </div>

            <div className="footer-contact-content">

              <span>
                {contact.location.label}
              </span>

              <p>
                {contact.location.value}
              </p>

            </div>

          </div>


          {/* CTA */}

          <Link
            to={cta.path}
            className="footer-talk-button"
          >

            <span>
              {cta.label}
            </span>

            <ArrowUpRight size={16} />

          </Link>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom footer-reveal">

          <p>
            © {new Date().getFullYear()}{" "}
            {copyright.companyName}.{" "}
            {copyright.text}
          </p>


          <div className="footer-bottom-links">

            {bottomLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}


export default Footer;

