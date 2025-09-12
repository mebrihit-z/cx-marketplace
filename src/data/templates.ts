export interface Template {
  id: string;
  src: string;
  alt: string;
  gridArea?: string;
  aspectRatio?: string;
  title?: string;
  category?: string;
  description?: string;
  features?: string[];
  price?: number;
}

export const templateData: Template[] = [
  {
    id: "8084:57053",
    src: "images/saas-card-bg.svg",
    alt: "SaaS Template",
    gridArea: "1 / 2",
    aspectRatio: "aspect-[500/400]",
    title: "SaaS Dashboard",
    category: "SaaS",
    description: "Modern SaaS dashboard template with clean design",
    features: ["Dashboard", "Analytics", "User Management"],
    price: 99
  },
  {
    id: "8084:57055",
    src: "images/e-commerce-card-bg-image.svg",
    alt: "E-commerce Template",
    gridArea: "1 / 3",
    aspectRatio: "aspect-[500/400]",
    title: "E-commerce Store",
    category: "E-commerce",
    description: "Complete e-commerce solution with shopping cart",
    features: ["Product Catalog", "Shopping Cart", "Payment Integration"],
    price: 149
  },
  {
    id: "8263:73712",
    src: "images/startup-card-bg-image.svg",
    alt: "Portfolio Template",
    gridArea: "2 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Portfolio Showcase",
    category: "Portfolio",
    description: "Professional portfolio template for creatives",
    features: ["Gallery", "About Section", "Contact Form"],
    price: 79
  },
  {
    id: "8650:41119",
    src: "images/portfolio-card-bg-image.svg",
    alt: "Event Template",
    gridArea: "2 / 2",
    title: "Event Landing Page",
    category: "Events",
    description: "Event management and ticketing template",
    features: ["Event Calendar", "Ticket Booking", "Registration"],
    price: 129
  },
  {
    id: "8650:41130",
    src: "images/event-card-bg-image.svg",
    alt: "Blog Template",
    gridArea: "2 / 3",
    title: "Blog Platform",
    category: "Blog",
    description: "Modern blog template with content management",
    features: ["Blog Posts", "Categories", "Comments"],
    price: 89
  },
  {
    id: "8263:73698",
    src: "images/agency-card-bg-image-1.svg",
    alt: "Blog Template 2",
    gridArea: "1 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Blog Platform Pro",
    category: "Blog",
    description: "Advanced blog template with premium features",
    features: ["Blog Posts", "Categories", "Comments", "Newsletter"],
    price: 119
  }
];

export interface MoreTemplate {
  id: string;
  title: string;
  backgroundImage: string;
  backgroundColor: string;
  gradientTo: string;
  aspectRatio?: string;
}

export const moreTemplates: MoreTemplate[] = [
  {
    id: "saas-1.0",
    title: "SaaS 1.0",
    backgroundImage: "images/saas-card-lg.svg",
    backgroundColor: "#4DD58C",
    gradientTo: "#04261E",
    aspectRatio: "aspect-[1860/1212]"
  },
  {
    id: "startup-1.0",
    title: "Startup 1.0",
    backgroundImage: "images/e-commerce-card-lg.svg",
    backgroundColor: "#6D83D9",
    gradientTo: "#131D45",
    aspectRatio: "aspect-[1726/1124]"
  },
  {
    id: "startup-2.0",
    title: "Startup 2.0",
    backgroundImage: "images/startup-card-lg.svg",
    backgroundColor: "#BD550F",
    gradientTo: "#421E06",
    aspectRatio: "aspect-[1666/1084]"
  }
];

export const additionalTemplates: Template[] = [
  {
    id: "8084:57053-2",
    src: "images/e-commerce-card-bg-image-2.svg",
    alt: "SaaS Template 2",
    gridArea: "1 / 2",
    aspectRatio: "aspect-[500/400]",
    title: "SaaS Analytics",
    category: "SaaS",
    description: "Advanced analytics dashboard for SaaS applications",
    features: ["Analytics", "Reports", "Data Visualization"],
    price: 199
  },
  {
    id: "8084:57055-2",
    src: "images/portfolio-card-bg-image-2.svg",
    alt: "E-commerce Template 2",
    gridArea: "1 / 3",
    aspectRatio: "aspect-[500/400]",
    title: "E-commerce Pro",
    category: "E-commerce",
    description: "Premium e-commerce template with advanced features",
    features: ["Multi-vendor", "Inventory Management", "Advanced Analytics"],
    price: 299
  },
  {
    id: "8263:73712-2",
    src: "images/news-card-bg-image.svg",
    alt: "Portfolio Template 2",
    gridArea: "2 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Creative portfolio template for artists and designers",
    features: ["Interactive Gallery", "Video Support", "Social Integration"],
    price: 149
  },
  {
    id: "8650:41119-2",
    src: "images/startup-card-bg-image-2.svg",
    alt: "Event Template 2",
    gridArea: "2 / 2",
    title: "Conference Landing",
    category: "Events",
    description: "Professional conference and event landing page",
    features: ["Speaker Profiles", "Schedule", "Registration"],
    price: 179
  },
  {
    id: "8650:41130-2",
    src: "images/saas-card-bg-image-2.svg",
    alt: "Blog Template 2",
    gridArea: "2 / 3",
    title: "News Blog",
    category: "Blog",
    description: "News and magazine blog template",
    features: ["Article Layout", "Author Profiles", "Social Sharing"],
    price: 129
  },
  {
    id: "8263:73698-2",
    src: "images/business-card-bg-image.svg",
    alt: "Blog Template 3",
    gridArea: "1 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Tech Blog",
    category: "Blog",
    description: "Technology blog template with code highlighting",
    features: ["Code Syntax", "Tutorial Layout", "Search"],
    price: 159
  },
  {
    id: "8263:73698-3",
    src: "images/blog-card-bg-image.svg",
    alt: "Blog Template 4",
    gridArea: "1 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Lifestyle Blog",
    category: "Blog",
    description: "Lifestyle and fashion blog template",
    features: ["Image Gallery", "Recipe Cards", "Social Feed"],
    price: 99
  },
  {
    id: "8263:73698-4",
    src: "images/agency-card-bg-image.svg",
    alt: "Blog Template 5",
    gridArea: "1 / 1",
    aspectRatio: "aspect-[500/400]",
    title: "Business Blog",
    category: "Blog",
    description: "Corporate business blog template",
    features: ["Case Studies", "White Papers", "Team Profiles"],
    price: 189
  }
];
