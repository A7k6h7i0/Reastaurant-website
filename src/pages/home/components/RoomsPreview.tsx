
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const RoomsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rooms = [
    {
      name: 'Deluxe Double Room - AC',
      image: '/images/RestaurantImage.png',
      amenities: ['Air Conditioning', 'King Bed', 'Forest View', 'En-suite Bathroom'],
      price: '₹6,900',
    },
    {
      name: 'Deluxe Double Room - Non AC',
      image:"/images/towelswans.png",
      amenities: ['Natural Ventilation', 'Double Bed', 'Garden View', 'Private Balcony'],
      price: '₹5900',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-coconut"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-forest-dark mb-4">
            Luxurious Eco-Accommodations
          </h2>
          <p className="text-olive text-lg max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in comfort while staying connected to nature. 
            Our thoughtfully designed rooms blend modern luxury with eco-conscious living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-semibold text-2xl text-forest-dark mb-4">
                  {room.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-sand-light text-olive text-xs rounded-full font-sans whitespace-nowrap"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-sand">
                  <div>
                    <span className="font-serif font-bold text-3xl text-gold">
                      {room.price}
                    </span>
                    <span className="text-olive text-sm ml-2">/night</span>
                  </div>
                  <Link
                    to="/rooms"
                    className="text-forest font-sans text-sm font-medium hover:text-gold transition-colors duration-300 whitespace-nowrap"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/rooms"
            className="inline-block px-10 py-4 rounded-full bg-forest text-white font-sans font-semibold text-base tracking-wider uppercase transition-all duration-300 hover:bg-forest-light shadow-lg whitespace-nowrap"
          >
            View All Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsPreview;
