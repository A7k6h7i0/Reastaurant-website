import PackageCard from "./PackageCard";
import { packages } from "../../../data/packages";

const PackageGrid = () => {
  return (
    <section className="py-24 bg-sand-light">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-12">
          Popular Tour Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;
