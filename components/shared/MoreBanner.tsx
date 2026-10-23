import Link from "next/link"

/* eslint-disable @next/next/no-img-element */

export function MoreBanner() {
  return (
    <aside className="MoreBanner">
      <img
        className="MoreBanner-grid"
        src="/images/casino/more-grid.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="MoreBanner-copy">
        <div className="MoreBanner-icon">
          <img src="/images/casino/more.svg" alt="" />
        </div>
        <div>
          <h3 className="MoreBanner-title">And much more</h3>
          <p className="MoreBanner-text">
            We’d love to schedule a meeting to walk you through even more
            features.
            <br />
            We look forward to hearing from you!
          </p>
        </div>
      </div>
      <div className="MoreBanner-cta">
        <Link href="/lets-to-business" className="Btn">
          Let’s to Business
        </Link>
        <p className="MoreBanner-note">We’re excited to connect!</p>
      </div>
    </aside>
  )
}
