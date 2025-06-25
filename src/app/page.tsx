import PromoSection from '@/components/landing/Block1/Block1'
import HeroSection from '@/components/landing/Block2/Block2'
import HowItWorks from '@/components/landing/HowItWorks/HowItWorks'
import OptionBlock from '@/components/landing/option/OptionBlock'
import Advantages from '@/components/landing/Advantages/Advantages'
import Problems from '@/components/landing/Problems/Problems'
import SolutionBlock from '@/components/landing/SolutionBlock/SolutionBlock'
import FAQ from '@/components/landing/FAQ/FAQ'
import PromoBlock from '@/components/landing/PromoBlock/PromoBlock'
import Footer from '@/components/landing/Footer/Footer'

export default function HomePage() {
  return (
    <main className="pt-16">
      <PromoSection />
      <HeroSection />
      <HowItWorks />
      <OptionBlock />
      <Advantages />
      <Problems />
      <SolutionBlock />
      <FAQ />
      <PromoBlock />
      <Footer />
    </main>
  )
}
