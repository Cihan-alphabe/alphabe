/* eslint-disable @next/next/no-img-element */

import { bonusCards } from "@/data/whitelabel"
import { BonusArt } from "@/components/whitelabel/BonusArt"

export function WhiteLabel() {
  return (
    <section className="WhiteLabel" id="whitelabel">
      <div className="container WhiteLabel-intro">
        <p className="WhiteLabel-kicker">Advanced Structure & Features</p>
        <h2 className="WhiteLabel-title">
          Launch your brand with our White Label solution!
        </h2>
        <p className="WhiteLabel-text">
          Alphabe brings together the technology, flexibility, and support you
          need to scale your operation—all within one powerful iGaming
          platform.
        </p>
      </div>

      <div className="WhiteLabel-panelWrap">
        <div className="WhiteLabel-panel">
          <div className="WhiteLabel-grid" aria-hidden="true">
            <img src="/images/whitelabel/panel-grid.svg" alt="" />
          </div>
          <div className="WhiteLabel-glow" aria-hidden="true">
            <img src="/images/whitelabel/panel-glow.svg" alt="" />
          </div>

          <div className="WhiteLabel-head">
            <div className="WhiteLabel-headCopy">
              <p className="WhiteLabel-eyebrow">
                We’ve covered every step in detail.
              </p>
              <h3 className="WhiteLabel-panelTitle">
                Bonus & Loyalty <span>System</span>
              </h3>
            </div>
            <p className="WhiteLabel-panelText">
              Boost player loyalty with advanced bonus and loyalty tools.
              Deliver a more engaging user experience with flexible rules,
              customizable campaigns, and powerful balance management.
            </p>
          </div>

          <div className="WhiteLabel-pot" aria-hidden="true">
            <span className="WhiteLabel-potGlow">
              <img src="/images/whitelabel/pot-glow.svg" alt="" />
            </span>
            <img
              className="WhiteLabel-potImg"
              src="/images/whitelabel/pot.png"
              alt=""
            />
            <p className="WhiteLabel-potCaption">
              <span>THE ULTIMATE</span>
              <span>BETTING PLATFORM</span>
            </p>
          </div>

          <div className="WhiteLabel-cards">
            {bonusCards.map((card) => (
              <article
                key={card.title}
                className={`BonusCard BonusCard--${card.art}`}
              >
                <div className="BonusCard-art">
                  <BonusArt kind={card.art} />
                </div>
                <h4 className="BonusCard-title">{card.title}</h4>
                <p className="BonusCard-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
