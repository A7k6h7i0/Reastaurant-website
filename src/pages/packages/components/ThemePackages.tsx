import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ThemePackages = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-b from-sand-light via-white to-sand-light"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gold/20 text-gold text-sm tracking-widest uppercase mb-6">
            Rates & Baratang Packages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6">
            Baratang Island Package Details
          </h2>
          <p className="text-olive max-w-4xl mx-auto leading-relaxed">
            All rates shown here are in INR and are on a per person basis.
            The packages below are designed to offer a complete Baratang Island
            experience with sightseeing, transfers and accommodation.
          </p>
        </motion.div>

        {/* ================= RATES TABLE ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-forest text-white px-8 py-6">
            <h3 className="font-serif text-3xl">Rates</h3>
            <p className="text-sand-light text-sm mt-1">
              All rates are per person basis
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-sand-light text-forest-dark">
                <tr>
                  <th className="p-4">Package</th>
                  <th className="p-4">Nights</th>
                  <th className="p-4">Per Adult (Twin Share)</th>
                  <th className="p-4">Extra Adult / Child (5–12 yrs with mattress)</th>
                  <th className="p-4">Extra Child (5–12 yrs without mattress)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-semibold">DDR12</td>
                  <td className="p-4">1</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">DDR23</td>
                  <td className="p-4">2</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">DDR34</td>
                  <td className="p-4">3</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                  <td className="p-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= ROOM & PAX RULES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
          <h3 className="font-serif text-3xl text-forest-dark">
            Room Tariff & Occupancy Rules
          </h3>

          <p className="text-olive">
            Room Tariff is based on Double Room on CP (Breakfast included) +
            Extra Person (Adult/Child – with or without mattress).
          </p>

          <p className="text-olive">
            Select number of rooms and pax in each room.
            Maximum <strong>3 Adults / Child with mattress</strong> and
            <strong> one Child (below 5 years) without mattress</strong>
            can be accommodated.
          </p>

          <p className="text-olive font-semibold">
            Max occupancy: 3 + 1 = 4 pax (2 extra adults not permitted)
          </p>
        </div>

        {/* ================= BACKEND COMPONENTS ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
          <h3 className="font-serif text-3xl text-forest-dark">
            Other Components (For Backend Configuration)
          </h3>

          <ul className="list-decimal pl-6 space-y-3 text-olive">
            <li>
              <strong>Car Charges (Port Blair Round Trip):</strong>
              Up to 5 pax – one car, more than 5 pax up to 10 – two cars.
              OR Route bus tickets – round trip per person rate.
            </li>
            <li>
              <strong>Car Charges for Night Stay:</strong>
              Per night charges (applicable only for car transfers).
            </li>
            <li>
              <strong>Car Charges for Sightseeing:</strong>
              As per package, up to 5 pax – one car, more than 5 pax – two cars.
            </li>
            <li>
              <strong>Boat Charges:</strong>
              Option 1 – Per boat (up to 8 pax) OR Option 2 – Per person charges.
              Both options should be available for recording.
            </li>
            <li>
              <strong>Permit Charges:</strong> Per person.
            </li>
          </ul>

          <p className="text-olive">
            Similar fields should be maintained for other packages as well.
          </p>
        </div>

        {/* ================= PACKAGE INCLUDES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-4">
          <h3 className="font-serif text-3xl text-forest-dark">
            Package Includes
          </h3>

          <ul className="list-decimal pl-6 space-y-2 text-olive">
            <li>All rates are per person basis.</li>
            <li>
              Accommodation on twin share, breakfast, sightseeing
              (Limestone Caves, Mud Volcano, Baludera Beach, Parrot Island,
              Merk Bay – optional), Port Blair – Baratang – Port Blair transfers,
              all permit fees and all taxes.
            </li>
          </ul>

          <p className="text-olive">
            <strong>Note:</strong> Maximum one extra person per room allowed.
            If extra bed required for child below 12 years, extra person charges
            are applicable. Child 5–12 years no extra bed provided.
            Child below 5 years is complimentary.
          </p>
        </div>

        {/* ================= EXCLUDES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="font-serif text-3xl text-forest-dark mb-4">
            Package Excludes
          </h3>
          <p className="text-olive">
            Any optional tours, personal expenses and stay before / after
            check-in check-out time.
          </p>
        </div>


        {/* ================= ITINERARIES ================= */}
        <div className="space-y-16">
          <h3 className="font-serif text-4xl text-center text-forest-dark">
            Baratang Package Tour Itinerary
          </h3>

          {/* DDR12 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (1N) – CODE: DDR12
            </h4>
            <p className="text-olive">
              <strong>Day 1:</strong> Pick up from Port Blair and transfer to
              Baratang Island by private car. Resort check-in. After lunch visit
              Mud Volcano and Baludera Beach. Before sunset trip to Parrot Island.
              Overnight stay at Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 2:</strong> Check-out. Visit Limestone Caves at
              Rafter’s Creek. Return to Port Blair. Drop at Port Blair.
            </p>
          </div>

          {/* DDR23 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (2N) – CODE: DDR23
            </h4>
            <p className="text-olive">
              <strong>Day 1:</strong> Port Blair to Baratang. Resort check-in.
              Mud Volcano and Baludera Beach. Overnight at Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 2:</strong> Limestone Caves visit. Evening Parrot Island.
              Overnight at Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 3:</strong> Check-out and return to Port Blair.
            </p>
          </div>

          {/* DDR34 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (3N – Min 6 Pax) – CODE: DDR34
            </h4>
            <p className="text-olive">
              Includes Mud Volcano, Baludera Beach, Limestone Caves, Parrot Island
              and full day trip to Merk Bay Beach via mangrove creeks.
            </p>
            <p className="text-olive mt-2">
              Merk Bay is in North Passage Island offering coral-rich shallow
              waters suitable for snorkeling, swimming and sun basking.
              Dolphins are often spotted.
            </p>
            <p className="text-olive mt-2">
              Packed lunch served at the beach. Return before sunset.
            </p>
          </div>
        </div>

        {/* ================= BOOKINGS ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-4">
          <h3 className="font-serif text-3xl text-forest-dark">
            Bookings & Cancellations
          </h3>

          <ol className="list-decimal pl-6 space-y-2 text-olive">
            <li>All bookings must be made well in advance.</li>
            <li>100% deposit required within 3 to 5 working days.</li>
            <li>Payments via bank transfer or demand draft.</li>
            <li>Receipt issued after payment confirmation.</li>
            <li>
              Cancellation charges:
              <ul className="list-disc pl-6 mt-2">
                <li>Before 30 days – 75% of advance amount</li>
                <li>7–29 days – 50% of advance amount</li>
                <li>Up to 6 days – No refund</li>
              </ul>
            </li>
          </ol>

          <p className="text-olive">
            All refunds will be processed within 4 weeks from effective date.
          </p>

          <p className="text-olive">
            Tour once commenced will strictly go as per finalized itinerary.
            In case of circumstances beyond control, we reserve the right
            to change itinerary for guest safety.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThemePackages;
