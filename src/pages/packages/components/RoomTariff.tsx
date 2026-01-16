import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RoomTariff = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  const tariffData = [
    {
      roomType: 'Double Deluxe Room (AC)',
      regularPrice: '₹6,990',
      peakPrice: '₹7,990',
      icon: 'ri-temp-cold-line',
    },
    {
      roomType: 'Double Deluxe Room (Fan Cooled)',
      regularPrice: '₹5,990',
      peakPrice: '₹6,990',
      icon: 'ri-windy-line',
    },
    {
      roomType: 'Extra Adult with Mattress',
      regularPrice: '₹1,990',
      peakPrice: '₹2,100',
      icon: 'ri-user-add-line',
    },
    {
      roomType: 'Child (5-12 Years) w/o Extra Mattress',
      regularPrice: '990',
      peakPrice: '1,100',
      icon: 'ri-user-smile-line',
    },
    {
      roomType: 'Children Below 5 Years w/o Extra Mattress',
      regularPrice: 'Complimentary',
      peakPrice: 'Complimentary',
      icon: 'ri-emotion-happy-line',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
            Room Tariff
          </div>
          
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6 leading-tight">
            Transparent Pricing for Your Stay
          </h2>
          
          <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
            16 well-furnished deluxe double rooms, cottage-type with independent sit-outs in a village setting 
            located in the midst of evergreen forest. Air conditioners provided in all rooms for your comfort.
          </p>
        </motion.div>

        {/* Season Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-sand-light/30 rounded-2xl p-6 border-2 border-forest/10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-forest/10">
                <i className="ri-calendar-line text-forest text-xl"></i>
              </div>
              <h3 className="font-sans font-semibold text-forest-dark text-lg">Regular Season</h3>
            </div>
            <p className="text-olive text-sm">
              15th September 2024 – 31st May 2025<br />
              <span className="text-xs">(Excluding peak season dates)</span>
            </p>
          </div>

          <div className="bg-gold/10 rounded-2xl p-6 border-2 border-gold/30">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20">
                <i className="ri-star-line text-gold text-xl"></i>
              </div>
              <h3 className="font-sans font-semibold text-forest-dark text-lg">Peak Season</h3>
            </div>
            <p className="text-olive text-sm">
              16th December 2024 – 5th January 2025<br />
              <span className="text-xs font-medium text-gold">(Minimum 2 nights stay required)</span>
            </p>
          </div>
        </motion.div>

        {/* Tariff Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sand-light/30"
        >
          {/* Table Header */}
          <div className="bg-forest text-white px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-sans font-semibold text-base tracking-wider uppercase">Room Type</div>
              <div className="font-sans font-semibold text-base tracking-wider uppercase text-center">Regular Season</div>
              <div className="font-sans font-semibold text-base tracking-wider uppercase text-center">Peak Season</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-sand-light/30">
            {tariffData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="px-8 py-6 hover:bg-sand-light/20 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-forest/10">
                      <i className={`${item.icon} text-forest text-xl`}></i>
                    </div>
                    <span className="font-sans font-medium text-forest-dark">{item.roomType}</span>
                  </div>
                  <div className="text-center">
                    <span className="font-serif font-bold text-2xl text-forest">{item.regularPrice}</span>
                    <span className="text-olive text-sm ml-2">per night</span>
                  </div>
                  <div className="text-center">
                    <span className="font-serif font-bold text-2xl text-gold">{item.peakPrice}</span>
                    <span className="text-olive text-sm ml-2">per night</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="bg-sand-light/30 px-8 py-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gold/20 mt-1">
                <i className="ri-information-line text-gold text-sm"></i>
              </div>
              <div className="flex-1">
                <p className="text-olive text-sm leading-relaxed">
                  <strong className="text-forest-dark">Important:</strong> All rates are per night and per Room,include applicable taxes. 
                  Peak season bookings require a minimum stay of 2 nights. Prices are subject to change without prior notice. 
                  Please contact us for group bookings and special packages.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={"https://live.ipms247.com/booking/book-rooms-dewdaleresorts"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-forest text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest-light shadow-lg whitespace-nowrap cursor-pointer"
            >
              Book Your Stay
            </a>
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border-2 border-forest text-forest font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest hover:text-white shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center space-x-2"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomTariff;
