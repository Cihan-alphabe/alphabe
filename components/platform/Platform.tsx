import Link from "next/link"

import { platformCards } from "@/data/platform"
import { PlatformVisual } from "@/components/platform/PlatformVisual"

export function Platform() {
  return (
    <section className="Platform" id="casino-platform">
      <div className="container">
        <div className="Platform-head">
          <h2 className="Platform-title">
            Full Control Over Your Platform Design
          </h2>
          <p className="Platform-text">
            Customize layouts, modules, colors, and content directly through
            the CMS. Arrange sections in different column structures and add
            the modules you need to any page.
          </p>
          <div className="Platform-badge" aria-hidden="true">
            <span>Flexible Design</span>
            <strong>build around</strong>
            <em>your brand</em>
          </div>
        </div>

        <div className="Platform-grid">
          {platformCards.map((card) => (
            <article key={card.title} className="PlatformCard">
              <PlatformVisual visual={card.visual} />
              <div className="PlatformCard-body">
                <h3 className="PlatformCard-title">{card.title}</h3>
                <p className="PlatformCard-text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="Platform-cta">
          <h3 className="Platform-ctaTitle">
            Make your <em>brand</em> stand out with even more features.
          </h3>
          <p className="Platform-ctaText">
            Our expert team can walk you through these features and much more.
            Would you like to schedule a meeting?
          </p>
          <Link href="#contact" className="Btn">
            Let’s to Business
          </Link>
        </div>
      </div>
    </section>
  )
}
