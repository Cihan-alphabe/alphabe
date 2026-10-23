export type KnowledgeCategory =
  | "All"
  | "Payments"
  | "Betting"
  | "CRM"
  | "Online Casino"
  | "Updates"
  | "Risk Management"

export type KnowledgePost = {
  slug: string
  title: string
  category: Exclude<KnowledgeCategory, "All">
  date: string
  readTime: string
  author: string
  authorRole?: string
  image: string
  play?: boolean
}

export const knowledgeFilters: KnowledgeCategory[] = [
  "All",
  "Payments",
  "Betting",
  "CRM",
  "Online Casino",
  "Updates",
  "Risk Management",
]

export const featuredPost: KnowledgePost = {
  slug: "unforgettable-sunset-cruise",
  title: "Unforgettable Sunset Cruise for Two in the Mediterranean",
  category: "Online Casino",
  date: "10 Jul 2026",
  readTime: "14 min",
  author: "SadettinKarlı",
  image: "/images/knowledge/featured.png",
}

export const knowledgePosts: KnowledgePost[] = [
  {
    slug: "entrepreneurs-guide",
    title: "The Entrepreneur’s Guide to Launching a Successful Online Casino",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    authorRole: "Head of Casino",
    image: "/images/knowledge/post-1.png",
  },
  {
    slug: "starting-gambling-2026",
    title: "Starting an Online Gambling Business in 2026",
    category: "Online Casino",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-2.png",
    play: true,
  },
  {
    slug: "key-metrics",
    title: "Understanding Key Metrics for Online Casino Success",
    category: "Online Casino",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-3.png",
  },
  {
    slug: "new-games-added",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-1.png",
  },
  {
    slug: "new-games-added-2",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-2.png",
  },
  {
    slug: "new-games-added-3",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-3.png",
  },
  {
    slug: "new-games-added-4",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-1.png",
  },
  {
    slug: "new-games-added-5",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-2.png",
  },
  {
    slug: "new-games-added-6",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-3.png",
  },
  {
    slug: "new-games-added-7",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-1.png",
  },
  {
    slug: "entrepreneurs-guide-2",
    title: "The Entrepreneur’s Guide to Launching a Successful Online Casino",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-2.png",
  },
  {
    slug: "new-games-added-8",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-3.png",
  },
  {
    slug: "new-games-added-9",
    title: "New Games Added: 24 Games from 4 Different Providers",
    category: "Risk Management",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-1.png",
  },
  {
    slug: "starting-gambling-2026-2",
    title: "Starting an Online Gambling Business in 2026",
    category: "Online Casino",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-2.png",
    play: true,
  },
  {
    slug: "key-metrics-2",
    title: "Understanding Key Metrics for Online Casino Success",
    category: "Online Casino",
    date: "10 Jul 2026",
    readTime: "14 min",
    author: "Kevin D.",
    image: "/images/knowledge/post-3.png",
  },
]

export const articleBody = `Praesent diam sem, accumsan non maximus at, placerat nec mauris. Nunc eu pulvinar lectus. Donec aliquam massa ac leo tincidunt auctor. Ut auctor turpis elit, nec lacinia mauris iaculis a. Etiam tincidunt velit eget rhoncus mattis. Etiam finibus, ex quis venenatis pharetra, neque ex malesuada metus, eget sagittis neque justo id tortor. Aliquam erat volutpat. Suspendisse efficitur leo elit, non blandit dui sagittis at. Fusce efficitur, tortor maximus consectetur gravida, tortor leo consectetur felis, in bibendum velit mi eget urna. Curabitur condimentum ullamcorper tellus, vitae accumsan libero pharetra sed. Aliquam lacus nulla, convallis ut arcu sed, ornare interdum ligula. Curabitur vitae ornare leo. Aenean et cursus eros. Quisque massa ex, tempor in fermentum quis, interdum vel lacus. Cras mi dolor, venenatis eget mollis eget, hendrerit eget sapien. Fusce condimentum placerat tortor nec lobortis. Morbi vel odio mi. Aliquam ullamcorper sit amet leo lobortis hendrerit. Mauris sed efficitur arcu. Ut viverra libero ac varius ullamcorper. Ut tincidunt, ipsum et pulvinar imperdiet, nunc tortor tempor ex, luctus pellentesque purus risus ut nibh. Sed ut risus leo.`

export const articleToc = [
  { id: "key-metrics", label: "Understanding Key Metrics for Online Casino Success" },
  { id: "starting-2026", label: "Starting an Online Gambling Business in 2026" },
  { id: "suspendisse", label: "Suspendisse egestas purus a congue" },
  {
    id: "vivamus",
    label:
      "Vivamus non interdum eros, a dapibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  { id: "accumsan", label: "In accumsan roncus" },
]

export function getKnowledgePost(slug: string) {
  if (featuredPost.slug === slug) return featuredPost
  return knowledgePosts.find((post) => post.slug === slug)
}
