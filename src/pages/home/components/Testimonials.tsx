
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
      name: 'Mrityunjoy Chakraborty',
      location: 'Mumbai, India',
      review: "Resort is located in a rural setting. Here, one can enjoy the sounds of nature, peace & quiet. The Resort is well-maintained, clean. Staff employed are locals. Food is simple and tasty. All in all a nice place to stay with family.",
      rating: 5,
    },
    {
      name: 'Varun Sharma',
      location: 'Bangalore, India',
      review: "The property is situated amidst lush green, calm and serene rural area of Baratang. The stay was pleasant, rooms spacious and clean and staff was helpful and courteous. The Manager Mr. Tejasvi was really friendly, helpful and efficiently took care of all our requirements.",
      rating: 5,
    },
    {
      name: 'Joshna John',
      location: 'London, UK',
      review: "recommended baratang this time and Dew dale resorts for the stay. This Beautiful resort had brilliant service and all members of staff greeted us with a friendly face. restaurant service and food was also very good . Very attractive with lovely rooms.Clean, stylish and very comfortable.",
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
