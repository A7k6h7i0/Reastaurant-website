
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyDewDale = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: 'ri-trophy-line',
      title: 'Pioneer Resort',
      description: 'First tourism project in Baratang Island, setting standards for eco-luxury hospitality',
    },
    {
      icon: 'ri-leaf-line',
      title: 'Eco & Rural Tourism',
      description: 'Committed to sustainable practices and empowering local communities through responsible tourism',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Isolated Forest Location',
      description: 'Surrounded by thick tropical forests, offering complete immersion in pristine nature',
    },
    {
      icon: 'ri-heart-line',
      title: 'Responsible Tourism',
      description: 'Dedicated to minimal environmental impact while maximizing authentic cultural experiences',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-forest-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Number & Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-gold/20 text-9xl font-bold mb-4">01</div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
                Why Choose Dew Dale Resorts
              </h2>
              <p className="text-sand-light text-lg leading-relaxed">
                Experience the perfect blend of luxury and nature at Andaman's most exclusive eco-resort. 
                We're not just a destination – we're a movement towards responsible, immersive tourism.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold/10 mb-6">
                    <i className={`${feature.icon} text-3xl text-gold`}></i>
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-forest-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-olive text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDewDale;
