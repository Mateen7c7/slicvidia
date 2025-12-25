export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: "Globe",
    shortDesc: "High-performance websites tailored to your brand.",
    overview: {
      heading: "Build a Digital Presence That Converts",
      description:
        "Your website is your digital storefront. We build high-performance, visually stunning, and user-centric websites that not only look good but also drive results. Whether you need a simple landing page or a complex corporate site, we ensure it represents your brand perfectly.",
      importance:
        "In today's digital age, 75% of users judge a company's credibility based on their website design. A poor website means lost business.",
    },
    offerings: [
      "Custom UI/UX Design tailored to your brand identity",
      "Responsive Mobile-First Development",
      "SEO-Optimized Structure for better visibility",
      "Fast Loading Speeds (Core Web Vitals optimized)",
      "CMS Integration (WordPress, Sanity, Contentful, etc.)",
      "Secure & Scalable Architecture",
    ],
    process: [
      {
        title: "Discovery",
        desc: "We analyze your business goals, target audience, and competitors.",
      },
      {
        title: "Design",
        desc: "We create wireframes and high-fidelity mockups for your approval.",
      },
      {
        title: "Development",
        desc: "We build the site using modern technologies (Next.js, React, Tailwind).",
      },
      {
        title: "Testing",
        desc: "Rigorous testing for performance, accessibility, and responsiveness.",
      },
      {
        title: "Launch",
        desc: "We deploy your site and ensure a smooth go-live experience.",
      },
    ],
    cta: "Get Your Custom Website Quote",
    relatedServices: ["web-management-maintenance", "digital-marketing"],
    faqs: [
      {
        question: "Do you use templates or build from scratch?",
        answer: "We primarily build custom solutions tailored to your specific needs, but we can also work with templates if budget/timeline requires it.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer: "Yes, we integrate user-friendly CMS platforms allowing you to easily manage text and images.",
      },
      {
        question: "Is SEO included?",
        answer: "We build with SEO best practices (structure, speed, meta tags), but ongoing content strategy is a separate service.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    icon: "Code",
    shortDesc: "Custom web applications and internal tools.",
    overview: {
      heading: "Scalable Software Solutions for Complex Problems",
      description:
        "Off-the-shelf software often falls short. We engineer custom software solutions—from SaaS platforms to internal business tools—that streamline operations and solve your specific challenges.",
      importance:
        "Custom software can increase efficiency by up to 30% by automating repetitive tasks and integrating disparate systems.",
    },
    offerings: [
      "Full-Stack Web Application Development",
      "SaaS Product Development (MVP to Scale)",
      "API Development & Integration",
      "Database Design & Management",
      "Cloud Infrastructure Setup (AWS, Vercel, Google Cloud)",
      "Legacy System Modernization",
    ],
    process: [
      {
        title: "Requirement Analysis",
        desc: "Deep dive into technical requirements and business logic.",
      },
      {
        title: "Architecture Design",
        desc: "Planning a scalable and secure system architecture.",
      },
      {
        title: "Agile Development",
        desc: "Iterative development with regular feedback loops.",
      },
      {
        title: "QA & Security",
        desc: "Comprehensive testing and security audits.",
      },
      {
        title: "Deployment & Support",
        desc: "CI/CD setup and ongoing maintenance.",
      },
    ],
    cta: "Discuss Your Software Project",
    relatedServices: ["website-development", "web-management-maintenance"],
    faqs: [
      {
        question: "Do I own the code?",
        answer: "Yes, once the project is paid in full, you own 100% of the intellectual property and code.",
      },
      {
        question: "What technology stack do you use?",
        answer: "We typically use modern stacks like React/Next.js for frontend and Node.js/Python for backend, but we choose the best tool for the job.",
      },
      {
        question: "Can you scale the app as we grow?",
        answer: "Absolutely. We design architectures specifically to handle growth in users and data.",
      },
    ],
  },
  {
    slug: "web-management-maintenance",
    title: "Web Management & Maintenance",
    icon: "CheckCircle",
    shortDesc: "Updates, security, and maintenance handled for you.",
    overview: {
      heading: "Keep Your Website Secure, Fast, and Up-to-Date",
      description:
        "A website is never 'finished'. It needs regular updates, security patches, and content refreshes. We handle the technical details so you can focus on running your business.",
      importance:
        "Outdated plugins and software are the #1 cause of website hacks. Regular maintenance prevents downtime and security breaches.",
    },
    offerings: [
      "24/7 Uptime Monitoring",
      "Regular Security Patches & Updates",
      "Daily/Weekly Backups",
      "Content Updates & Edits",
      "Performance Optimization",
      "Monthly Health Reports",
    ],
    process: [
      { title: "Audit", desc: "Initial health check of your current website." },
      { title: "Onboarding", desc: "Setting up monitoring tools and access." },
      {
        title: "Routine Maintenance",
        desc: "Scheduled updates and checks performed weekly/monthly.",
      },
      {
        title: "Emergency Support",
        desc: "Priority response for any critical issues.",
      },
    ],
    cta: "Secure Your Website Today",
    relatedServices: ["website-development", "software-development"],
    faqs: [
      {
        question: "What happens if my site goes down?",
        answer: "Our monitoring alerts us immediately. We investigate and resolve downtime issues as a priority.",
      },
      {
        question: "Can I cancel my plan anytime?",
        answer: "Yes, our maintenance plans are month-to-month with no long-term lock-in.",
      },
      {
        question: "Does this include hosting?",
        answer: "We can manage your hosting, but the hosting fee itself is usually separate or bundled depending on the plan.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    icon: "BarChart",
    shortDesc: "Drive traffic and convert visitors into customers.",
    overview: {
      heading: "Data-Driven Marketing That Delivers ROI",
      description:
        "Building a great product is only half the battle. We help you find your audience through targeted digital marketing strategies, SEO, and paid advertising campaigns.",
      importance:
        "Organic search drives 53% of all website traffic. Without SEO, you are invisible to half your potential customers.",
    },
    offerings: [
      "Comprehensive SEO Audit & Strategy",
      "On-Page & Off-Page SEO",
      "PPC Campaign Management (Google Ads, Meta Ads)",
      "Social Media Strategy & Management",
      "Email Marketing Automation",
      "Conversion Rate Optimization (CRO)",
    ],
    process: [
      {
        title: "Market Research",
        desc: "Analyzing competitors and identifying keywords.",
      },
      {
        title: "Strategy Formulation",
        desc: "Creating a roadmap for organic and paid growth.",
      },
      {
        title: "Execution",
        desc: "Implementing campaigns and optimizing content.",
      },
      {
        title: "Analytics & Reporting",
        desc: "Tracking KPIs and adjusting strategy for maximum ROI.",
      },
    ],
    cta: "Boost Your Traffic Now",
    relatedServices: ["website-development", "content-video-editing"],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. Typically, significant results are seen within 3-6 months.",
      },
      {
        question: "What is the recommended ad budget?",
        answer: "It varies by industry, but we recommend starting with a budget that allows for sufficient data gathering (testing).",
      },
      {
        question: "Do you provide monthly reports?",
        answer: "Yes, we provide detailed reports showing traffic, rankings, and conversion metrics.",
      },
    ],
  },
  {
    slug: "content-video-editing",
    title: "Content & Video Editing Services",
    icon: "Video",
    shortDesc: "Engaging copy and visuals that tell your story.",
    overview: {
      heading: "Captivate Your Audience with Premium Content",
      description:
        "Content is king. From compelling blog posts to high-retention video edits for social media, we create assets that engage your audience and build brand authority.",
      importance:
        "Video content generates 1200% more shares than text and images combined. High-quality content is essential for engagement.",
    },
    offerings: [
      "Professional Video Editing (Reels, TikToks, YouTube)",
      "Motion Graphics & Visual Effects",
      "Copywriting & Blog Writing",
      "Social Media Graphics Design",
      "Scriptwriting & Storyboarding",
      "Brand Voice Development",
    ],
    process: [
      {
        title: "Briefing",
        desc: "Understanding your brand voice and content goals.",
      },
      { title: "Creation", desc: "Drafting copy or editing video footage." },
      {
        title: "Review",
        desc: "Collaborative feedback rounds to perfect the content.",
      },
      {
        title: "Final Delivery",
        desc: "High-quality assets ready for publishing.",
      },
    ],
    cta: "Start Creating Content",
    relatedServices: ["digital-marketing", "website-development"],
    faqs: [
      {
        question: "Can you edit my existing raw footage?",
        answer: "Yes, we can turn your raw footage into polished, professional videos.",
      },
      {
        question: "Do you write scripts?",
        answer: "Yes, we offer scriptwriting services to help structure your message effectively.",
      },
      {
        question: "What file formats do you deliver?",
        answer: "We deliver in all standard formats optimized for your specific platforms (e.g., vertical for TikTok, 4K for YouTube).",
      },
    ],
  },
];
