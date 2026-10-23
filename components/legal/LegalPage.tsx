import Link from "next/link"

import {
  legalNav,
  privacySections,
  termsSections,
  type LegalPageId,
} from "@/data/legal"

type Section = {
  title: string
  paragraphs: readonly string[]
  bullets?: readonly string[]
}

export function LegalPage({ page }: { page: LegalPageId }) {
  const title = page === "privacy" ? "Privacy Policy" : "Terms of Use"
  const sections: readonly Section[] =
    page === "privacy" ? privacySections : termsSections

  return (
    <main className="Legal">
      <div className="Legal-decor" aria-hidden="true">
        <img src="/images/career/hero-grid.svg" alt="" />
      </div>

      <div className="container Legal-layout">
        <aside className="Legal-nav" aria-label="Legal">
          {legalNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={page === item.id ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </aside>

        <article className="Legal-main">
          <h1>{title}</h1>
          <div className="Legal-sections">
            {sections.map((section, index) => (
              <section key={`${section.title}-${index}`}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item.slice(0, 48)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
