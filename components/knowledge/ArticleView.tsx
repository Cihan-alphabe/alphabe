import Link from "next/link"

import {
  articleBody,
  articleToc,
  knowledgePosts,
  type KnowledgePost,
} from "@/data/knowledge"
import { KnowledgeCard } from "@/components/knowledge/KnowledgeCard"
import { MoreBanner } from "@/components/shared/MoreBanner"

/* eslint-disable @next/next/no-img-element */

function categoryIcon(category: KnowledgePost["category"]) {
  if (category === "Online Casino") return "/images/knowledge/cat-casino.svg"
  return "/images/knowledge/cat-risk.svg"
}

function categoryClass(category: KnowledgePost["category"]) {
  return category === "Online Casino"
    ? " Article-cat--casino"
    : " Article-cat--risk"
}

export function ArticleView({ post }: { post: KnowledgePost }) {
  const similar = knowledgePosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className="Article">
      <div className="container">
        <div className="Article-promo">
          <p className="Article-promoLabel">Updates</p>
          <Link href="/casino-platform" className="Article-promoLink">
            Explore our white-label solution.
          </Link>
          <div className="Article-promoNav">
            <button type="button" aria-label="Previous update">
              <img src="/images/knowledge/page-prev.svg" alt="" />
            </button>
            <button type="button" aria-label="Next update">
              <img src="/images/knowledge/page-next.svg" alt="" />
            </button>
          </div>
        </div>

        <nav className="Article-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span />
          <Link href="/knowledge">Knowladge Base</Link>
          <span />
          <em>{post.title}</em>
        </nav>

        <div className="Article-layout">
          <aside className="Article-aside">
            <div className="Article-authorCard">
              <small className="Article-postCount">24 Post</small>
              <div className="Article-authorCardBody">
                <img src="/images/knowledge/avatar.png" alt="" />
                <div>
                  <span>
                    <small>Author</small>
                    Victor J.
                  </span>
                  <b>Head of Casino</b>
                </div>
              </div>
            </div>
            <p className="Article-tocLabel">CONTENT</p>
            <ol className="Article-toc">
              {articleToc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="Article-main">
            <div className={`Article-cat${categoryClass(post.category)}`}>
              <img src={categoryIcon(post.category)} alt="" />
              {post.category}
            </div>
            <h1 className="Article-title">{post.title}</h1>
            <div className="Article-meta">
              <div className="KbCard-author">
                <img src="/images/knowledge/avatar.png" alt="" />
                <span>
                  <small>Author</small>
                  Victor J.
                </span>
              </div>
              <span className="Article-metaSep" />
              <span className="KbCard-date">
                <small>Released date</small>
                {post.date}
              </span>
              <span className="Article-metaSep" />
              <span className="KbCard-read">
                <small>Read Time</small>
                {post.readTime}
              </span>
            </div>

            <section id="key-metrics" className="Article-section">
              <h2>Understanding Key Metrics for Online Casino Success</h2>
              <p>{articleBody}</p>
            </section>

            <img
              className="Article-figure"
              src="/images/knowledge/article-chart.png"
              alt=""
            />

            <section id="starting-2026" className="Article-section">
              <h2>Starting an Online Gambling Business in 2026</h2>
              <p>{articleBody}</p>
            </section>

            <span id="suspendisse" />
            <span id="vivamus" />
            <span id="accumsan" />
          </article>
        </div>

        <MoreBanner />
      </div>

      <section className="Article-similar">
        <div className="container">
          <h2>Similiar Posts</h2>
          <div className="Kb-grid Kb-grid--similar">
            {similar.map((item) => (
              <KnowledgeCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
