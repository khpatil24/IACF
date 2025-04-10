import { Routes, Route } from 'react-router-dom';
import ActionSection from './components/ActionSection/ActionSection';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/Hero/HeroBanner';
import Navbar from './components/Navigation/Navbar';
import WhyHelpSection from './components/WhyHelp/WhyHelpSection';
import AboutUs from './pages/AboutUs/AboutUs';
import SpeciesPage from './pages/Species/SpeciesPages'; // Example page for routing

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={
          <>
            <HeroBanner />
            <ActionSection />
            <WhyHelpSection />
          </>
        } />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}