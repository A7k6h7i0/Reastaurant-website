import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const RoomsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  const rooms = [
    {
      name: 'Deluxe Double Room - AC',
      category: 'Air Conditioned',
      images: [
          '/images/RestaurantImage.png',
          '/images/towelswans.png',
          '/images/1.png',
      ],
      description: 'Dew Dale Resorts is the only property of its kind in the entire region. Beautiful Architechture and well furnished rooms are the main highlights of the Resort .Located about 65 miles from Port Blair in the Sundergarh village on Baratang Island is this modern, eco-friendly resort nestled amidst the lush green forest near lesser known exotic beaches. The hotel s travel desk can help guests arrange a host of activities, tours and excursions, including canoeing and kayaking, safaris, bird-watching, hiking, biking, hand-line fishing and rural village walking tours. Meeting facilities for executive travelers are also available. 16 well furnished deluxe double room, cottage type with independent sit outs in a village setting located in the midst of evergreen forest. Air conditioners are provided in all rooms for your comfort.',
      amenities: [
        'All rooms are furnished with Double bed.',
        '24 hrs. hot / cold water in rooms.',
        'Intercom facility from all rooms.',
        'Out door & indoor games.',
        'A multi-cuisine open restaurant.',
        'Arrangements for meeting, training and seminars for 50 Pax',
      ],
      occupancy: '2 Adults',
      size: '270 sq ft',
      price: '₹6,900',
      features: [
        'Premium bedding with high thread count',
        'Eco-friendly air conditioning',
        'Spacious work desk',
        'Private balcony with seating',
        'Blackout curtains for restful sleep',
      ],
    },
    {
      name: 'Deluxe Double Room - Non AC',
      category: 'Natural Ventilation',
      images: [
        '/images/towelswans.png',
       '/images/RestaurantImage.png',
        '/images/1.png',
      ],
      description: 'Embrace the natural climate of Baratang Island in our non-AC deluxe rooms. Designed with excellent cross-ventilation and ceiling fans, these rooms offer an authentic tropical experience while maintaining comfort. Perfect for nature enthusiasts who want to stay connected to the environment.',
      amenities: [
        'Natural Ventilation',
        'Ceiling Fan',
        'Double Bed',
        'En-suite Bathroom',
        'Garden View',
        'Hot Water',
        'Free Wi-Fi',
        'Room Service',
        'Complimentary Toiletries',
        'Tea/Coffee Maker',
      ],
      occupancy: '2 Adults',
      size: '270 sq ft',
      price: '₹5,990',
      features: [
        'Excellent cross-ventilation design',
        'High-speed ceiling fans',
        'Mosquito nets provided',
        'Private sit-out area',
        'Authentic island living experience',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
          src = "images/RestaurantImage.png"
          alt="Dew Dale Resorts Rooms"
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm tracking-widest uppercase font-sans mb-6 whitespace-nowrap">
              Accommodations
            </div>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6">
              Rooms & Stay
            </h1>
            <p className="text-sand-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Choose from our thoughtfully designed rooms, each offering a unique blend of comfort and connection to nature
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section ref={ref} className="py-24 bg-sand-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Gallery */}
                  <div className="relative h-[400px] lg:h-auto">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-full bg-gold text-white text-sm font-sans font-medium whitespace-nowrap">
                        {room.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <h2 className="font-serif font-bold text-3xl md:text-4xl text-forest-dark mb-4">
                        {room.name}
                      </h2>
                      <p className="text-olive text-base leading-relaxed mb-6">
                        {room.description}
                      </p>

                      {/* Room Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-sand">
                        <div>
                          <div className="flex items-center space-x-2 text-forest-dark mb-1">
                            <i className="ri-user-line text-gold"></i>
                            <span className="text-sm font-sans font-medium">Occupancy</span>
                          </div>
                          <p className="text-olive text-sm">{room.occupancy}</p>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 text-forest-dark mb-1">
                            <i className="ri-layout-line text-gold"></i>
                            <span className="text-sm font-sans font-medium">Room Size</span>
                          </div>
                          <p className="text-olive text-sm">{room.size}</p>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h4 className="font-sans font-semibold text-forest-dark mb-3">Amenities</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {room.amenities.slice(0, 6).map((amenity, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <i className="ri-check-line text-gold text-sm"></i>
                              <span className="text-olive text-sm">{amenity}</span>
                            </div>
                          ))}
                        </div>
                        {room.amenities.length > 6 && (
                          <button
                            onClick={() => setSelectedRoom(selectedRoom === index ? null : index)}
                            className="mt-3 text-forest text-sm font-medium hover:text-gold transition-colors duration-300 cursor-pointer whitespace-nowrap"
                          >
                            {selectedRoom === index ? 'Show Less' : `+${room.amenities.length - 6} More`}
                          </button>
                        )}
                      </div>

                      {/* Expanded Amenities */}
                      {selectedRoom === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6 grid grid-cols-2 gap-2"
                        >
                          {room.amenities.slice(6).map((amenity, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <i className="ri-check-line text-gold text-sm"></i>
                              <span className="text-olive text-sm">{amenity}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-sand">
                      <div>
                        <div className="text-olive text-sm mb-1">Starting from</div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-serif font-bold text-4xl text-gold">{room.price}</span>
                          <span className="text-olive text-sm">/night</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={whatsappBookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-forest text-white font-sans font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-forest-light whitespace-nowrap cursor-pointer"
                        >
                          Book Now
                        </a>
                        <a
                          href={whatsappBookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-transparent border-2 border-forest text-forest font-sans font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:bg-forest hover:text-white whitespace-nowrap cursor-pointer flex items-center justify-center"
                        >
                          Enquire
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4">
              Booking Information
            </h2>
            <p className="text-sand-light text-lg max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about reserving your stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold/20 mb-6">
                <i className="ri-calendar-check-line text-gold text-2xl"></i>
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">Check-in / Check-out</h3>
              <p className="text-sand-light text-sm leading-relaxed">
                Check-in: 2:00 PM<br />
                Check-out: 11:00 AM<br />
                Early check-in subject to availability
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold/20 mb-6">
                <i className="ri-shield-check-line text-gold text-2xl"></i>
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">Cancellation Policy</h3>
              <p className="text-sand-light text-sm leading-relaxed">
                Free cancellation up to 48 hours before check-in. 
                50% refund for cancellations within 48 hours.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold/20 mb-6">
                <i className="ri-restaurant-line text-gold text-2xl"></i>
              </div>
              <h3 className="font-serif font-semibold text-xl text-white mb-3">Meals Included</h3>
              <p className="text-sand-light text-sm leading-relaxed">
                Complimentary breakfast included. 
                Multi-cuisine restaurant available for lunch and dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomsPage;
