import ActionSection from './components/ActionSection/ActionSection'
import HeroBanner from './components/Hero/HeroBanner'
import Navbar from './components/Navigation/Navbar'
import WhyHelpSection from './components/WhyHelp/WhyHelpSection'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />
      <ActionSection />
      <WhyHelpSection />
      <Footer />
    </div>
  )
}