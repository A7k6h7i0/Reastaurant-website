import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TravelPackage } from "../../../data/packages";

type Props = {
  pkg: TravelPackage;
};

const PackageCard = ({ pkg }: Props) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden border"
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{pkg.title}</h3>
        <p className="text-sm text-gray-600">{pkg.nights}</p>

        <div className="pt-4">
          <button
            onClick={() => navigate(`/book/${pkg.id}`)}
            className="px-5 py-2 bg-forest text-white rounded-full"
          >
            View Details & Book
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
