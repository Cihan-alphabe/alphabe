import { navItems, type NavLink } from "@/data/navigation"

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Career", href: "/career" },
      { label: "Company", href: "/company" },
      { label: "Brandbook", href: "#brandbook" },
    ],
  },
  {
    title: "Products",
    links: navItems.find((item) => item.label === "Products")?.children ?? [],
  },
  {
    title: "Partners",
    links: navItems.find((item) => item.label === "Partners")?.children ?? [],
  },
  {
    title: "Solutions",
    links: navItems.find((item) => item.label === "Solutions")?.children ?? [],
  },
]

export const socialLinks = [
  { label: "Telegram", href: "#", src: "/images/footer/social-1.svg" },
  { label: "X", href: "#", src: "/images/footer/social-2.svg" },
  { label: "Instagram", href: "#", src: "/images/footer/social-3.svg" },
  { label: "Facebook", href: "#", src: "/images/footer/social-4.svg" },
  { label: "YouTube", href: "#", src: "/images/footer/social-5.svg" },
] as const
