export type NavLink = {
  label: string
  href: string
}

export type NavItem = NavLink & {
  children?: NavLink[]
}

export const navItems: NavItem[] = [
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Casino API", href: "#casino-api" },
      { label: "Turnkey", href: "/casino-platform" },
      { label: "Legal Services", href: "#legal-services" },
      { label: "Gamification & Loyalty", href: "#gamification" },
      { label: "Betting API", href: "#betting-api" },
      { label: "AML & KYC", href: "#aml-kyc" },
    ],
  },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Game Aggregator", href: "/game-aggregator" },
      { label: "Sportsbook", href: "/sportsbook" },
      { label: "Casino Platform", href: "/casino-platform" },
      { label: "Whitelabel", href: "#whitelabel" },
    ],
  },
  {
    label: "Partners",
    href: "#partners",
    children: [
      { label: "Game Providers", href: "#game-providers" },
      { label: "Business Partners", href: "#business-partners" },
      { label: "Payment Providers", href: "#payment-providers" },
    ],
  },
  { label: "Career", href: "/career" },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About", href: "/company" },
      { label: "Brandbook", href: "#brandbook" },
    ],
  },
  { label: "Knowladge Base", href: "/knowledge" },
]

export const languages = [
  { code: "EN", label: "English" },
  { code: "TR", label: "Türkçe" },
] as const

export const featuredSolutions = [
  {
    title: "Whitelabel",
    description:
      "Power your iGaming business with our complete, scalable platform.",
    href: "#whitelabel",
    icon: "/images/icons/cube.svg",
    iconBg: "var(--color-icon-whitelabel)",
    badge: "Buzzing",
  },
  {
    title: "Turnkey Casino",
    description:
      "Launch your sportsbook faster with our complete turnkey infrastructure.",
    href: "/casino-platform",
    icon: "/images/icons/cherries.svg",
    iconBg: "var(--color-icon-turnkey)",
  },
  {
    title: "Casino Aggregator",
    description:
      "Launch and scale your sportsbook with our powerful betting solution.",
    href: "/game-aggregator",
    icon: "/images/icons/cloud.svg",
    iconBg: "var(--color-icon-aggregator)",
  },
] as const
