export const portfolio = {
  meta: {
    title: "Priyanka Fatarpekar | Frontend Developer",
    description:
      "Frontend Developer with 2+ years building responsive React, Next.js, Firebase, and Supabase-backed web experiences.",
  },
  profile: {
    name: "Priyanka Fatarpekar",
    initials: "PF",
    role: "Frontend Developer",
    location: "Goa, India",
    email: "priyankasanjayfatarpekar@gmail.com",
    github: "https://github.com/PriyankaFatarpekar",
    linkedin: "https://www.linkedin.com/in/priyanka-fatarpekar-131427263/",
    resumeUrl: "https://drive.google.com/file/d/1KHY23mbNkz5lwjc5eOz79AOvS3yV8gP9/view?usp=drivesdk",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    availability: "Available for opportunities",
    tagline:
      "I turn designs into fast, accessible web experiences using React, Next.js, Firebase, and Supabase.",
    primaryCta: "View My Work",
    secondaryCta: "Download Resume",
    scrollLabel: "Scroll",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Supabase",
      "Tailwind",
      "Figma",
      "GitHub",
      "Jira",
    ],
  },
  about: {
    label: "about_me",
    heading: "Who I Am",
    body: "Frontend Developer with 2+ years of experience building responsive, production-grade web applications using React and Next.js. I work across reusable component systems, Firebase and Supabase integrations, real-time data, and polished UI delivery.",
    quote:
      "Frontend dev who cares as much about performance and accessibility as pixel-perfect design.",
    stats: [
      { value: "2", label: "Years of Experience" },
      { value: "15+", label: "Web Apps Shipped" },
      { value: "5+", label: "Firebase Integrations" },
      { value: "9.0", label: "CGPA" },
    ],
  },
  skills: {
    label: "skills",
    heading: "My Technical Toolkit",
    featured: ["React.js", "Next.js", "TypeScript", "Firebase", "Supabase"],
    categories: [
      {
        name: "Frontend",
        skills: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "Styling",
        skills: ["Tailwind CSS", "Responsive UI", "Component Systems"],
      },
      {
        name: "State & Data",
        skills: ["TanStack Query", "REST APIs", "Realtime Data"],
      },
      {
        name: "Backend & Auth",
        skills: [
          "Firebase Auth",
          "Firestore",
          "Realtime DB",
          "Supabase Auth",
          "Supabase Postgres",
        ],
      },
      {
        name: "Tooling",
        skills: ["Git", "GitHub", "Vercel", "Figma", "WordPress"],
      },
      { name: "Languages", skills: ["C", "C++", "Java", "SQL"] },
    ],
  },
  experience: {
    label: "experience",
    heading: "Where I Have Built",
    entries: [
      {
        period: "June 2024 - December 2025",
        company: "Nexocide Pvt Ltd",
        role: "Software Developer",
        location: "Panaji, Goa",
        points: [
          "Built and shipped 15+ responsive web applications using Next.js, React, and Tailwind CSS for real clients.",
          "Architected reusable component libraries and consistent design systems to standardise UI patterns.",
          "Integrated Firebase Auth, Firestore, and Realtime Database across 5+ projects for authentication, live data sync, and content management.",
          "Managed REST API data flows with TanStack Query, including caching, loading states, and clean error handling.",
        ],
      },
      {
        period: "July 2023 - September 2023",
        company: "Nexocide Pvt Ltd",
        role: "Frontend Developer Intern",
        location: "Panaji, Goa",
        points: [
          "Contributed responsive UI components to a Next.js CRM project from Figma designs.",
          "Developed and maintained WordPress and Elementor sites, gaining exposure to CMS-based workflows.",
        ],
      },
    ],
  },
  projects: {
    label: "projects",
    heading: "Selected Work",
    featuredBadge: "Featured",
    githubLinkLabel: "View",
    deployedLinkLabel: "View deployed",
    viewMoreLabel: "View more",
    closeLabel: "Close project details",
    detailLabels: {
      overview: "Overview",
      keyWork: "Key work",
      stack: "Stack",
      visuals: "Visuals",
    },
    items: [
      {
        name: "ClientFlow CRM",
        initials: "CF",
        featured: true,
        gradient: "linear-gradient(135deg, #1e1b4b, #5b5fc7 54%, #06b6d4)",
        description:
          "Production-style SaaS CRM for leads, customers, tasks, pipeline activity, team workflows, analytics, role-aware navigation, and Supabase-backed CRUD flows.",
        detail:
          "ClientFlow is a polished SaaS dashboard with protected app flows, real CRM data operations, analytics, lead and customer workspaces, task management, and a Kanban sales pipeline.",
        tech: [
          "React 19",
          "TypeScript",
          "Vite",
          "Supabase",
          "TanStack Query",
          "TanStack Router",
          "Recharts",
          "dnd-kit",
        ],
        highlights: [
          "Drag-and-drop Kanban pipeline",
          "Role-aware Admin, Manager, and Sales User flows",
          "Dashboard charts and notifications",
        ],
        detailPoints: [
          "Built Supabase-backed authentication, protected routes, and role-aware navigation for Admin, Manager, and Sales User profiles.",
          "Implemented lead, customer, task, note, and activity workflows with typed data models and mutation feedback.",
          "Designed dashboard metrics, sales performance charts, task reminders, and notification states for daily CRM usage.",
          "Added dnd-kit pipeline movement with button-based fallback controls for accessible stage updates.",
        ],
        images: [],
        deploymentUrl: "",
        github: "https://github.com/PriyankaFatarpekar/crm-saas",
      },
      {
        name: "HSM Website",
        initials: "HS",
        gradient: "linear-gradient(135deg, #5b5fc7, #7c3aed)",
        description:
          "Responsive business website with a Firebase-powered admin panel for real-time content management.",
        detail:
          "A complete website delivery focused on responsive layouts, content management, and a clean editing workflow for administrators.",
        tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
        highlights: [],
        detailPoints: [
          "Created responsive frontend sections for core business content and conversion paths.",
          "Connected Firebase data flows for admin-managed content updates.",
          "Delivered mobile-first UI treatment with reusable page sections.",
        ],
        images: [],
        deploymentUrl: "",
         github: "https://hsm-website.vercel.app/",
      },
      {
        name: "NexoCabs",
        initials: "NC",
        gradient: "linear-gradient(135deg, #0d9488, #06b6d4)",
        description:
          "Cab booking platform UI with real-time ride data management through Firebase Firestore.",
        detail:
          "A cab booking interface built around booking data visibility, responsive forms, and Firebase-supported ride management.",
        tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
        highlights: [],
        detailPoints: [
          "Built responsive booking screens and user-facing ride information layouts.",
          "Integrated Firestore data handling for ride records and management workflows.",
          "Polished loading and responsive states across primary booking paths.",
        ],
        images: [],
        deploymentUrl: "",
            github: "https://www.nexocabs.com//",
      },
      {
        name: "8bit Media",
        initials: "8B",
        gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
        description:
          "Interactive media company website with smooth animations, service showcases, and dynamic contact flows.",
        detail:
          "A brand-forward media website built to present services clearly while keeping the interface animated, responsive, and easy to scan.",
        tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
        highlights: [],
        detailPoints: [
          "Created animated service and showcase sections for a stronger brand presentation.",
          "Built responsive contact flows and supporting content sections.",
          "Used reusable UI patterns for consistent spacing, typography, and interaction states.",
        ],
        images: [],
        deploymentUrl: "",
          github: "https://bit-media-8.vercel.app/",
      },
      {
        name: "NexoGo",
        initials: "NG",
        gradient: "linear-gradient(135deg, #059669, #06b6d4)",
        description:
          "Animated frontend experience with smooth transitions and Firebase-backed data management support.",
        detail:
          "An animated frontend project combining transition-heavy UI with Firebase-backed data support for content and workflow management.",
        tech: ["Next.js", "React", "Tailwind CSS", "Firebase"],
        highlights: [],
        detailPoints: [
          "Implemented animated frontend sections with smooth transition behavior.",
          "Assisted with Firebase integration for data-backed UI features.",
          "Maintained responsive behavior across key screen sizes.",
        ],
        images: [],
        deploymentUrl: "",
          github: "https://nexogo-development.vercel.app/",
      },
    ],
  },
  certifications: {
    label: "certifications",
    heading: "Certifications",
    linkLabel: "View certificate",
    items: [
      { issuer: "NPTEL", name: "Software Testing", url: "https://drive.google.com/file/d/1qOcIVIvbzxZ3NR58Zifs3kfqq0a8Upau/view?usp=sharing" },
      { issuer: "NPTEL", name: "Google Cloud Computing Foundations", url: "https://drive.google.com/file/d/1ZiRCS3gjiI6v10ffvK09d2SorVakI4dj/view" },
      {
        issuer: "NPTEL",
        name: "Information Security - Secure Systems Engineering",
        url: "https://drive.google.com/file/d/1wFhjm68z4LKaBgzwnuoWbcXsTQJLiP6u/view?usp=sharing",
      },
      { issuer: "NPTEL", name: "Data Mining", url: "https://drive.google.com/file/d/1rkVcp40jhocrC4S8JTw1IjLuoMgFNWDu/view" },
    ],
  },
  contact: {
    label: "contact",
    heading: "Let's Build Something Great Together",
    subtext: "Open to frontend roles, freelance projects, and collaborations.",
    copied: "Copied",
    copyLabel: "Copy email",
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  footer: {
    prefix: "Designed and built by",
    year: "2026",
    backToTop: "Back to top",
  },
} as const;

export type Project = (typeof portfolio.projects.items)[number];

