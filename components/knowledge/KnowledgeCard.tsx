import Link from "next/link"

import type { KnowledgePost } from "@/data/knowledge"

/* eslint-disable @next/next/no-img-element */

function categoryIcon(category: KnowledgePost["category"]) {
  if (category === "Online Casino") return "/images/knowledge/cat-casino.svg"
  return "/images/knowledge/cat-risk.svg"
}

function categoryClass(category: KnowledgePost["category"]) {
  return category === "Online Casino" ? "" : " KbCard-cat--risk"
}

export function KnowledgeCard({ post }: { post: KnowledgePost }) {
  return (
    <article className="KbCard">
      <Link href={`/knowledge/${post.slug}`} className="KbCard-media">
        <img src={post.image} alt="" />
        {post.play ? (
          <span className="KbCard-play">
            <img src="/images/knowledge/play.svg" alt="" />
          </span>
        ) : null}
      </Link>
      <div className="KbCard-body">
        <div className="KbCard-meta">
          <span className={`KbCard-cat${categoryClass(post.category)}`}>
            <img src={categoryIcon(post.category)} alt="" />
            {post.category}
          </span>
          <span className="KbCard-date">
            <small>Released date</small>
            {post.date}
          </span>
        </div>
        <Link href={`/knowledge/${post.slug}`} className="KbCard-title">
          {post.title}
        </Link>
        <div className="KbCard-foot">
          <div className="KbCard-author">
            <img src="/images/knowledge/avatar.png" alt="" />
            <span>
              <small>Author</small>
              {post.author}
            </span>
          </div>
          <span className="KbCard-read">
            <small>Read Time</small>
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  )
}
