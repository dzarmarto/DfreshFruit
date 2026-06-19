import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import WhyFruit from './components/WhyFruit'
import Packages from './components/Packages'
import HowToOrder from './components/HowToOrder'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhyFruit />
        <Packages />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
