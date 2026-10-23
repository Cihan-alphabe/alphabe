"use client"

import { useState } from "react"

import {
  sportsLead,
  sportsOverview,
  sportsOverviewLead,
  sportsPackageLead,
  sportsPackages,
  sportsPanels,
} from "@/data/sportsbook"
import { MoreBanner } from "@/components/shared/MoreBanner"

/* eslint-disable @next/next/no-img-element */

export function SportsbookPage() {
  const [active, setActive] = useState(0)

  return (
    <main className="Sportsbook">
      <section className="Sportsbook-hero">
        <img
          className="Sportsbook-ball Sportsbook-ball--left"
          src="/images/sportsbook/ball-left.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="Sportsbook-ball Sportsbook-ball--right"
          src="/images/sportsbook/ball-right.png"
          alt=""
          aria-hidden="true"
        />
        <img
          className="Sportsbook-ball Sportsbook-ball--small"
          src="/images/sportsbook/ball-small.png"
          alt=""
          aria-hidden="true"
        />

        <div className="container Sportsbook-heroCopy">
          <p className="Sportsbook-kicker">Full-service provider for</p>
          <h1 className="Sportsbook-title">Complete Turnkey Sport Platform</h1>
          <p className="Sportsbook-lead">{sportsLead}</p>
        </div>

        <div className="container Sportsbook-dashboardWrap">
          <img
            className="Sportsbook-dashboard"
            src="/images/sportsbook/dashboard.png"
            alt="Alphabe sportsbook dashboard"
          />
          <div className="Sportsbook-dashboardFade" aria-hidden="true" />
        </div>
      </section>

      <section className="Sportsbook-overview">
        <div className="container">
          <div className="Sportsbook-overviewCopy">
            <h2>Sport Platform Overview</h2>
            <p>{sportsOverviewLead}</p>
          </div>

          <div className="Sportsbook-features">
            {sportsOverview.map((item) => (
              <article key={item.title} className="Sportsbook-feature">
                <div className="Sportsbook-featureIcon" aria-hidden="true">
                  <img src="/images/sportsbook/shield.png" alt="" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="Sportsbook-panels">
            {sportsPanels.map((item) => (
              <article key={item.title} className="Sportsbook-panel">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="Sportsbook-stadium" aria-hidden="true">
        <img src="/images/sportsbook/stadium.png" alt="" />
      </section>

      <section className="Sportsbook-package">
        <div className="container">
          <div className="Sportsbook-packageHead">
            <h2>What&apos;s Included in the Turnkey Sportsbook Package?</h2>
            <p>{sportsPackageLead}</p>
          </div>

          <div className="Sportsbook-carousel" aria-roledescription="carousel">
            {sportsPackages.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`Sportsbook-slide${index === active ? " is-active" : ""}`}
              >
                <img src={item.art} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="Sportsbook-dots" role="tablist" aria-label="Package slides">
            {sportsPackages.map((item, index) => (
              <button
                key={`${item.title}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={index === active ? "is-active" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>

          <MoreBanner />
        </div>
      </section>
    </main>
  )
}
