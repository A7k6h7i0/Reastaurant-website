import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ThemePackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            All rates shown here are in INR and for per person basis.
          </p>
        </motion.div>

        {/* ================= RATES ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-forest text-white px-8 py-6">
            <h3 className="font-serif text-3xl">RATES</h3>
            <p className="text-sand-light text-sm mt-1">
              All rates shown here are in INR and for per person basis.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-sand-light text-forest-dark">
                <tr>
                  <th className="p-4">Package</th>
                  <th className="p-4">Nights</th>
                  <th className="p-4">Per Adult on twin-share</th>
                  <th className="p-4">
                    Extra Adult / Child (5–12 yrs with mattress)
                  </th>
                  <th className="p-4">
                    Extra Child (5–12 yrs without mattress)
                  </th>
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

        {/* ================= ROOM TARIFF RULES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
          <h3 className="font-serif text-3xl text-forest-dark">
            Room Tariff & Occupancy Rules
          </h3>

          <p className="text-olive">
            Room Tariff (Dbl room on CP (Breakfast included) + Extra Person
            (Adult/Child – two options - with or without mattress).
          </p>

          <p className="text-olive">
            Select No. of rooms and pax in each room. Maximum
            <strong> 3 Adults / Child with mattress</strong> and
            <strong> One Child (Below 5 years)</strong> without mattress can be accommodated.
          </p>

          <p className="text-olive font-semibold">
            Max – 3 + 1 = 4 pax (2 extra adults not permitted)
          </p>
        </div>

        {/* ================= BACKEND COMPONENTS ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
          <h3 className="font-serif text-3xl text-forest-dark">
            Other Components for Back End
          </h3>

          <ul className="list-decimal pl-6 space-y-3 text-olive">
            <li>
              <strong>Car (From Port Blair round trip):</strong> Charges for transfers –
              upto 5 pax (one car), more than 5 pax upto 10 (2 car) so on.
              OR Route Bus tickets – Round trip from Port Blair – per person rate.
            </li>
            <li>
              <strong>CAR Charges for night stay:</strong> Per Night charges
              (Applicable only for Car Transfers).
            </li>
            <li>
              <strong>Car Charges for sightseeing:</strong> As per package.
              Upto 5 pax (one car), more than 5 pax upto 10 (2 car) so on.
            </li>
            <li>
              <strong>Boat Charges:</strong> Option 1 boat (upto 8 pax) OR
              option 2 per person charges – For sightseeing.
              Both options should be available for recording.
            </li>
            <li>
              <strong>Permit Charges:</strong> Per Person.
            </li>
          </ul>

          <p className="text-olive">
            Similar fields should be there for other packages.
          </p>
        </div>

        {/* ================= PACKAGE INCLUDES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-4">
          <h3 className="font-serif text-3xl text-forest-dark">
            I. Package Includes
          </h3>

          <ol className="list-decimal pl-6 space-y-2 text-olive">
            <li>All Rates are per person basis</li>
            <li>
              Package includes accommodation on twin share, breakfast,
              sightseeing (Limestone Caves, Mud Volcano, Baludera Beach &
              Parrot Island, Merk Bay (optional) and
              Port Blair - Baratang - Port Blair transfers),
              all sightseeing as per itinerary, all permit fees and all taxes.
            </li>
          </ol>

          <p className="text-olive">
            <strong>Note:</strong> Maximum one extra person per room allowed.
            If extra bed required for child below 12yrs, extra person charges
            are applicable. Child 5–12 yrs no extra bed provided.
            Child below 5yrs is complimentary.
          </p>
        </div>

        {/* ================= TRANSPORT ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="font-serif text-3xl text-forest-dark mb-4">
            II. Transport
          </h3>
          <p className="text-olive">
            Transport by AC vehicle.
          </p>
        </div>

        {/* ================= EXCLUDES ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="font-serif text-3xl text-forest-dark mb-4">
            III. Package Excludes
          </h3>
          <p className="text-olive">
            Any optional tours, personal expenses.
            Stay before / after check-in check out time.
          </p>
        </div>

        {/* ================= WEATHER ================= */}
        <div className="bg-gradient-to-r from-forest to-forest-light text-white rounded-3xl p-10">
          <h3 className="font-serif text-3xl mb-4">
            IV. We would also like to mention that:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tours are subject to weather conditions.</li>
            <li>Best period is from Oct-May.</li>
          </ul>
        </div>

        {/* ================= ITINERARY ================= */}
        <div className="space-y-16">
          <h3 className="font-serif text-4xl text-center text-forest-dark">
            V. Baratang Package Tour Itinerary
          </h3>

          {/* DDR12 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (1N) – CODE: DDR12
            </h4>
            <p className="text-olive">
              <strong>Day 1:</strong> Pick up from Port Blair and Transfer to Baratang Island by Pvt. Car.
              Resort Check-in. After Lunch head to Baludera Beach via Mud Volcano site.
              Just before sunset trip to Parrot Island. Overnight in Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 2:</strong> Check-out. Visit limestone caves at Rafter’s Creek.
              Return to Port Blair. Drop at Port Blair.
            </p>
          </div>

          {/* DDR23 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (2N) – CODE: DDR23
            </h4>
            <p className="text-olive">
              <strong>Day 1:</strong> Port Blair to Baratang. Resort check-in.
              Mud Volcano & Baludera Beach. Overnight at Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 2:</strong> Limestone caves. Evening Parrot Island.
              Overnight at Baratang.
            </p>
            <p className="text-olive mt-2">
              <strong>Day 3:</strong> Check-out. Return to Port Blair.
            </p>
          </div>

          {/* DDR34 */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h4 className="font-serif text-2xl text-forest-dark mb-4">
              Baratang (3N – Min 6 pax) – CODE: DDR34
            </h4>
            <p className="text-olive">
              Includes Mud Volcano, Baludera Beach, Limestone Caves,
              Parrot Island and full day trip to Merk Bay beach.
            </p>
            <p className="text-olive mt-2">
              Merk Bay beach is in North Passage Island offering unpolluted
              environment, coral rich shallow waters ideal for snorkeling,
              swimming and sun basking. Dolphins are often spotted.
            </p>
            <p className="text-olive mt-2">
              Packed lunch will be served. Return before sunset.
            </p>
          </div>
        </div>

        {/* ================= BOOKINGS ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-4">
          <h3 className="font-serif text-3xl text-forest-dark">
            VII. Bookings & Cancellations
          </h3>

          <ol className="list-decimal pl-6 space-y-2 text-olive">
            <li>All bookings must be made well in advance.</li>
            <li>100% Deposit required within 3 to 5 working days.</li>
            <li>
              Payments via Demand Draft or Bank Transfer.
              Bank service charges not included.
            </li>
            <li>Receipt will be sent after payment confirmation.</li>
            <li>
              Cancellation charges:
              <ul className="list-disc pl-6 mt-2">
                <li>Before 30 days – 75% of advance amount.</li>
                <li>Between 7 & 29 days – 50% of advance amount.</li>
                <li>Upto 6 days before check-in – NO REFUND.</li>
              </ul>
            </li>
          </ol>

          <p className="text-olive">
            All repayments for cancellations will be made within 4 weeks
            from the effective date.
          </p>

          <p className="text-olive">
            Tour once commenced will strictly go as per the itinerary finalized.
            In case of events and circumstances beyond our control,
            we reserve the right to change the itinerary for safety
            and well-being of our guests.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThemePackages;
