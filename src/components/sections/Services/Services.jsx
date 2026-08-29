import {
  ArrowUpRight,
  Code2,
  Smartphone,
  ShoppingCart,
  Bot,
  Palette,
  Megaphone,
  Search,
  Target,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Services.css";

const serviceDomains = [
  {
    number: "01",
    title: "Technology & Software",
    description:
      "We design and build digital products that make your business easier to operate, scale and serve customers.",
    services: [
      {
        name: "Web Development",
        description:
          "Business websites, landing pages and high-performance web experiences.",
        path: "/services/web-development",
        icon: Code2,
      },
      {
        name: "Custom Software",
        description:
          "Business management systems built around your actual workflow.",
        path: "/services/custom-software",
        icon: Code2,
      },
      {
        name: "Mobile Apps",
        description:
          "Mobile applications for customers, employees and business operations.",
        path: "/services/mobile-apps",
        icon: Smartphone,
      },
      {
        name: "E-Commerce",
        description:
          "Online stores and digital shopping experiences designed to convert.",
        path: "/services/ecommerce",
        icon: ShoppingCart,
      },
      {
        name: "AI & Automation",
        description:
          "Automate repetitive work and build smarter business processes.",
        path: "/services/ai-automation",
        icon: Bot,
      },
      {
        name: "UI/UX Design",
        description:
          "Clean, intuitive interfaces that make digital products easier to use.",
        path: "/services/uiux",
        icon: Palette,
      },
    ],
  },

  {
    number: "02",
    title: "Digital Growth & Marketing",
    description:
      "We help businesses get discovered, reach the right audience and turn attention into real enquiries.",
    services: [
      {
        name: "Digital Marketing",
        description:
          "A complete digital growth strategy built around your business goals.",
        path: "/services/digital-marketing",
        icon: Megaphone,
      },
      {
        name: "Google Ads",
        description:
          "Search campaigns designed to reach people actively looking for your services.",
        path: "/services/google-ads",
        icon: Search,
      },
      {
        name: "Meta Ads",
        description:
          "Facebook and Instagram advertising focused on reach, leads and conversions.",
        path: "/services/meta-ads",
        icon: Target,
      },
      {
        name: "Instagram Marketing",
        description:
          "Content and growth strategies designed around your Instagram presence.",
        path: "/services/instagram-marketing",
        icon: FaInstagram,
      },
      {
        name: "Social Media Marketing",
        description:
          "Consistent social media strategy, content and audience engagement.",
        path: "/services/social-media-marketing",
        icon: Megaphone,
      },
      {
        name: "SEO",
        description:
          "Improve your search visibility and attract relevant organic traffic.",
        path: "/services/seo",
        icon: Search,
      },
    ],
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Header */}
        <div className="services-heading">

          <div className="services-heading-title">
            <span className="eyebrow">
              What we do
            </span>

            <h2>
              One partner.
              <br />

              <span className="text-gradient">
                Multiple capabilities.
              </span>
            </h2>
          </div>

          <div className="services-heading-description">
            <p>
              From your first website to complete
              business software and digital marketing,
              we bring technology, design and growth
              together under one roof.
            </p>

            <Link
              to="/services"
              className="services-all-link"
            >
              View all services
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* Service Domains */}
        <div className="service-domains">

          {serviceDomains.map((domain) => (

            <div
              className="service-domain"
              key={domain.number}
            >

              {/* Domain Header */}
              <div className="service-domain-header">

                <span className="service-domain-number">
                  {domain.number}
                </span>

                <div className="service-domain-info">

                  <h3>
                    {domain.title}
                  </h3>

                  <p>
                    {domain.description}
                  </p>

                </div>

              </div>

              {/* Service List */}
              <div className="services-list">

                {domain.services.map((service) => {

                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="service-row"
                    >

                      <div className="service-row-left">

                        <div className="service-icon">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h4>
                            {service.name}
                          </h4>

                          <p>
                            {service.description}
                          </p>
                        </div>

                      </div>

                      <div className="service-row-arrow">
                        <ArrowUpRight size={18} />
                      </div>

                    </Link>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;