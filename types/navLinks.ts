// types/links.ts (أو navLinks.ts)
export interface NavLink {
  href: string;
  labelKey: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  {
    href: "#hero",
    labelKey: "nav.home",
  },
  {
    href: "#services",
    labelKey: "nav.services",
  },
  {
    href: "#how-it-works",
    labelKey: "nav.how-it-works",
  },
  {
    href: "#doctors",
    labelKey: "nav.doctors",
  },
  {
    href: "#partners",
    labelKey: "nav.about",
  },
  {
    href: "#faq",
    labelKey: "nav.faq",
  },
  {
    href: "#contact",
    labelKey: "nav.contact",
  },
];
