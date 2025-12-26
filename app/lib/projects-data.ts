export interface Project {
  id: string;
  client: string;
  projectName: string;
  problem: string;
  solution: string;
  tools: string[];
  results: string;
  images: string[]; // URLs to images
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    client: "",
    projectName: "E-Commerce Platform Revamp",
    problem:
      "The client's existing e-commerce site was slow, not mobile-responsive, and had a high cart abandonment rate.",
    solution:
      "We rebuilt the platform using Next.js and Shopify Storefront API, implementing a mobile-first design and streamlined checkout process.",
    tools: ["Next.js", "Shopify API", "Tailwind CSS", "Framer Motion"],
    results:
      "50% increase in mobile conversions, 30% reduction in cart abandonment, and 2x faster page load times.",
    images: ["/projects/ecommerce-1.jpg"], // Placeholder
    demoLink: "https://example.com",
  },
  {
    id: "2",
    client: "",
    projectName: "SaaS Dashboard UI",
    problem:
      "Users found the previous dashboard confusing and difficult to navigate, leading to high churn.",
    solution:
      "Designed and developed a new, intuitive dashboard with real-time data visualization and customizable widgets.",
    tools: ["React", "D3.js", "Material UI", "Firebase"],
    results:
      "User engagement increased by 40%, and support tickets related to navigation dropped by 60%.",
    images: ["/projects/dashboard-1.jpg"], // Placeholder
    demoLink: "https://example.com",
  },
];
