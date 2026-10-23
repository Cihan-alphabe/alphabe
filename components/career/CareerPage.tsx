import { careerIntro, careerJobs, careerTeam } from "@/data/career"

/* eslint-disable @next/next/no-img-element */

export function CareerPage() {
  const rowA = careerTeam.slice(0, 3)
  const rowB = careerTeam.slice(3)

  return (
    <main className="Career">
      <div className="Career-decor" aria-hidden="true">
        <img className="Career-grid" src="/images/career/hero-grid.svg" alt="" />
        <img className="Career-glow Career-glow--a" src="/images/career/glow-a.svg" alt="" />
        <img className="Career-glow Career-glow--b" src="/images/career/glow-b.svg" alt="" />
      </div>

      <div className="container">
        <section className="Career-hero">
          <div className="Career-heroCopy">
            <h1>
              <strong>Careers</strong> at Alphabe
            </h1>
            <p>{careerIntro}</p>
          </div>

          <div className="Career-team" aria-label="Team">
            <div className="Career-teamRow">
              {rowA.map((person) => (
                <div key={`${person.name}-${person.role}`} className="Career-chip">
                  <img src={person.avatar} alt="" />
                  <span>
                    <b>{person.name}</b>
                    <small>{person.role}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="Career-teamRow Career-teamRow--offset">
              {rowB.map((person) => (
                <div key={`${person.name}-${person.role}`} className="Career-chip">
                  <img src={person.avatar} alt="" />
                  <span>
                    <b>{person.name}</b>
                    <small>{person.role}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="Career-jobs">
        <div className="container">
          <h2>Open positions ({careerJobs.length})</h2>
          <div className="Career-grid">
            {careerJobs.map((job) => (
              <article key={job.title} className="Career-card">
                <div className="Career-cardTop">
                  <h3>{job.title}</h3>
                  <div className="Career-meta">
                    <span className="Career-location">
                      <img src="/images/career/pin.svg" alt="" />
                      {job.location}
                    </span>
                    {job.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`Career-tag Career-tag--${tag.tone}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <p>{job.text}</p>
                </div>
                <div className="Career-cardFoot">
                  <span className="Career-date">
                    <img src="/images/career/calendar.svg" alt="" />
                    {job.date}
                  </span>
                  <a href={job.linkedin} className="Career-linkedin">
                    <img src="/images/career/linkedin.svg" alt="" />
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
