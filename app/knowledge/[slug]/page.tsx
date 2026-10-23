import { notFound } from "next/navigation"

import {
  featuredPost,
  getKnowledgePost,
  knowledgePosts,
} from "@/data/knowledge"
import { ArticleView } from "@/components/knowledge/ArticleView"

export function generateStaticParams() {
  return [featuredPost, ...knowledgePosts].map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/knowledge/[slug]">) {
  const { slug } = await params
  const post = getKnowledgePost(slug)
  return {
    title: post ? `${post.title} | Alphabe` : "Knowladge Base | Alphabe",
  }
}

export default async function Page({
  params,
}: PageProps<"/knowledge/[slug]">) {
  const { slug } = await params
  const post = getKnowledgePost(slug)
  if (!post) notFound()
  return <ArticleView post={post} />
}
