import Image from "next/image"

import { introStats } from "@/data/intro"

export function Intro() {
  return (
    <section className="Intro">
      <div className="Intro-art" aria-hidden="true">
        <Image
          src="/images/intro/bag.png"
          alt=""
          width={692}
          height={473}
        />
      </div>

      <div className="container Intro-inner">
        <div className="Intro-top">
          <h2 className="Intro-title">
            <span className="Intro-titleLight">A Powerful</span>
            <span>New Force in iGaming</span>
          </h2>
          <p className="Intro-text">
            Dreaming of running your own online casino and sportsbook without
            worrying about code, regulations, or payment complexities? Alphabe
            is the iGaming software provider that handles it all for you.
          </p>
        </div>

        <div className="Intro-rule" />

        <div className="Intro-stats">
          {introStats.map((stat) => (
            <div key={stat.value} className="Intro-stat">
              <span className="Intro-statValue">{stat.value}</span>
              <span className="Intro-statLabel">
                {stat.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
