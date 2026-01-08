import { Suspense } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import RoomTariff from './components/RoomTariff';
import ThemePackages from './components/ThemePackages';
import Facilities from './components/Facilities';

const PackagesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <RoomTariff />
        <ThemePackages />
        <Facilities />
        <Footer />
      </div>
    </Suspense>
  );
};

export default PackagesPage;
