import { Suspense } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import RoomTariff from "./components/RoomTariff";
import ThemePackages from "./components/ThemePackages";
import OtherIslandPackages from "./components/OtherIslandPackages";
import Facilities from "./components/Facilities";

const PackagesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <HeroSection />
      <RoomTariff />
      <ThemePackages />
      <OtherIslandPackages />
      <Facilities />
      <Footer />
    </Suspense>
  );
};

export default PackagesPage;
