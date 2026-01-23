import { Suspense } from "react";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import PackageGrid from "./components/PackageGrid";
import RoomTariff from "./components/RoomTariff";
import OtherIslandPackages from "./components/OtherIslandPackages";
import Facilities from "./components/Facilities";
import OtherIslandPackageGrid from "./components/OtherIslandPackageGrid";

const PackagesPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <HeroSection />

      {/* ✅ MakeMyTrip-style cards */}
      <RoomTariff />
      <PackageGrid />
      <OtherIslandPackageGrid />
      
      
      <Facilities />
      <Footer />
    </Suspense>
  );
};

export default PackagesPage;
