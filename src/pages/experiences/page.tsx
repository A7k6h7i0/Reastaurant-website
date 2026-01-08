import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const whatsappBookingUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Dew%20Dale%20Resorts.%20Please%20share%20availability%20and%20booking%20details.";

  const experiences = [
    {
      id: 1,
      title: 'Canoeing & Kayaking',
      category: 'water',
      description: 'Paddle through pristine mangrove creeks and explore hidden waterways. Perfect for both beginners and experienced paddlers.',
      duration: '2-3 hours',
      difficulty: 'Easy to Moderate',
      image: '/images/Billede 225.jpg',
      bestTime: 'Early Morning',
      groupSize: '2-8 people'
    },
    {
      id: 2,
      title: 'Wildlife Safaris',
      category: 'nature',
      description: 'Venture into the evergreen forests to spot exotic wildlife including wild boars, deer, and rare bird species in their natural habitat.',
      duration: '3-4 hours',
      difficulty: 'Moderate',
      image : '/images/Billede 319.jpg',
      bestTime: 'Dawn or Dusk',
      groupSize: '4-10 people'
    },
    {
      id: 3,
      title: 'Bird Watching',
      category: 'nature',
      description: 'Discover over 100 species of exotic birds including the Andaman Woodpecker, Nicobar Pigeon, and many endemic species.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/Billede 036.jpg',
      bestTime: 'Early Morning',
      groupSize: '2-6 people'
    },
    {
      id: 4,
      title: 'Forest Hiking',
      category: 'adventure',
      description: 'Trek through ancient evergreen forests on well-marked trails. Experience the raw beauty of untouched nature and breathtaking viewpoints.',
      duration: '3-5 hours',
      difficulty: 'Moderate to Challenging',
      image : '/images/Billede 245.jpg',
      bestTime: 'Morning',
      groupSize: '4-12 people'
    },
    {
      id: 5,
      title: 'Biking Tours',
      category: 'adventure',
      description: 'Cycle through scenic village roads and forest trails. Experience local life and stunning landscapes at your own pace.',
      duration: '2-4 hours',
      difficulty: 'Easy to Moderate',
      image : '/images/Billede 347.jpg',
      bestTime: 'Morning or Evening',
      groupSize: '2-8 people'
    },
    {
      id: 6,
      title: 'Hand-line Fishing',
      category: 'water',
      description: 'Try traditional hand-line fishing techniques in pristine waters. A peaceful and rewarding experience for all ages.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/Billede 360.jpg',
      bestTime: 'Early Morning',
      groupSize: '2-6 people'
    },
    {
      id: 7,
      title: 'Village Walking Tours',
      category: 'culture',
      description: 'Immerse yourself in local culture with guided walks through Sundergarh village. Meet locals and learn about traditional island life.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/Billede 346.jpg',
      bestTime: 'Afternoon',
      groupSize: '4-10 people'
    },
    {
      id: 8,
      title: 'Beach Exploration',
      category: 'water',
      description: 'Discover lesser-known exotic beaches with pristine white sand and crystal-clear waters. Perfect for swimming and relaxation.',
      duration: '3-4 hours',
      difficulty: 'Easy',
      image : '/images/DSC00031.JPG',
      bestTime: 'Morning or Afternoon',
      groupSize: '2-12 people'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experiences', icon: 'ri-compass-3-line' },
    { id: 'water', name: 'Water Activities', icon: 'ri-water-flash-line' },
    { id: 'nature', name: 'Nature & Wildlife', icon: 'ri-leaf-line' },
    { id: 'adventure', name: 'Adventure', icon: 'ri-mountain-line' },
    { id: 'culture', name: 'Cultural', icon: 'ri-community-line' }
  ];

  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Easy')) return 'text-emerald-600';
    if (difficulty.includes('Moderate')) return 'text-amber-600';
    return 'text-rose-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src = "/images/Billede 390.jpg"
            alt="Experiences at Dew Dale"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Unforgettable Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
            Discover the magic of Baratang Island through curated adventures and authentic cultural encounters
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Book Your Adventure
            </a>
            <a
              href="#experiences"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 whitespace-nowrap cursor-pointer"
            >
              Explore Activities
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${category.icon} text-lg`}></i>
                </div>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className={`font-semibold text-sm ${getDifficultyColor(experience.difficulty)}`}>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-3 font-serif">
                    {experience.title}
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center text-emerald-600">
                        <i className="ri-time-line text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 mb-1">Duration</p>
                        <p className="text-sm font-semibold text-stone-800">{experience.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center text-emerald-600">
                        <i className="ri-sun-line text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 mb-1">Best Time</p>
                        <p className="text-sm font-semibold text-stone-800">{experience.bestTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center text-emerald-600">
                        <i className="ri-group-line text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs text-stone-500 mb-1">Group Size</p>
                        <p className="text-sm font-semibold text-stone-800">{experience.groupSize}</p>
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-whatsapp-line text-lg"></i>
                    Book This Experience
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
              Important Information
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Everything you need to know before booking your adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-full mb-6">
                <i className="ri-calendar-check-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Booking & Cancellation</h3>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Book at least 24 hours in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Free cancellation up to 12 hours before</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Weather-dependent activities may be rescheduled</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-amber-100 rounded-full mb-6">
                <i className="ri-shield-check-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Safety & Guidelines</h3>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Experienced guides for all activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Safety equipment provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Follow guide instructions at all times</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                <i className="ri-luggage-cart-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">What to Bring</h3>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Comfortable clothing and footwear</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Sunscreen and insect repellent</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-emerald-600 mt-1"></i>
                  <span>Water bottle and camera</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Contact our travel desk to customize your perfect experience package
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-100 text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-lg"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              WhatsApp Us
            </a>
            <a
              href="tel:+919434280628"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line text-xl"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
