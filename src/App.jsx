import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MayorSection from './components/MayorSection'
import EmergencySection from './components/EmergencySection'
import EconomicDrivers from './components/EconomicDrivers'
import QuoteBanner from './components/QuoteBanner'
import MissionVision from './components/MissionVision'
import DeptsNews from './components/DeptsNews'
import GallerySection from './components/GallerySection'
import TendersSection from './components/TendersSection'
import LoadsheddingBanner from './components/LoadsheddingBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <header className="site-header">
        <TopBar />
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <MayorSection />
        <EmergencySection />
        <EconomicDrivers />
        <QuoteBanner />
        <MissionVision />
        <DeptsNews />
        <GallerySection />
        <TendersSection />
        <LoadsheddingBanner />
      </main>

      <Footer />
    </>
  )
}
