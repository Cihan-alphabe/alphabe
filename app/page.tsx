import { Hero } from "@/components/hero/Hero"
import { Intro } from "@/components/intro/Intro"
import { Features } from "@/components/features/Features"
import { WhiteLabel } from "@/components/whitelabel/WhiteLabel"
import { Platform } from "@/components/platform/Platform"
import { Risk } from "@/components/risk/Risk"
import { Providers } from "@/components/providers/Providers"

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Features />
      <WhiteLabel />
      <Platform />
      <Risk />
      <Providers />
    </main>
  )
}
