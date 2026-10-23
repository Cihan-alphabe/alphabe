"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import {
  featuredPost,
  knowledgeFilters,
  knowledgePosts,
  type KnowledgeCategory,
} from "@/data/knowledge"
import { KnowledgeCard } from "@/components/knowledge/KnowledgeCard"

/* eslint-disable @next/next/no-img-element */

const PAGE_SIZE = 15

export function KnowledgeList() {
  const [filter, setFilter] = useState<KnowledgeCategory>("All")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (filter === "All") return knowledgePosts
    return knowledgePosts.filter((post) => post.category === filter)
  }, [filter])

  const items = filtered.slice(0, PAGE_SIZE)

  return (
    <main className="Kb">
      <section className="Kb-hero">
        <div className="Kb-heroGlow" aria-hidden="true" />
        <div className="container">
          <div className="Kb-heroInner">
            <div className="Kb-heroCopy">
              <p className="Kb-kicker">KNOWLADGE BASE</p>
              <h1 className="Kb-title">Activity & Updates</h1>
            </div>
            <div className="Kb-introWrap">
              <span className="Kb-introLine" aria-hidden="true" />
              <p className="Kb-intro">
                Our biggest challenge is ensuring that we consistently design
                and develop products that help you run your business better.
              </p>
            </div>
          </div>
          <div className="Kb-heroDivider" aria-hidden="true" />
          <div className="Kb-filters">
            {knowledgeFilters.map((item) => (
              <button
                key={item}
                type="button"
                className={`Kb-filter${filter === item ? " is-active" : ""}`}
                onClick={() => {
                  setFilter(item)
                  setPage(1)
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="Kb-list">
        <div className="container">
          {filter === "All" || featuredPost.category === filter ? (
            <article className="KbFeatured">
              <Link
                href={`/knowledge/${featuredPost.slug}`}
                className="KbFeatured-media"
              >
                <img src={featuredPost.image} alt="" />
              </Link>
              <div className="KbFeatured-body">
                <div className="KbFeatured-tags">
                  <span className="KbCard-cat">
                    <img src="/images/knowledge/cat-casino.svg" alt="" />
                    {featuredPost.category}
                  </span>
                  <span className="KbFeatured-badge">LATEST UPDATE</span>
                </div>
                <Link
                  href={`/knowledge/${featuredPost.slug}`}
                  className="KbFeatured-title"
                >
                  {featuredPost.title}
                </Link>
                <div className="KbFeatured-foot">
                  <div className="KbCard-author">
                    <img src="/images/knowledge/avatar.png" alt="" />
                    <span>
                      <small>Author</small>
                      {featuredPost.author}
                    </span>
                  </div>
                  <span className="KbFeatured-sep" />
                  <span className="KbCard-date">
                    <small>Released date</small>
                    {featuredPost.date}
                  </span>
                  <span className="KbFeatured-sep" />
                  <span className="KbCard-read">
                    <small>Read Time</small>
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </article>
          ) : null}

          <div className="Kb-grid">
            {items.map((post) => (
              <KnowledgeCard key={post.slug} post={post} />
            ))}
          </div>

          <nav className="Kb-pages" aria-label="Pagination">
            <button
              type="button"
              className="Kb-page Kb-page--nav"
              aria-label="Previous page"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              <img src="/images/knowledge/page-prev.svg" alt="" />
            </button>
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                type="button"
                className={`Kb-page${page === item ? " is-active" : ""}`}
                onClick={() => setPage(item)}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              className="Kb-page Kb-page--nav"
              aria-label="Next page"
              onClick={() => setPage((current) => Math.min(3, current + 1))}
            >
              <img src="/images/knowledge/page-next.svg" alt="" />
            </button>
          </nav>
        </div>
      </section>
    </main>
  )
}
