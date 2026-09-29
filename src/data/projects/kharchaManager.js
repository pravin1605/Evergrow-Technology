const kharchaManager = {
  /*
  |--------------------------------------------------------------------------
  | BASIC PROJECT INFORMATION
  |--------------------------------------------------------------------------
  */

  id: "kharcha-manager",

  projectSlug: "kharcha-manager",

  title: "Kharcha Manager",

  category: "Finance & Productivity",

  type: "Android Application",

  status: "Demo Available",

  tagline:
    "A modern Android expense management application designed to help users track transactions, manage budgets, analyze spending, and organize their personal finances.",

  description:
    "Kharcha Manager is a complete Android-based expense management solution built to simplify everyday financial tracking. The application allows users to manage income and expenses, organize transactions by category, create budgets, analyze spending patterns, manage recurring transactions, and maintain financial records in one centralized application.",

  /*
  |--------------------------------------------------------------------------
  | PROJECT IMAGE
  |--------------------------------------------------------------------------
  */

  image:
    "https://play-lh.googleusercontent.com/9v1B31rrPepPvUFsoz-5XJpuF-bWqrZN1Ca96h4SHaeopbSZ309RPQSStNzOdlsmavXjzY7gJu9zdCbGNQAmQw",

  /*
  |--------------------------------------------------------------------------
  | TECHNOLOGIES
  |--------------------------------------------------------------------------
  */

  technologies: [
    "Android",
    "Java",
    "Jetpack Compose",
    "Room Database",
    "DataStore",
    "WorkManager",
    "Biometric Authentication"
  ],

  /*
  |--------------------------------------------------------------------------
  | PROJECT HIGHLIGHTS
  |--------------------------------------------------------------------------
  */

  highlights: [
    "Personal expense management",
    "Income and expense tracking",
    "Transaction management",
    "Monthly and category budgets",
    "Financial analytics",
    "Recurring transactions",
    "Backup and restore",
    "CSV transaction export",
    "Biometric application unlock",
    "Light and dark theme support"
  ],

  /*
  |--------------------------------------------------------------------------
  | WHAT THE APPLICATION PROVIDES
  |--------------------------------------------------------------------------
  */

  provides: [
    {
      title: "Transaction Management",

      description:
        "Create, edit, search, filter, and manage financial transactions with important information such as date, time, transaction type, category, amount, payment method, and notes."
    },

    {
      title: "Income & Expense Tracking",

      description:
        "Maintain income and expense records in an organized structure so users can understand their financial activity and monitor where their money is going."
    },

    {
      title: "Expense Categories",

      description:
        "Organize expenses into meaningful categories to make transaction management easier and provide better category-wise financial analysis."
    },

    {
      title: "Monthly Budget",

      description:
        "Set monthly spending limits and monitor financial activity against planned budgets to improve awareness of monthly expenses."
    },

    {
      title: "Category Budgets",

      description:
        "Create budgets for individual expense categories and monitor category-level spending throughout the month."
    },

    {
      title: "Financial Analytics",

      description:
        "View financial information through monthly and category-based analytics, including spending analysis and income-versus-expense information."
    },

    {
      title: "Monthly Summary",

      description:
        "Understand monthly financial activity through summarized information such as total income, expenses, average daily expense, and major spending areas."
    },

    {
      title: "Recurring Transactions",

      description:
        "Support recurring financial transactions to make regular income and expense management more convenient."
    },

    {
      title: "Backup & Restore",

      description:
        "Create application data backups in JSON format and restore saved information when required."
    },

    {
      title: "CSV Export",

      description:
        "Export transaction records in CSV format for external use, analysis, or record keeping."
    },

    {
      title: "Biometric Security",

      description:
        "Provides biometric unlock support to add an additional layer of protection when accessing the application."
    },

    {
      title: "Light & Dark Theme",

      description:
        "Supports light and dark application themes so users can choose a visual experience that suits their preference."
    }
  ],

  /*
  |--------------------------------------------------------------------------
  | APPLICATION MODULES
  |--------------------------------------------------------------------------
  */

  modules: [
    {
      title: "Dashboard",
      description:
        "Central overview of financial activity and important expense information."
    },

    {
      title: "Transactions",
      description:
        "Complete transaction management with search, filtering, editing, and detailed records."
    },

    {
      title: "Categories",
      description:
        "Organize expenses and manage category-level financial information."
    },

    {
      title: "Budget",
      description:
        "Manage monthly and category-specific spending budgets."
    },

    {
      title: "Analytics",
      description:
        "Review spending patterns, monthly summaries, category analysis, and income versus expenses."
    },

    {
      title: "Recurring Transactions",
      description:
        "Manage transactions that occur regularly."
    },

    {
      title: "Backup & Restore",
      description:
        "Backup application information and restore saved financial records."
    },

    {
      title: "Settings",
      description:
        "Manage application preferences, security options, themes, and data-related settings."
    }
  ],

  /*
  |--------------------------------------------------------------------------
  | APK ACCESS / CONTACT RESTRICTION
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  | No APK URL is exposed here.
  |
  | The website should display the request/contact section and
  | collect visitor information before APK access is provided.
  |
  */

  apkAccess: {
    enabled: true,

    restricted: true,

    accessType: "contact-request",

    title: "Get the Kharcha Manager Demo APK",

    subtitle:
      "Interested in exploring Kharcha Manager on Android?",

    description:
      "Request the Kharcha Manager demo APK from EverGrow Technology. Please provide your basic contact details so our team can understand your requirement and provide access to the application.",

    notice:
      "APK access is provided only after submitting the request form. The APK is not available as a public direct download from this website.",

    buttonText: "Request Demo APK",

    secondaryButtonText: "Contact EverGrow",

    /*
    |--------------------------------------------------------------------------
    | INFORMATION TO COLLECT
    |--------------------------------------------------------------------------
    */

    form: {
      enabled: true,

      fields: [
        {
          name: "fullName",
          label: "Full Name",
          type: "text",
          required: true,
          placeholder: "Enter your full name"
        },

        {
          name: "email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "Enter your email address"
        },

        {
          name: "phone",
          label: "Mobile Number",
          type: "tel",
          required: true,
          placeholder: "Enter your mobile number"
        },

        {
          name: "company",
          label: "Company / Organization",
          type: "text",
          required: false,
          placeholder: "Enter company or organization name"
        },

        {
          name: "message",
          label: "Requirement / Message",
          type: "textarea",
          required: false,
          placeholder:
            "Tell us why you are interested in the Kharcha Manager application"
        }
      ],

      submitButtonText: "Request APK Access",

      successMessage:
        "Your request has been submitted successfully. Our team will contact you regarding APK access.",

      privacyMessage:
        "Your contact information will be used only for responding to your demo APK request and related communication."
    },

    /*
    |--------------------------------------------------------------------------
    | CONTACT DESTINATION
    |--------------------------------------------------------------------------
    */

    contact: {
      enabled: true,

      title: "Want to Explore Kharcha Manager?",

      description:
        "Contact EverGrow Technology to request the demo APK, discuss customization requirements, or explore how a similar Android application can be developed for your business.",

      contactUrl:
        "/contact?product=kharcha-manager",

      emailSubject:
        "Kharcha Manager Demo APK Request",

      whatsappMessage:
        "Hello EverGrow Technology, I am interested in getting the Kharcha Manager demo APK. I would like to know more about the application and demo access."
    }
  },

  /*
  |--------------------------------------------------------------------------
  | PROJECT / BUSINESS INFORMATION
  |--------------------------------------------------------------------------
  */

  businessInfo: {
    developmentType: "Custom Android Application",

    suitableFor: [
      "Personal finance management",
      "Expense tracking solutions",
      "Budget management applications",
      "Financial record management",
      "Custom business applications"
    ],

    customizationAvailable: true,

    customizationDescription:
      "The application concept can be customized according to business requirements, including application branding, workflows, modules, dashboards, reports, and additional functionality."
  },

  /*
  |--------------------------------------------------------------------------
  | PROJECT DOCUMENTATION
  |--------------------------------------------------------------------------
  |
  | Keep empty until a public documentation resource is available.
  |
  */

  documentation: null,

  /*
  |--------------------------------------------------------------------------
  | LIVE URL
  |--------------------------------------------------------------------------
  |
  | There is intentionally NO liveUrl because this is a native Android APK.
  |
  */

  liveUrl: null,

  /*
  |--------------------------------------------------------------------------
  | CASE STUDY
  |--------------------------------------------------------------------------
  */

  caseStudyUrl:
    "/work/kharcha-manager"
};

export default kharchaManager;