export const routes = {
  home: "/",
  solution: "/our-solution",
  howItWorks: "/how-it-works",
  story: "/our-story",
  scheduleCall: "/schedule-a-call",
  terms: "/terms-and-conditions",
  privacy: "/privacy-policy",
} as const;

export const site = {
  name: "DEF Software Solutions",
  tagline: "Technology meets real furniture expertise.",
  strapline: "That’s the difference.",
  email: "info@defsoftwaresolutions.com",
  url: "https://www.defsoftwaresolutions.com",
} as const;

export const mainNav = [
  { label: "Our Solution", href: routes.solution },
  { label: "How It Works", href: routes.howItWorks },
  { label: "Our Story", href: routes.story },
] as const;

export const footerNav = [
  {
    heading: "Product",
    links: [
      { label: "Our Solution", href: routes.solution },
      { label: "How It Works", href: routes.howItWorks },
      { label: "Schedule a Call", href: routes.scheduleCall, emphasis: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: routes.story },
      { label: "Contact", href: routes.scheduleCall },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", href: routes.terms },
      { label: "Privacy Policy", href: routes.privacy },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
] as const;

/**
 * Hosted URL of the founder introduction film. The section renders its poster
 * treatment until a source is supplied, at which point the play control becomes live.
 */
export const introFilmUrl: string | null = null;
