/* eslint-disable @next/next/no-img-element */

export function CasinoFeatureArt({
  variant,
  src,
}: {
  variant: string
  src: string
}) {
  return (
    <div className={`CasinoArt CasinoArt--${variant}`} aria-hidden="true">
      <img src={src} alt="" />
    </div>
  )
}
