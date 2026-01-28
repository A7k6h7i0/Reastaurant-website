import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src = "/images/8.jpeg"
          alt="Dew Dale Resorts Architecture"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-gold/20 backdrop-blur-sm text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
            Exclusive Packages & Tariff
          </div>
          
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            The Only Resort of Its Kind<br />in Baratang Island
          </h1>
          
          <p className="text-sand-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Beautiful architecture and well-furnished rooms nestled amidst lush green forest. 
            Experience modern comfort in an eco-friendly setting near exotic beaches.
          </p>

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
            <motion.a
              href="/packages#popular-packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest whitespace-nowrap cursor-pointer"
            >
              Explore Packages
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
