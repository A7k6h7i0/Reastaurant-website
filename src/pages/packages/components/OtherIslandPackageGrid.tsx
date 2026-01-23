import OtherIslandPackageCard from "./OtherIslandPackageCard";
import { otherIslandPackages } from "../../../data/otherIslandPackages";

const OtherIslandPackageGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 space-y-6">

        <h2 className="text-4xl font-serif text-center">
          Baratang Island with Other Islands of Andaman
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Carefully curated leisure tour packages combining Baratang Island
          with Port Blair and Havelock Island, offering Luxury, Executive
          and Economy travel experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
          {otherIslandPackages.map((pkg) => (
            <OtherIslandPackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherIslandPackageGrid;
