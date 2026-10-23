import Link from "next/link"

import {
  companyBody,
  companyIntro,
  companyStats,
  companyValues,
} from "@/data/company"

/* eslint-disable @next/next/no-img-element */

export function CompanyPage() {
  return (
    <main className="Company">
      <div className="Company-decor" aria-hidden="true">
        <img
          className="Company-grid"
          src="/images/company/hero-grid.svg"
          alt=""
        />
        <img
          className="Company-glow"
          src="/images/company/hero-glow.svg"
          alt=""
        />
      </div>

      <div className="container">
        <section className="Company-hero">
          <p className="Company-eyebrow">ABOUT US</p>
          <div className="Company-heroRow">
            <div className="Company-heroMain">
              <h1 className="Company-title">
                Shaped by{" "}
                <span className="Company-titleMark">
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                  <i aria-hidden="true" />
                  innovation
                </span>
                , we code{" "}
                <span className="Company-titleAccent">
                  with love and serve with joy.
                </span>
              </h1>
              <Link href="/lets-to-business" className="Btn Company-cta">
                Let’s to Business
              </Link>
            </div>
            <p className="Company-intro">{companyIntro}</p>
          </div>
        </section>

        <section className="Company-gallery" aria-label="Office">
          <img src="/images/company/office-1.png" alt="" />
          <img src="/images/company/office-2.png" alt="" />
        </section>

        <section className="Company-stats" aria-label="Company stats">
          {companyStats.map((item, index) => (
            <div key={item.value} className="Company-stat">
              {index > 0 ? <span className="Company-statSep" /> : null}
              <strong>{item.value}</strong>
              <span>
                {item.label.map((line) => (
                  <em key={line}>{line}</em>
                ))}
              </span>
            </div>
          ))}
        </section>
      </div>

      <hr className="Company-rule" />

      <div className="container">
        <section className="Company-about">
          <div className="Company-aboutHead">
            <h2>What we do</h2>
            <img src="/images/company/arrow.svg" alt="" />
          </div>
          <div className="Company-aboutCopy">
            <p className="Company-aboutLabel">About Alphabe</p>
            {companyBody.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>

      <hr className="Company-rule" />

      <section className="Company-values">
        <div className="container">
          <div className="Company-valuesHead">
            <p>Our values</p>
            <h2>Built on credibility, focus, and innovation</h2>
          </div>
          <div className="Company-valuesGrid">
            {companyValues.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
