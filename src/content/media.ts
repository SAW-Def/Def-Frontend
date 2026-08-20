export type Photo = {
  src: string;
  alt: string;
};

export const photos = {
  configuratorHome: {
    src: "/images/configurator-home.jpg",
    alt: "A customer personalising a cabinet in the configurator on a laptop at home",
  },
  qualifiedLead: {
    src: "/images/qualified-lead-desk.jpg",
    alt: "A sales manager reviewing a qualified lead configuration at a workshop desk",
  },
  configuratorWarehouse: {
    src: "/images/configurator-warehouse.jpg",
    alt: "A manufacturer working through a furniture configuration beside the production floor",
  },
  handshake: {
    src: "/images/consultation-handshake.jpg",
    alt: "A customer and a furniture specialist shaking hands in a finished living room",
  },
  panelSaw: {
    src: "/images/factory-panel-saw.jpg",
    alt: "An operator working at a beam saw on the DEF production floor",
  },
  workshopPress: {
    src: "/images/workshop-press.jpg",
    alt: "A craftsman feeding veneer through a press in the workshop",
  },
  sprayBooth: {
    src: "/images/spray-booth.jpg",
    alt: "A finisher spraying a cabinet carcass inside the paint booth",
  },
  craftsmanVeneer: {
    src: "/images/craftsman-veneer.jpg",
    alt: "Hands laying flexible veneer onto a curved furniture panel",
  },
  beamSaw: {
    src: "/images/beam-saw-operator.jpg",
    alt: "An operator loading boards onto a computer-controlled beam saw",
  },
  assemblyLine: {
    src: "/images/assembly-line.jpg",
    alt: "A team member checking components on the assembly and packing line",
  },
  edgeBander: {
    src: "/images/edge-bander-operator.jpg",
    alt: "An operator running a panel through the edge banding machine",
  },
} as const satisfies Record<string, Photo>;

export const heroSlides: Photo[] = [
  photos.configuratorHome,
  photos.qualifiedLead,
  photos.configuratorWarehouse,
  photos.handshake,
];
