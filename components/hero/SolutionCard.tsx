import Link from "next/link"

/* eslint-disable @next/next/no-img-element */

type SolutionCardProps = {
  title: string
  description: string
  href: string
  icon: string
  iconBg: string
  badge?: string
}

export function SolutionCard({
  title,
  description,
  href,
  icon,
  iconBg,
  badge,
}: SolutionCardProps) {
  return (
    <article className="SolutionCard">
      {badge ? <span className="SolutionCard-badge">{badge}</span> : null}
      <div className="SolutionCard-icon" style={{ background: iconBg }}>
        <img src={icon} alt="" />
      </div>
      <div className="SolutionCard-body">
        <h3 className="SolutionCard-title">{title}</h3>
        <p className="SolutionCard-text">{description}</p>
        <Link href={href} className="SolutionCard-link">
          Explore Now
        </Link>
      </div>
    </article>
  )
}
