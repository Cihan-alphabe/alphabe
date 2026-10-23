import Link from "next/link"

import {
  aggregatorGames,
  aggregatorHighlights,
  aggregatorLead,
  aggregatorPanels,
} from "@/data/aggregator"
import { AggregatorHeroArt } from "@/components/aggregator/AggregatorHeroArt"
import { Providers } from "@/components/providers/Providers"

/* eslint-disable @next/next/no-img-element */

export function AggregatorPage() {
  return (
    <main className="Aggregator">
      <section className="Aggregator-hero">
        <img
          className="Aggregator-glow"
          src="/images/aggregator/hero-glow.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="container Aggregator-heroInner">
          <div className="Aggregator-heroCopy">
            <p className="Aggregator-kicker">Full-service provider for</p>
            <h1 className="Aggregator-title">Games360 Casino Aggregator</h1>
            <p className="Aggregator-lead">{aggregatorLead}</p>
            <div className="Aggregator-actions">
              <Link href="/lets-to-business" className="Aggregator-btnPrimary">
                Hizmet Almaya Başla
              </Link>
              <Link href="/lets-to-business" className="Aggregator-btnLink">
                Aggregator’a Katılın
              </Link>
            </div>
          </div>
          <AggregatorHeroArt />
        </div>

        <div className="container">
          <div className="Aggregator-highlights">
            {aggregatorHighlights.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Providers compact />

      <section className="Aggregator-features">
        <div className="container">
          <div className="Aggregator-games">
            {aggregatorGames.map((item) => (
              <article key={item.title} className="Aggregator-game">
                <img src={item.icon} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="Aggregator-panels">
            {aggregatorPanels.map((item) => (
              <article key={item.title} className="Aggregator-panel">
                <h3>
                  <span>{item.accent}</span>
                  {item.title.slice(item.accent.length)}
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
