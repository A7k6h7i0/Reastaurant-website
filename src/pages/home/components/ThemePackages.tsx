import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ThemePackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  return (
    <section ref={ref} className="py-24 bg-sand-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
              Customizable Experiences
            </div>
            
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6 leading-tight">
              Create Your Perfect Island Adventure
            </h2>
            
            <p className="text-olive text-lg leading-relaxed mb-8">
              Our theme special packages are fully customizable at no extra cost. 
              Mix and match experiences, activities, and accommodations to craft your ideal Baratang Island escape.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gold/20 mt-1">
                  <i className="ri-check-line text-gold text-sm"></i>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-forest-dark mb-1">
                    Port Blair ↔ Resort Transfers
                  </h4>
                  <p className="text-olive text-sm">Comfortable transportation included in all packages</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gold/20 mt-1">
                  <i className="ri-check-line text-gold text-sm"></i>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-forest-dark mb-1">
                    Guided Nature Experiences
                  </h4>
                  <p className="text-olive text-sm">Expert-led tours to limestone caves, Parrot Island & more</p>
                </div>
              </div>

              
            </div>

            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-forest text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest-light shadow-lg whitespace-nowrap cursor-pointer"
            >
              Build Your Package
            </a>
          </motion.div>

          {/* Right Side - Package Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Back Card */}
              <motion.div
                initial={{ rotate: -5, x: -20, y: 20 }}
                animate={{ rotate: inView ? -5 : 0, x: inView ? -20 : 0, y: inView ? 20 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-xl transform"
              >
                <div className="relative h-full overflow-hidden rounded-3xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=Tropical%20island%20adventure%20collage%20showing%20limestone%20cave%20exploration%2C%20mangrove%20boat%20ride%2C%20sunset%20beach%2C%20and%20forest%20hiking%20combined%20in%20artistic%20layout%2C%20vibrant%20natural%20colors%2C%20eco-tourism%20activities%2C%20adventure%20travel%20photography%20with%20simple%20nature%20background&width=600&height=700&seq=package-back-001&orientation=portrait"
                    alt="Adventure Package"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gold flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-serif font-bold text-white text-xl">₹12K</div>
                      <div className="text-white text-xs">2 Days</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Front Card */}
              <motion.div
                initial={{ rotate: 3, x: 20, y: -20 }}
                animate={{ rotate: inView ? 3 : 0, x: inView ? 20 : 0, y: inView ? -20 : 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform"
              >
                <div className="relative h-80">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20eco-resort%20experience%20showcasing%20pristine%20beach%20sunset%2C%20comfortable%20resort%20accommodation%2C%20gourmet%20dining%2C%20and%20nature%20activities%20in%20elegant%20composition%2C%20warm%20golden%20tones%2C%20premium%20hospitality%2C%20travel%20lifestyle%20photography%20with%20simple%20beach%20background&width=600&height=700&seq=package-front-002&orientation=portrait"
                    alt="Luxury Package"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-gold flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="font-serif font-bold text-white text-2xl">₹18K</div>
                      <div className="text-white text-xs">3 Days</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif font-bold text-2xl text-white mb-2">
                      Complete Island Experience
                    </h3>
                    <p className="text-sand-light text-sm">
                      All experiences + luxury accommodation + meals
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-olive text-sm font-sans">Fully Customizable</span>
                    <a
                      href={whatsappBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest font-sans text-sm font-medium hover:text-gold transition-colors duration-300 whitespace-nowrap cursor-pointer"
                    >
                      Customize →
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThemePackages;
