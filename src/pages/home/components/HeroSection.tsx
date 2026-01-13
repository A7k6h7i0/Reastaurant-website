
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingBar from './BookingBar'

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  return (
    <section className="relative min-h-[120vh] md:h-screen w-full overflow-hidden">

      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: inView ? 1 : 1.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src="/images/1.png"
          alt="Pristine forest canopy of Baratang Island"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </motion.div>

      {/* Content Overlay */}
      <div
  ref={ref}
  className="relative z-10 h-full flex items-center justify-center md:justify-center"
>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center space-y-10"
>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sand-light text-sm tracking-widest uppercase font-sans">
                Pioneer Eco-Resort in Baratang Island
              </span>
            </motion.div>

            <h3 className="font-serif  text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
             Welcome To Dew Dale Resorts
            </h3>


             <div className="w-full mt-6 px-2 sm:px-4 md:px-6">
                <BookingBar />
              </div>

            <div className="inner-block mt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href={"https://live.ipms247.com/booking/book-rooms-dewdaleresorts"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-forest text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest-light shadow-xl whitespace-nowrap cursor-pointer"
              >
                Book Your Stay
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest whitespace-nowrap cursor-pointer"
              >
                Explore Packages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm tracking-widest uppercase font-sans">Discover More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white"></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
