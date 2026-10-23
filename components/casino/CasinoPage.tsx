import { casinoFeatures, casinoOverview, casinoPanels } from "@/data/casino"
import { Providers } from "@/components/providers/Providers"
import { MoreBanner } from "@/components/shared/MoreBanner"
import { CasinoFeatureArt } from "@/components/casino/CasinoFeatureArt"

/* eslint-disable @next/next/no-img-element */

export function CasinoPage() {
  return (
    <main className="Casino">
      <section className="Casino-hero">
        <div className="Casino-heroGrid" aria-hidden="true" />
        <div className="Casino-heroGlow Casino-heroGlow--a" aria-hidden="true" />
        <div className="Casino-heroGlow Casino-heroGlow--b" aria-hidden="true" />
        <div className="container Casino-heroCopy">
          <p className="Casino-kicker">Full-service provider for</p>
          <h1 className="Casino-title">Complete Turnkey Casino Platform</h1>
          <p className="Casino-lead">
            Sağlam kumarhane yazılımını, Oyun Toplayıcı aracılığıyla 40.000’den
            fazla oyuna erişimi ve ödeme entegrasyonlarını bir araya getirerek
            operatörlerin kumarhane işletmelerinin tüm yönlerini tek bir
            ekosistemden yönetmelerini sağlar.
          </p>
        </div>
        <div className="container Casino-dashboardWrap">
          <img
            className="Casino-dashboard"
            src="/images/casino/dashboard.png"
            alt="Alphabe casino dashboard"
          />
          <div className="Casino-dashboardFade" aria-hidden="true" />
        </div>
      </section>

      <section className="Casino-overview">
        <div className="container">
          <div className="Casino-overviewCopy">
            <h2>Casino Platform Overview</h2>
            <p>
              Casino ve Live Casino’yu tek platformda birleştiren hazır
              altyapımızla markanıza özel bir deneyim oluşturun. Esnek
              özelleştirme seçenekleri ve kullanıcı dostu arayüzlerle
              oyuncularınıza kesintisiz bir oyun deneyimi sunun.
            </p>
          </div>

          <img
            className="Casino-overviewGlow"
            src="/images/casino/overview-glow.svg"
            alt=""
            aria-hidden="true"
          />

          <div className="Casino-games">
            {casinoOverview.map((item) => (
              <article key={item.title} className="Casino-game">
                <img
                  src={item.icon}
                  alt=""
                  width={item.iconSize}
                  height={item.iconSize}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="Casino-panels">
            {casinoPanels.map((item) => (
              <article key={item.title} className="Casino-panel">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Providers compact />

      <section className="Casino-details">
        <div className="container">
          <div className="Casino-detailsCopy">
            <h2>
              We’ve Thought Through and Designed Every Last Detail.
            </h2>
            <p>
              We’ve meticulously crafted every line of code and every pixel to
              bring it to life. Now, it’s time to move forward together! Here
              are some of the standout features.
            </p>
          </div>

          <div className="Casino-features">
            {casinoFeatures.map((item) => (
              <article key={item.id} className="Casino-feature">
                <CasinoFeatureArt variant={item.id} src={item.art} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <MoreBanner />
        </div>
      </section>
    </main>
  )
}
