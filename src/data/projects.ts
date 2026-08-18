export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  client?: string;
  year?: string;
  category: string;
  summary: string;
  description: string;
  role: string[];
  image: string;
  imageAlt: string;
  detailImage?: string;
  detailImageAlt?: string;
  gallery?: GalleryItem[];
}

export const projects: Project[] = [
  {
    slug: "dont-feed-this-monster",
    title: "Don't Feed This Monster",
    client: "Omega Food",
    year: "2019",
    category: "Campaign",
    summary:
      "A campaign that turned food waste into a monster to fight — and cut plate waste 30% across Omega Food's corporate and hospital restaurants.",
    description:
      "Omega Food runs restaurant operations for companies and hospitals across Brazil, serving over 8,000 employees a day around a simple promise: healthy, quality meals. But plate after plate was coming back untouched, and the usual playbook of informational posters and generic sustainability messaging wasn't moving the needle. I led the concept and execution of Don't Feed This Monster, built on a simple insight: food waste is invisible because nobody treats it like a threat — so we made it one. A cast of original monsters fed on food scraps, growing stronger with every wasted meal, rendered in a visual language deliberately far from the guilt-driven tone that usually surrounds this topic. The campaign rolled out across posters, stickers, placemats, and social media, meeting employees from the moment they walked in to the moment they sat down to eat. Food waste dropped 30% across every restaurant where it ran.",
    role: ["Concept & creative direction", "Character illustration", "Campaign design"],
    image: "/images/work/dont-feed-this-monster.jpg",
    imageAlt: "Don't Feed This Monster pink poster with an illustrated monster",
    detailImage: "/images/work/dont-feed-this-monster.jpg",
    detailImageAlt: "Don't Feed This Monster pink poster with an illustrated monster",
    gallery: [
      {
        src: "/images/work/dont-feed-this-monster/storefront-mockup.jpg",
        alt: "Don't Feed This Monster posters applied to a storefront window display",
      },
      {
        src: "/images/work/dont-feed-this-monster/sticker-set.jpg",
        alt: "Sticker set featuring the full cast of Don't Feed This Monster characters",
      },
      {
        src: "/images/work/dont-feed-this-monster/placemat-dino.jpg",
        alt: "Don't Feed This Monster placemat design with the dinosaur monster devouring a city",
      },
      {
        src: "/images/work/dont-feed-this-monster/poster-blob.jpg",
        alt: "Purple horned monster poster from the Don't Feed This Monster campaign",
      },
      {
        src: "/images/work/dont-feed-this-monster/poster-mouth.jpg",
        alt: "Blue hooded monster poster from the Don't Feed This Monster campaign",
      },
      {
        src: "/images/work/dont-feed-this-monster/poster-melt.jpg",
        alt: "Melting popsicle-headed monster poster from the Don't Feed This Monster campaign",
      },
      {
        src: "/images/work/dont-feed-this-monster/poster-trash.jpg",
        alt: "Teal trash monster poster from the Don't Feed This Monster campaign",
      },
      {
        src: "/images/work/dont-feed-this-monster/poster-robot.jpg",
        alt: "Green robot monster poster from the Don't Feed This Monster campaign",
      },
    ],
  },
  {
    slug: "tale-of-fire-and-history",
    title: "The Tale of Fire and History",
    client: "ABSPK",
    year: "2019",
    category: "Film",
    summary:
      "A campaign that turned a preventable tragedy into a national case for fire prevention — written, directed, and produced end to end.",
    description:
      "As Creative Director at Urso Propaganda, I led The Tale of Fire and History from concept to execution for ABSPK, the Brazilian sprinkler association — writing the script, directing the visual identity, and overseeing every creative front.",
    role: ["Creative direction", "Script", "Motion design", "Film production"],
    image: "/images/work/tale-of-fire-and-history.gif",
    imageAlt: "Animated rocket launching over flames",
  },
  {
    slug: "logofolio",
    title: "Logofolio",
    category: "Brand design",
    summary:
      "A brand identity is often the first thing people see and the last thing they forget. Over the course of my career, I've had the opportunity to build more than 100 of them — from early-stage startups finding their voice for the first time to established corporate and consumer brands repositioning for a new chapter.",
    description:
      "This logofolio is a curated selection of that work. Each mark represents a process: listening to what a business is trying to become, distilling it into something visual, and making sure it holds up at every scale and in every context. Different industries, different audiences, different stories — but the same commitment to craft and strategic intent behind every single one.",
    role: ["Brand identity", "Logo design"],
    image: "/images/work/logofolio/master-sense.png",
    imageAlt: "Master Sense logo presentation, a stylized ingredient drop mark",
    gallery: [
      { src: "/images/work/logofolio/master-sense.png", alt: "Master Sense — ingredients and aromas logo presentation" },
      { src: "/images/work/logofolio/ekadon-filmes.png", alt: "Ekadon Filmes — movie maker logo presentation" },
      { src: "/images/work/logofolio/emporio-do-lui.png", alt: "Empório do Lui — beer store logo presentation" },
      { src: "/images/work/logofolio/crossfit-kerberos.png", alt: "Crossfit Kerberos logo presentation" },
      { src: "/images/work/logofolio/eqpa.png", alt: "EQPA — wayfinding design logo presentation" },
      { src: "/images/work/logofolio/rosana.png", alt: "Rosana — jewelry and watches logo presentation" },
      { src: "/images/work/logofolio/in-pulsa.png", alt: "In-Pulsa — innovation consulting logo presentation" },
      { src: "/images/work/logofolio/mouve.png", alt: "Mouve — shoes brand logo presentation" },
      { src: "/images/work/logofolio/mvint-estetica.png", alt: "M'Vint Estética — beauty logo presentation" },
      { src: "/images/work/logofolio/evencard.png", alt: "Evencard — card conciliator logo presentation" },
      { src: "/images/work/logofolio/chacara-paraiso.png", alt: "Chácara Paraíso — place for events logo presentation" },
      { src: "/images/work/logofolio/ana-carioca.png", alt: "Ana Carioca — rotisserie logo presentation" },
      { src: "/images/work/logofolio/belnatur.png", alt: "Belnatur — natural snacks logo presentation" },
      { src: "/images/work/logofolio/mediterraneo.png", alt: "Mediterrâneo — real estate logo presentation" },
      { src: "/images/work/logofolio/dili.png", alt: "Dili — pet store logo presentation" },
      { src: "/images/work/logofolio/focus-transportes.png", alt: "Focus Transportes — transportation logo presentation" },
      { src: "/images/work/logofolio/s4c.png", alt: "S4C — engineering logo presentation" },
      { src: "/images/work/logofolio/insider-box.png", alt: "Insider Box — cross training logo presentation" },
      { src: "/images/work/logofolio/allge.png", alt: "Allge — logistics consulting logo presentation" },
      { src: "/images/work/logofolio/dojo.png", alt: "Dojo — leadership school logo presentation" },
    ],
  },
];
