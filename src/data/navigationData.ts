export type navigationDataType = {
  id: string;
  title: string;
  link: string;
};

export const navigationData: navigationDataType[] = [
  {
    id: "1er",
    title: "Home",
    link: "/",
  },
  {
    id: "2er",
    title: "About",
    link: "/about",
  },
  {
    id: "3er",
    title: "Contact",
    link: "/contact",
  },
  {
    id: "4er",
    title: "Policy",
    link: "/privacy-policy",
  },
  {
    id: "5er",
    title: "Terms",
    link: "/trams-condition",
  },
];
