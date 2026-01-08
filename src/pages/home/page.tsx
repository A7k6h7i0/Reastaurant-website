
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import WhyDewDale from './components/WhyDewDale';
import ExperienceHighlights from './components/ExperienceHighlights';
import RoomsPreview from './components/RoomsPreview';
import ThemePackages from './components/ThemePackages';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhyDewDale />
        <ExperienceHighlights />
        <RoomsPreview />
        <ThemePackages />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
