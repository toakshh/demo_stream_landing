import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CrossGameSection from '@/components/CrossGameSection'
import FragmentedMarketSection from '@/components/FragmentedMarketSection'
import TrustedBySection from '@/components/TrustedBySection'
import AvatarShowcaseSection from '@/components/AvatarShowcaseSection'
import TechStackSection from '@/components/TechStackSection'
import DeveloperToolsSection from '@/components/DeveloperToolsSection'
import IntegrationSection from '@/components/IntegrationSection'
import CommunitySection from '@/components/CommunitySection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 z-10">
        <HeroSection />
        <CrossGameSection />
        <FragmentedMarketSection />
        <TrustedBySection />
        {/* <AvatarShowcaseSection /> */}
        <TechStackSection />
        <DeveloperToolsSection />
        <IntegrationSection />
        <CommunitySection />
        <section className="w-full py-8 md:py-12" style={{ background: '#000' }}>
          <div className="w-[1px] h-32 md:h-64 m-auto bg-white" />
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}