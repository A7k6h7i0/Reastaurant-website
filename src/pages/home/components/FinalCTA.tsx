import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/Billede 043.jpg"
          alt="Sunset over Baratang Island forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-bold text-5xl md:text-7xl text-white mb-6 tracking-wide uppercase"
        >
          Begin Your Journey
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-xl md:text-2xl text-sand-light mb-4 leading-relaxed"
        >
          To Andaman's Most Exclusive Eco-Resort
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Limited availability. Book your escape to pristine nature and responsible luxury today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="tel:+919434280628"
            className="group px-12 py-5 rounded-full bg-gold text-white font-sans font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:bg-gold-light shadow-2xl flex items-center space-x-3 whitespace-nowrap cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <i className="ri-phone-line text-gold text-xl"></i>
            </div>
            <span>Call Now</span>
            <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>

          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 rounded-full bg-transparent border-2 border-white text-white font-sans font-bold text-lg tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest shadow-2xl whitespace-nowrap cursor-pointer"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex items-center justify-center space-x-8 text-white/70"
        >
          <div className="flex items-center space-x-2">
            <i className="ri-phone-line text-gold"></i>
            <span className="text-sm font-sans">+91 9434280628</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-mail-line text-gold"></i>
            <span className="text-sm font-sans">dewdale.resorts@gmail.com</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
