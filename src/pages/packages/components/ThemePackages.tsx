import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ThemePackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  const activities = [
    {
      title: 'Canoeing & Kayaking',
      icon: 'ri-ship-line',
      description: 'Explore mangrove creeks at your own pace',
    },
    {
      title: 'Wildlife Safaris',
      icon: 'ri-compass-3-line',
      description: 'Discover exotic flora and fauna',
    },
    {
      title: 'Bird Watching',
      icon: 'ri-flight-takeoff-line',
      description: 'Spot rare species at Parrot Island',
    },
    {
      title: 'Forest Hiking',
      icon: 'ri-footprint-line',
      description: 'Trek through pristine evergreen trails',
    },
    {
      title: 'Biking Tours',
      icon: 'ri-bike-line',
      description: 'Cycle through scenic village routes',
    },
    {
      title: 'Hand-line Fishing',
      icon: 'ri-anchor-line',
      description: 'Traditional fishing experiences',
    },
    {
      title: 'Village Walking Tours',
      icon: 'ri-walk-line',
      description: 'Immerse in local rural culture',
    },
    {
      title: 'Beach Exploration',
      icon: 'ri-sun-line',
      description: 'Visit lesser-known exotic beaches',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-sand-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
            Customizable Experiences
          </div>
          
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6 leading-tight">
            Create Your Perfect Island Adventure
          </h2>
          
          <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
            Our travel desk can help you arrange a host of activities, tours, and excursions. 
            Mix and match experiences to craft your ideal Baratang Island escape.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-forest/10 mb-4">
                <i className={`${activity.icon} text-forest text-2xl`}></i>
              </div>
              <h3 className="font-sans font-semibold text-forest-dark text-lg mb-2">
                {activity.title}
              </h3>
              <p className="text-olive text-sm leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Package Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/Billede 223.jpg"
                alt="Activities Collage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif font-bold text-2xl text-white mb-2">
                  Unlimited Possibilities
                </h3>
                <p className="text-sand-light text-sm">
                  Customize your package at no extra cost
                </p>
              </div>
            </div>

            {/* Right - Features */}
            <div>
              <h3 className="font-serif font-bold text-3xl text-forest-dark mb-8">
                What's Included in Every Package
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 flex-shrink-0">
                    <i className="ri-car-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-1">
                      Port Blair ↔ Resort Transfers
                    </h4>
                    <p className="text-olive text-sm leading-relaxed">
                      Comfortable transportation included in all packages. Enjoy scenic 105 km journey through the main island highway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 flex-shrink-0">
                    <i className="ri-guide-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-1">
                      Expert Travel Desk Support
                    </h4>
                    <p className="text-olive text-sm leading-relaxed">
                      Our experienced team helps arrange all activities, tours, and excursions tailored to your preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 flex-shrink-0">
                    <i className="ri-restaurant-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-1">
                      Multi-Cuisine Dining
                    </h4>
                    <p className="text-olive text-sm leading-relaxed">
                      Enjoy delicious meals at our open restaurant serving Indian, Chinese, and Continental cuisine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/20 flex-shrink-0">
                    <i className="ri-leaf-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-1">
                      Eco-Friendly Experience
                    </h4>
                    <p className="text-olive text-sm leading-relaxed">
                      Stay in harmony with nature in our sustainable resort surrounded by pristine evergreen forest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-full bg-forest text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest-light shadow-lg whitespace-nowrap cursor-pointer inline-block"
                >
                  Build Your Package
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThemePackages;
