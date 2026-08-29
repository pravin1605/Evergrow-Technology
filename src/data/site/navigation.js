const navigation = {
  main: [
    {
      label: "Home",
      path: "/",
    },

    {
      label: "Services",
      path: "/services",
      dropdown: [
        {
          label: "Web Development",
          path: "/services/web-development",
        },

        {
          label: "Digital Marketing",
          path: "/services/digital-marketing",
        },

        {
          label: "Mobile Apps",
          path: "/services/mobile-apps",
        },

        {
          label: "Custom Software",
          path: "/services/custom-software",
        },

        {
          label: "UI/UX",
          path: "/services/uiux",
        },

        {
          label: "E-Commerce",
          path: "/services/ecommerce",
        },

        {
          label: "AI Automation",
          path: "/services/ai-automation",
        },
      ],
    },

    {
      label: "Industries",
      path: "/industries",
      dropdown: [
        {
          label: "Gym & Fitness",
          path: "/industries/gym-fitness",
        },

        {
          label: "Healthcare",
          path: "/industries/healthcare",
        },

        {
          label: "Education",
          path: "/industries/education",
        },

        {
          label: "Housing Society",
          path: "/industries/housing-society",
        },

        {
          label: "Real Estate",
          path: "/industries/real-estate",
        },

        {
          label: "Restaurant",
          path: "/industries/restaurants",
        },

        {
          label: "Other Business",
          path: "/industries/other-business",
        },
      ],
    },

    // {
    //   label: "Products",
    //   path: "/products",
    //   dropdown: [
    //     {
    //       label: "SocietyHub",
    //       path: "/products/societyhub",
    //     },

    //     {
    //       label: "Gym Management",
    //       path: "/products/gym-management",
    //     },

    //     {
    //       label: "Education Platform",
    //       path: "/products/education-platform",
    //     },
    //   ],
    // },

    {
      label: "Work",
      path: "/work",
    },

    {
      label: "About",
      path: "/about",
    },
  ],

  cta: {
    label: "Let's Talk",
    path: "/contact",
  },
};

export default navigation;