export const visibilityCards = [
  {
    title: ["Manufacturing", "constraints"],
    icon: { src: "/icons/manufacturing.svg", width: 112.4, height: 107.6 },
  },
  {
    title: ["Margin", "protection"],
    icon: { src: "/icons/margin.svg", width: 98.9, height: 102.5 },
  },
  {
    title: ["Domestic", "retail behaviour"],
    icon: { src: "/icons/house.svg", width: 102.8, height: 103 },
  },
  {
    title: ["Sales", "bottlenecks"],
    icon: { src: "/icons/funnel.svg", width: 110.1, height: 101.6 },
  },
] as const;

export const painPoints = [
  "Manual quotes slow everything down.",
  "Back-and-forth drawings delay decisions.",
  "Pricing uncertainty kills conversions.",
  "Showroom visits don’t suit your every customer.",
] as const;

export const platformCapabilities = [
  "Real-time configuration with dimensional logic",
  "Automated, rules-based pricing",
  "Measurement validation",
  "Real visual previews and augmented reality for your customers",
  "Lead capture with full product breakdown",
  "Workflow-ready data for your production team",
  "Built from real-world manufacturing operations",
] as const;

export const businessOutcomes = [
  "Reduce quoting time dramatically",
  "Increase conversion rates",
  "Sell beyond showroom hours",
  "Capture better-qualified leads",
  "Improve customer confidence",
  "Ensure every order is production-ready",
  "You maintain control",
  "Your customers gain efficiency",
  "Your sales team works smarter",
] as const;

export const stats = [
  {
    value: "100s",
    lines: ["of successful orders", "processed through", "the platform!"],
    tone: "light",
  },
  {
    value: "80%",
    lines: ["faster quote", "turnaround", "for furniture orders!"],
    tone: "brand",
  },
  {
    value: "1/10",
    suffix: "th",
    lines: [
      "traditional methods offer 1/10th",
      "of revenue generation potential",
      "compared to DEF!",
    ],
    tone: "light",
  },
] as const;

export const salesRoutes = [
  {
    title: "Direct online purchase",
    body: "Customers personalise their furniture, see real-time pricing, and complete their purchase without sales team involvement.",
    bodyWidth: "24.5em",
    outcome: "You sell. Instantly.",
  },
  {
    title: "Qualified sales engagement",
    body: "Customers configure online but need reassurance before proceeding. You receive structured, high-quality leads with full configuration data already captured.",
    bodyWidth: "29.8em",
    outcome: "No cold enquiries. No vague requests. Just informed buyers.",
  },
] as const;

export const customerQueries = [
  "I have created this furniture product. How long will it take for delivery if I place an order today?",
  "I’m not a carpenter, but I measured my space and created this product. Do you offer home visits to double-check my measurements before ordering?",
] as const;
