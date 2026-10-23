/* eslint-disable @next/next/no-img-element */

const arts = {
  gift: "/images/whitelabel/gift.png",
  medal: "/images/whitelabel/medal.png",
  arrows: "/images/whitelabel/arrows.png",
} as const

export type BonusArtKind = keyof typeof arts

export function BonusArt({ kind }: { kind: BonusArtKind }) {
  return (
    <>
      <span className="BonusCard-glow" aria-hidden="true">
        <img src="/images/whitelabel/icon-glow.svg" alt="" />
      </span>
      <span className={`BonusCard-icon BonusCard-icon--${kind}`}>
        <img src={arts[kind]} alt="" />
      </span>
    </>
  )
}
