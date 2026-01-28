import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';


const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [locationRef, locationInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: 'ri-leaf-line',
      title: 'Eco-Tourism Pioneer',
      description: 'As the first resort in Baratang Island, we set the standard for sustainable tourism practices. Our eco-friendly construction and operations minimize environmental impact while maximizing guest comfort and authentic experiences.',
    },
    {
      icon: 'ri-team-line',
      title: 'Community Empowerment',
      description: 'We believe in responsible tourism that benefits local communities. By employing local staff and sourcing from nearby villages, we contribute to rural development and preserve indigenous culture while sharing it with the world.',
    },
    {
      icon: 'ri-recycle-line',
      title: 'Sustainable Practices',
      description: 'From rainwater harvesting to solar energy, waste management to organic farming, every aspect of our resort is designed with sustainability in mind. We prove that luxury and environmental responsibility can coexist beautifully.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
  ref={heroRef}
  className="relative min-h-[95vh] lg:min-h-[100vh] flex items-start pt-32 pb-32 overflow-hidden mt-20"
>


        <div className="absolute inset-0">
          <img
            src="/images/AboutHeroImage.png"
            alt="Dew Dale Resorts aerial view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
              Our Story
            </div>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Pioneering Eco-Luxury in <span className="text-gold">Baratang Island</span>
            </h1>
            <p className="text-sand-light text-lg md:text-xl leading-relaxed">
              Where pristine nature meets responsible hospitality, creating unforgettable experiences while preserving the untouched beauty of Andaman's hidden paradise.
            </p>
          </motion.div>


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
              href="/packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest whitespace-nowrap cursor-pointer"
            >
              Explore Packages
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-8 right-12 hidden lg:flex flex-col space-y-6"
          >
            <div className="text-right">
              <div className="font-serif font-bold text-5xl text-gold mb-1">#1</div>
              <div className="text-sand-light text-sm tracking-wider">First Resort in Baratang</div>
            </div>
            <div className="text-right">
              <div className="font-serif font-bold text-5xl text-gold mb-1">105km</div>
              <div className="text-sand-light text-sm tracking-wider">From Port Blair</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6">
                Dew Dale Resort at Baratang Island
              </h2>
              <div className="space-y-6 text-olive text-base leading-relaxed">
                <p>

               The island has dense Tropical Forests of all types ranging from tidal swamp forest to Evergreen to littoral forests laced with sandy beaches along its coast at Baludera, Roglachang etc. The presence of Mud Volcanoes and limestone caves is a rare attraction for tourists, as it is present only in a few places in the world and these are truly wonders of nature and must see sights.
                </p>
        
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/3.jpeg"
                    alt="Eco-friendly architecture"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="/images/RestaurantImage.png"
                    alt="Local community"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img
                    src="/images/Billede 225.jpg"
                    alt="Pristine forest"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="/images/About2.png"
                    alt="Sustainable practices"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={valuesRef} className="py-24 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-4">
              Our Commitment to Responsible Tourism
            </h2>
            <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
              Three pillars guide everything we do at Dew Dale Resorts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 mb-6">
                  <i className={`${value.icon} text-4xl text-gold`}></i>
                </div>
                <h3 className="font-serif font-semibold text-2xl text-forest-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-olive text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section ref={locationRef} className="py-24 bg-white">

        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: locationInView ? 1 : 0, x: locationInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/About1.png"
                  alt="Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-dark to-transparent p-8">
                  <div className="flex items-center space-x-3 text-white mb-2">
                    <i className="ri-map-pin-line text-gold text-2xl"></i>
                    <span className="font-serif font-semibold text-xl">Sundergarh Village</span>
                  </div>
                  <p className="text-sand-light text-sm">Baratang Island, Andaman & Nicobar Islands</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: locationInView ? 1 : 0, x: locationInView ? 0 : 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-6">
                A Remote Paradise Worth the Journey
              </h2>
              <p className="text-olive text-lg leading-relaxed mb-8">
                Nestled in the heart of Baratang Island, Dew Dale Resorts offers a unique location that perfectly balances accessibility with seclusion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <i className="ri-road-map-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-2">
                      Strategic Highway Location
                    </h4>
                    <p className="text-olive text-base leading-relaxed">
                      Baratang Island is located at about 100 Km off the Capital city of Port Blair on the NH 4 (known as Andaman Trunk Road) towards Diglipur. The total length of the Island is around 22 Kms and totally separated by Creeks on both sides.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <i className="ri-compass-3-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-2">
                      100 km from Port Blair
                    </h4>
                    <p className="text-olive text-base leading-relaxed">
                      A scenic 3-hour journey through tribal reserves and pristine forests, offering glimpses of untouched Andaman.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <i className="ri-plant-line text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-forest-dark text-lg mb-2">
                      Surrounded by Tropical Forest
                    </h4>
                    <p className="text-olive text-base leading-relaxed">
                      Thick tropical forests envelop the resort, creating a natural sanctuary where wildlife thrives and tranquility reigns.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-sand-light text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Join us in redefining luxury travel. Discover how comfort, adventure, and responsibility come together at Dew Dale Resorts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://live.ipms247.com/booking/book-rooms-dewdaleresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-gold text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-gold-light shadow-xl whitespace-nowrap cursor-pointer"
            >
              Book Your Stay
            </a>
            <a
              href="/contact"
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-forest whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      

      <Footer />
      
    </div>
  );
};

export default AboutPage;
