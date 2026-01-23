import { useNavigate } from "react-router-dom";
import { OtherIslandPackage } from "../../../data/otherIslandPackages";

const OtherIslandPackageCard = ({ pkg }: { pkg: OtherIslandPackage }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl shadow overflow-hidden">
      <img src={pkg.image} className="h-52 w-full object-cover" />

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{pkg.title}</h3>
        <p className="text-gray-600">{pkg.days}</p>

        <button
          onClick={() => navigate(`/book/other/${pkg.id}`)}
          className="mt-4 bg-forest text-white px-5 py-2 rounded-full"
        >
          View Details & Book
        </button>
      </div>
    </div>
  );
};

export default OtherIslandPackageCard;
