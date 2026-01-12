import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms & Stay', path: '/rooms' },
    { name: 'Packages', path: '/packages' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Blog',path:'/blog'},
    { name: 'Contact', path: '/contact' },
    
  ];

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://static.readdy.ai/image/5b0394d63ea67e242d80d6c69b47f9d5/c39032b98dc737737414fc31dc0182cb.jpeg"
                alt="Dew Dale Resorts Logo"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif font-semibold text-xl tracking-wide transition-colors duration-300 ${
                    isScrolled || !isHomePage ? 'text-forest-dark' : 'text-white'
                  }`}
                >
                  Dew Dale Resorts
                </span>
                <span
                  className={`text-xs tracking-widest transition-colors duration-300 ${
                    isScrolled || !isHomePage ? 'text-olive' : 'text-sand-light'
                  }`}
                >
                  BARATANG ISLAND
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-sans font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gold whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : isScrolled || !isHomePage
                      ? 'text-forest-dark'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Book Now Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919434280628"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                  isScrolled || !isHomePage
                    ? 'text-forest hover:bg-forest/10'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <i className="ri-phone-line text-xl"></i>
              </a>
              <a
                href={"https://live.ipms247.com/booking/book-rooms-dewdaleresorts"}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-full font-sans font-medium text-sm tracking-wider uppercase transition-all duration-300 border-2 whitespace-nowrap cursor-pointer ${
                  isScrolled || !isHomePage
                    ? 'border-gold text-gold hover:bg-gold hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-forest'
                }`}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
                isScrolled || !isHomePage ? 'text-forest-dark' : 'text-white'
              }`}
            >
              <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-forest-dark"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif font-medium transition-colors duration-300 hover:text-gold whitespace-nowrap ${
                      location.pathname === link.path ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={"https://live.ipms247.com/booking/book-rooms-dewdaleresorts"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8 px-8 py-3 rounded-full bg-gold text-white font-sans font-medium text-base tracking-wider uppercase transition-all duration-300 hover:bg-gold-light whitespace-nowrap cursor-pointer"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
