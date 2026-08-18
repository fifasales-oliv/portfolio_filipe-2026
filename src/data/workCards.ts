export interface WorkCard {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  aspect: "4 / 5" | "1 / 1" | "3 / 4";
  width: number;
  height: number;
  href: string;
}

export const workCards: WorkCard[] = [
  {
    title: "Don't Feed This Monster",
    category: "Campaign",
    image: "/images/work/dont-feed-this-monster-thumb.jpg",
    imageAlt: "Don't Feed This Monster pink poster with an illustrated monster",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    href: "/work/dont-feed-this-monster/",
  },
  {
    title: "The Tale of Fire and History",
    category: "Film",
    image: "/images/work/tale-of-fire-and-history.gif",
    imageAlt: "Animated rocket launching over flames",
    aspect: "3 / 4",
    width: 600,
    height: 338,
    href: "/work/tale-of-fire-and-history/",
  },
  {
    title: "Logofolio",
    category: "Brand design",
    image: "/images/work/logofolio-thumb.jpg",
    imageAlt: "Grid of brand logos from the logofolio collection",
    aspect: "4 / 5",
    width: 1600,
    height: 2000,
    href: "/work/logofolio/",
  },
];
