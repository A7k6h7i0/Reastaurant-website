
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Limestone Caves',
      image: '/images/8.jpeg',
      size: 'large',
    },
    {
      title: 'Mangrove Creek Boat Ride',
      image: '/images/Billede 016.jpg',
      size: 'large',  
    },
    {
      title: 'Parrot Island Sunset',
      image: '/images/Billede 017.jpg',
      size: 'large',
    },
    {
      title: 'Mud Volcano',
      image: '/images/Billede 018.jpg',
      size: 'small',
    },
    {
      title: 'Baludera Beach',
      image: '/images/DSC00069.JPG',
      size: 'small',
    },
    {
      title: 'Forest Hiking Trails',
      image: '/images/Billede 389.jpg',
      size: 'small',
    },
    {
      title: 'Nature Exploration',
      image: '/images/Billede 028.jpg',
      size: 'small',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-sand-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-4">
            Unforgettable Experiences Await
          </h2>
          <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
            Discover the natural wonders of Baratang Island through our curated experiences. 
            From ancient caves to pristine beaches, every moment is an adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
                exp.size === 'large' ? 'md:row-span-2' : 'md:row-span-1'
              }`}
              style={{ minHeight: exp.size === 'large' ? '500px' : '240px' }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif font-semibold text-2xl text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-sm font-sans tracking-wider uppercase whitespace-nowrap">
                    Learn More
                  </span>
                  <i className="ri-arrow-right-line text-gold text-lg"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
