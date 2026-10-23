import Image from "next/image"
import Link from "next/link"

import { featuredSolutions } from "@/data/navigation"
import { SolutionCard } from "@/components/hero/SolutionCard"

/* eslint-disable @next/next/no-img-element */

export function Hero() {
  return (
    <section className="Hero">
      <div className="Hero-art" aria-hidden="true">
        <Image
          className="Hero-artImg"
          src="/images/hero/banner.jpg"
          alt=""
          width={3840}
          height={1850}
          priority
        />
        <div className="Hero-grid" />
      </div>

      <div className="Hero-body container">
        <div className="Hero-copy">
          <p className="Hero-kicker">Full-service provider for</p>
          <h1 className="Hero-title">Casino and Sportsbook</h1>
          <p className="Hero-text">
            Scalable casino and sportsbook infrastructure with seamless
            integrations and powerful technology to launch, manage, and grow
            your gaming business.
          </p>
          <div className="Hero-actions">
            <Link href="#products" className="Hero-btnProducts">
              <span className="Hero-btnGlow Hero-btnGlow--a" />
              <span className="Hero-btnGlow Hero-btnGlow--b" />
              Products
              <img src="/images/icons/arrow-right.svg" alt="" />
            </Link>
            <Link href="/lets-to-business" className="Hero-btnContact">
              Contact now
              <img src="/images/icons/arrow-up-right.svg" alt="" />
            </Link>
          </div>
        </div>

        <div>
          <div className="Hero-solutionsHead">
            Featured Solutions
            <img src="/images/icons/arrow-up-right.svg" alt="" />
          </div>
          <div className="Hero-cards">
            {featuredSolutions.map((item) => (
              <SolutionCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
