export interface Logo {
  file: string;
  name: string;
  sector: string;
  desc: string;
  color: string;
  featured?: boolean;
  src: string;
  light: boolean;
}

// Each source image is a 1200×1200 presentation card: the mark on a light field
// fills the top 1200×800, the colour version sits bottom-left (600×400) and the
// lockup bottom-right. The wall crops those regions with background-position,
// so the original cards are reused as-is and shown whole in the lightbox.
export const logos: Logo[] = [
  { file: "master-sense", name: "Master Sense", sector: "Food & Beverage", desc: "Ingredients and aromas", color: "#093e52", featured: true },
  { file: "ekadon-filmes", name: "Ekadon Filmes", sector: "Entertainment", desc: "Film production company", color: "#181851" },
  { file: "emporio-do-lui", name: "Empório do Lui", sector: "Food & Beverage", desc: "Craft beer store", color: "#f08621" },
  { file: "crossfit-kerberos", name: "Crossfit Kerberos", sector: "Health & Fitness", desc: "CrossFit box", color: "#ffcb00", featured: true },
  { file: "eqpa", name: "EQPA", sector: "Infrastructure", desc: "Wayfinding design studio", color: "#183e51" },
  { file: "rosana", name: "Rosana", sector: "Retail", desc: "Jewelry and watches", color: "#3ca09d" },
  { file: "in-pulsa", name: "In-Pulsa", sector: "Services", desc: "Innovation consulting", color: "#00a49c" },
  { file: "mouve", name: "Mouve", sector: "Retail", desc: "Shoe brand", color: "#e63446", featured: true },
  { file: "mvint-estetica", name: "M'Vint Estética", sector: "Health & Fitness", desc: "Beauty and aesthetics clinic", color: "#bf3742" },
  { file: "evencard", name: "Evencard", sector: "Services", desc: "Card payment reconciliation", color: "#7a1753" },
  { file: "chacara-paraiso", name: "Chácara Paraíso", sector: "Entertainment", desc: "Venue for events", color: "#c22726" },
  { file: "ana-carioca", name: "Ana Carioca", sector: "Food & Beverage", desc: "Rotisserie", color: "#62c0b7" },
  { file: "belnatur", name: "Belnatur", sector: "Food & Beverage", desc: "Natural snacks", color: "#00a49c" },
  { file: "mediterraneo", name: "Mediterrâneo", sector: "Infrastructure", desc: "Real estate", color: "#0381b6", featured: true },
  { file: "dili", name: "Dili", sector: "Retail", desc: "Pet store", color: "#e5293c" },
  { file: "focus-transportes", name: "Focus Transportes", sector: "Infrastructure", desc: "Transportation", color: "#001b27" },
  { file: "s4c", name: "S4C", sector: "Infrastructure", desc: "Engineering", color: "#004d70" },
  { file: "insider-box", name: "Insider Box", sector: "Health & Fitness", desc: "Cross training gym", color: "#1d1d1b" },
  { file: "allge", name: "Allge", sector: "Services", desc: "Logistics consulting", color: "#efc44f" },
  { file: "dojo", name: "Dojo", sector: "Services", desc: "Leadership school", color: "#1d1d1b" },
].map((logo) => ({
  ...logo,
  src: `/images/work/logofolio/${logo.file}.png`,
  light: isLight(logo.color),
}));

function isLight(hex: string): boolean {
  const n = parseInt(hex.slice(1), 16);
  const r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 170;
}
