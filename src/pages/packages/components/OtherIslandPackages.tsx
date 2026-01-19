import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OtherIslandPackages = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-white to-sand-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gold/20 text-gold text-sm tracking-widest uppercase mb-6">
            Leisure Tour Package
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6">
            Baratang Island with Other Islands of Andaman
          </h2>
          <p className="text-olive max-w-4xl mx-auto leading-relaxed">
            Carefully curated leisure tour packages combining Baratang Island
            with Port Blair and Havelock Island, offering Luxury, Executive and
            Economy travel experiences.
          </p>
        </motion.div>

        {/* PACKAGE MATRIX */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-forest/10 rounded-2xl overflow-hidden">
            <thead className="bg-forest text-white">
              <tr>
                <th className="p-4 text-left">Tour Code</th>
                <th className="p-4">LT34-002</th>
                <th className="p-4">LT45-001</th>
                <th className="p-4">LT56-001</th>
                <th className="p-4">LT67-001</th>
                <th className="p-4">LT67-002</th>
              </tr>
            </thead>
            <tbody className="bg-white text-olive">
              <tr className="border-t">
                <td className="p-4 font-semibold">Duration</td>
                <td className="p-4 text-center">3N / 4D</td>
                <td className="p-4 text-center">4N / 5D</td>
                <td className="p-4 text-center">5N / 6D</td>
                <td className="p-4 text-center">6N / 7D</td>
                <td className="p-4 text-center">6N / 7D</td>
              </tr>
              <tr className="border-t bg-sand-light/40">
                <td className="p-4 font-semibold">Transport</td>
                <td colSpan={5} className="p-4 text-center">
                  AC Vehicle – Xylo or Equivalent
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* HOTELS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Baratang Island",
              items: ["Dew Dale Resorts (Fixed Inbuilt Hotel)"],
            },
            {
              title: "Havelock Island",
              items: [
                "Silver Sand Resort (Luxury)",
                "Seashells / Kingdom (Executive)",
                "Dolphin Resort / Seashells (Non AC) / Bayview Inn (Economy)",
              ],
            },
            {
              title: "Port Blair",
              items: [
                "Fortune Resort Bay Island / Hotel Sentinel / Hotel Sinclairs (Luxury)",
                "Megapode Resort / Sunsea Resort / TSG Emerald View / Hotel Mainak (Executive)",
                "Andaman Residency / Hotel Nakshatra Inn / Hotel Rishab / Hotel Aparupa (Economy)",
              ],
            },
          ].map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h3 className="font-serif text-2xl text-forest-dark mb-4">
                {block.title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-olive">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* INCLUSIONS */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="font-serif text-3xl text-forest-dark mb-6">
            Package Cost Includes
          </h3>
          <p className="text-olive leading-relaxed">
            Rates are per person for AC accommodation on twin sharing (CP basis),
            arrival and departure transfers, welcome drink, all transfers,
            sightseeing as per itinerary, entrance fees and all applicable taxes.
          </p>
          <p className="mt-4 text-olive">
            <strong>Note:</strong> Maximum one extra person per room allowed.
            Child 5–12 years without extra bed. Child below 5 years complimentary.
          </p>
        </div>

        {/* EXCLUDES */}
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="font-serif text-3xl text-forest-dark mb-6">
            Package Does Not Include
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-olive">
            <li>Airfares</li>
            <li>Early check-in / late check-out</li>
            <li>Personal expenses (calls, laundry, minibar, etc.)</li>
            <li>Meals not mentioned in the itinerary</li>
            <li>Optional tours</li>
            <li>Any services not mentioned</li>
          </ul>
        </div>

        {/* WEATHER */}
        <div className="bg-gradient-to-r from-forest to-forest-light text-white rounded-3xl p-10">
          <h3 className="font-serif text-3xl mb-4">
            Important Information
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tours are subject to weather conditions</li>
            <li>Best travel period: October to May</li>
          </ul>
        </div>

        {/* ITINERARIES */}
        <div className="space-y-12">
          <h3 className="font-serif text-4xl text-forest-dark text-center">
            Detailed Tour Itineraries
          </h3>

          {/* Repeatable itinerary cards */}
          {[
            {
              code: "LT34-002",
              title: "Port Blair (2N) + Baratang (1N)",
              days: [
                "Arrival at Port Blair. Visit Ross Island.",
                "Transfer to Baratang. Mud Volcano, Baludera Beach & Parrot Island.",
                "Limestone Caves visit. Return to Port Blair.",
                "Drop at Airport.",
              ],
            },
            {
              code: "LT45-001",
              title: "Port Blair (2N) + Havelock (1N) + Baratang (1N)",
              days: [
                "Arrival → Baratang. Mud Volcano & Parrot Island.",
                "Limestone Caves → Port Blair.",
                "Havelock Island & Radhanagar Beach.",
                "Return to Port Blair.",
                "Departure.",
              ],
            },
          ].map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl p-8">
              <h4 className="font-serif text-2xl text-forest-dark mb-4">
                {pkg.title} — <span className="text-gold">{pkg.code}</span>
              </h4>
              <ul className="space-y-2 text-olive">
                {pkg.days.map((day, i) => (
                  <li key={i}>
                    <strong>Day {i + 1}:</strong> {day}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherIslandPackages;
