import { gameProviders } from "@/data/providers"

export function Providers({ compact = false }: { compact?: boolean }) {
  const logos = [...gameProviders, ...gameProviders]

  return (
    <section
      className={`Providers${compact ? " Providers--compact" : ""}`}
      id="game-providers"
    >
      <div className="container">
        {compact ? null : (
          <div className="Providers-copy">
            <h2 className="Providers-title">Game Providers</h2>
            <p className="Providers-text">
              Our expert team can walk you through these features and much more.
              Would you like to schedule a meeting?
            </p>
          </div>
        )}

        <div className="Providers-row">
          <div className="Providers-stat">
            <span className="Providers-statValue">180+</span>
            <span className="Providers-statLabel">
              Oyun sağlayıcı
              <br />
              ortakları
            </span>
          </div>

          <div className="Providers-marquee" aria-hidden="true">
            <div className="Providers-track">
              {logos.map((provider, index) => (
                <div key={`${provider.name}-${index}`} className="Providers-logo">
                  {"mask" in provider && provider.mask ? (
                    <span
                      className="Providers-logoMask"
                      style={{
                        WebkitMaskImage: `url(${provider.src})`,
                        maskImage: `url(${provider.src})`,
                      }}
                    />
                  ) : "word" in provider && provider.word ? (
                    <span className="Providers-logoPair">
                      <img src={provider.src} alt="" />
                      <img src={provider.word} alt="" />
                    </span>
                  ) : (
                    <img
                      src={provider.src}
                      alt=""
                      style={
                        "maxHeight" in provider
                          ? { maxHeight: provider.maxHeight }
                          : undefined
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
