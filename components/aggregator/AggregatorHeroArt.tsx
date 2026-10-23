import { gameProviders } from "@/data/providers"

/* eslint-disable @next/next/no-img-element */

const ORBIT = [
  { top: "8%", left: "42%" },
  { top: "18%", left: "68%" },
  { top: "38%", left: "82%" },
  { top: "62%", left: "78%" },
  { top: "78%", left: "58%" },
  { top: "82%", left: "32%" },
  { top: "68%", left: "12%" },
  { top: "42%", left: "6%" },
  { top: "18%", left: "14%" },
  { top: "28%", left: "48%" },
  { top: "52%", left: "62%" },
  { top: "58%", left: "38%" },
] as const

export function AggregatorHeroArt() {
  const logos = gameProviders.slice(0, ORBIT.length)

  return (
    <div className="Aggregator-art" aria-hidden="true">
      <img
        className="Aggregator-artBg"
        src="/images/aggregator/hero-bg.png"
        alt=""
      />
      <div className="Aggregator-orbit">
        <div className="Aggregator-orbitRing Aggregator-orbitRing--a" />
        <div className="Aggregator-orbitRing Aggregator-orbitRing--b" />
        <div className="Aggregator-orbitCore">
          <span>G360</span>
        </div>
        {logos.map((provider, index) => (
          <span
            key={provider.name}
            className="Aggregator-orbitLogo"
            style={ORBIT[index]}
          >
            <img src={provider.src} alt="" />
          </span>
        ))}
      </div>
    </div>
  )
}
