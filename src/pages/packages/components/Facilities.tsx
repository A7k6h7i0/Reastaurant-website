import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Facilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      icon: 'ri-hotel-bed-line',
      title: 'Double Bed Rooms',
      description: 'All rooms furnished with comfortable double beds',
    },
    {
      icon: 'ri-tv-2-line',
      title: '21" Color Television',
      description: '24 hrs cable connection with satellite channels',
    },
    {
      icon: 'ri-drop-line',
      title: '24 Hrs Hot/Cold Water',
      description: 'Round-the-clock water supply in all rooms',
    },
    {
      icon: 'ri-phone-line',
      title: 'Intercom Facility',
      description: 'Direct communication from all rooms',
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Outdoor & Indoor Games',
      description: 'Recreation facilities for all ages',
    },
    {
      icon: 'ri-restaurant-2-line',
      title: 'Multi-Cuisine Restaurant',
      description: 'Open restaurant serving Indian, Chinese & Continental',
    },
    {
      icon: 'ri-presentation-line',
      title: 'Meeting Facilities',
      description: 'Arrangements for meetings, training & seminars for 50 pax',
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Travel Desk',
      description: 'Complete tour planning and activity arrangements',
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
            Resort Facilities
          </div>
          
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6 leading-tight">
            Modern Amenities in Nature's Lap
          </h2>
          
          <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of modern comfort and natural serenity. 
            Our resort offers all essential facilities for a memorable stay.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-forest/10 mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <i className={`${facility.icon} text-forest text-3xl group-hover:text-gold transition-colors duration-300`}></i>
              </div>
              <h3 className="font-sans font-semibold text-forest-dark text-lg mb-2">
                {facility.title}
              </h3>
              <p className="text-olive text-sm leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-forest to-forest-light rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap w-fit">
                Prime Location
              </div>
              
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                Excellent Stay with Us
              </h3>
              
              <p className="text-sand-light text-base leading-relaxed mb-6">
                Located about 65 miles from Port Blair in the Sundergarh village on Baratang Island, 
                this modern, eco-friendly resort is nestled amidst lush green forest near lesser-known exotic beaches.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                    <i className="ri-map-pin-line text-white text-lg"></i>
                  </div>
                  <span className="text-white text-sm">105 km from Port Blair on main island highway</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                    <i className="ri-tree-line text-white text-lg"></i>
                  </div>
                  <span className="text-white text-sm">Surrounded by thick tropical evergreen forest</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                    <i className="ri-home-smile-line text-white text-lg"></i>
                  </div>
                  <span className="text-white text-sm">16 cottage-type rooms with independent sit-outs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 rounded-full bg-gold text-white font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gold-light shadow-lg whitespace-nowrap cursor-pointer">
                  Book Now
                </button>
                <a
                  href="tel:+919434280628"
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest shadow-lg whitespace-nowrap cursor-pointer text-center"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src="/images/DSC00092.JPG"
                alt="Resort Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/30 to-transparent lg:hidden"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
