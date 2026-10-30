export interface Client {
  name: string;
  /** Path under /images/about/clients/; without one the name is set in type instead. */
  logo?: string;
}

export const clients: Client[] = [
  { name: "Yunus", logo: "/images/about/clients/yunus.webp" },
  { name: "Banco Original", logo: "/images/about/clients/banco-original.svg" },
  { name: "Unimed", logo: "/images/about/clients/unimed.svg" },
  { name: "Odontoclinic", logo: "/images/about/clients/odontoclinic.png" },
  { name: "SsangYong", logo: "/images/about/clients/ssangyong.svg" },
  { name: "Oba Hortifruti", logo: "/images/about/clients/oba-hortifruti.svg" },
  { name: "Kowalski" },
];
