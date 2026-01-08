
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20woman%20in%20her%20thirties%20smiling%20warmly%20at%20camera%2C%20casual%20elegant%20attire%2C%20natural%20outdoor%20lighting%2C%20genuine%20happy%20expression%2C%20travel%20lifestyle%20portrait%20with%20simple%20blurred%20background&width=400&height=500&seq=guest-001&orientation=portrait',
      review: 'Dew Dale Resorts exceeded all our expectations! The limestone caves were breathtaking, and the eco-friendly approach made us feel good about our stay. The staff went above and beyond to make our anniversary special.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore, India',
      image: 'https://readdy.ai/api/search-image?query=Indian%20man%20in%20his%20forties%20with%20friendly%20smile%2C%20casual%20shirt%2C%20outdoor%20natural%20setting%2C%20confident%20relaxed%20expression%2C%20vacation%20portrait%20photography%20with%20simple%20blurred%20background&width=400&height=500&seq=guest-002&orientation=portrait',
      review: 'An absolute hidden gem! The mangrove boat ride at sunrise was magical. Being surrounded by pristine forest while enjoying modern comforts is a rare combination. Highly recommend for nature lovers.',
      rating: 5,
    },
    {
      name: 'Sarah & James Wilson',
      location: 'London, UK',
      image: 'https://readdy.ai/api/search-image?query=Happy%20Caucasian%20couple%20in%20their%20thirties%20smiling%20together%2C%20casual%20vacation%20attire%2C%20tropical%20setting%2C%20genuine%20joyful%20expressions%2C%20travel%20couple%20portrait%20with%20simple%20blurred%20background&width=400&height=500&seq=guest-003&orientation=portrait',
      review: 'Our honeymoon at Dew Dale was perfect! The resort\'s commitment to responsible tourism and the untouched beauty of Baratang Island made it unforgettable. The Parrot Island sunset is something we\'ll cherish forever.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-forest-dark relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-12 left-12 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M20 40C20 40 40 20 60 40C80 60 60 80 60 80" stroke="#E8DCC4" strokeWidth="3"/>
          <path d="M60 40C60 40 80 20 100 40C120 60 100 80 100 80" stroke="#E8DCC4" strokeWidth="3"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">
            Guest Experiences
          </h2>
          <p className="text-sand-light text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from travelers who discovered paradise at Dew Dale Resorts
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sand text-6xl font-serif mb-6">"</div>
                  
                  <p className="text-forest-dark text-lg md:text-xl leading-relaxed mb-6 font-sans">
                    {testimonials[currentIndex].review}
                  </p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-gold text-xl"></i>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-serif font-semibold text-xl text-forest-dark">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-olive text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
