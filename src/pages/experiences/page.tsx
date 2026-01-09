import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const experiences = [
    {
      id: 1,
      title: 'Limestone Caves',
      category: 'nature',
      description: 'The lime stone caves, full of splendid stalagmites, stalactites and pillar rocks, can be accessed by a 40-minute boat ride through the creeks from the Nilambur Jetty.',
      duration: '3-4 hours',
      difficulty: 'Moderate',
      image: '/images/limestoneCaves.png',
      bestTime: 'Morning',
      groupSize: '4-10 people'
    },
    {
      id: 2,
      title: 'Mud Volcano',
      category: 'nature',
      description: 'A mud volcano is created by natural gases emitted by decaying organic matter underground. As the mud is pushed upwards by the gas, it deposits and hardens above ground.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/mudvalcano.png',
      bestTime: 'Morning or Afternoon',
      groupSize: '4-12 people'
    },
    {
      id: 3,
      title: 'Parrot Island',
      category: 'nature',
      description: 'Parrot Island is a tiny island situated near Baratang. It is home to thousands of parrots. During sunset, thousands of parrots come in groups to settle in that island.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/parrotIsland.png',
      bestTime: 'Sunset',
      groupSize: '4-15 people'
    },
    {
      id: 4,
      title: 'Baludera Beach',
      category: 'water',
      description: 'Baludera Beach is an unpolluted shallow and isolated beach in Baratang Island. During low tide one can wade through for almost a kilometer.',
      duration: '3-4 hours',
      difficulty: 'Easy',
      image : '/images/Baludera Beach.png',
      bestTime: 'Morning',
      groupSize: '2-12 people'
    },
    {
      id: 5,
      title: 'North Bay Island',
      category: 'water',
      description: 'Merk Bay beach is in North Passage Island and offers an excellent sandy beach with unpolluted environment and evergreen forests.',
      duration: '4-5 hours',
      difficulty: 'Easy to Moderate',
      image : '/images/NorthBayIsland.png',
      bestTime: 'Morning or Afternoon',
      groupSize: '4-15 people'
    },
    {
      id: 6,
      title: 'Jolly Buoy Island',
      category: 'water',
      description: 'Experience the rich mangrove ecosystem through a boat ride. An attraction to bird lovers and nature enthusiasts, as biodiversity rich areas which harbor diverse flora and fauna.',
      duration: '2-3 hours',
      difficulty: 'Easy',
      image : '/images/Jolly Buoy Island.png',
      bestTime: 'Early Morning',
      groupSize: '4-10 people'
    },
    {
      id: 7,
      title: 'Ross Island',
      category: 'adventure',
      description: 'Trek through dense tropical forests ranging from tidal swamp forest to evergreen to littoral forests. Perfect for adventure enthusiasts and nature lovers.',
      duration: '3-4 hours',
      difficulty: 'Moderate to Challenging',
      image : '/images/Ross Island.png',
      bestTime: 'Morning',
      groupSize: '4-10 people'
    },
    {
      id: 8,
      title: 'Chidiya Tapu',
      category: 'adventure',
      description: 'Experience overnight camping on pristine beaches with evergreen forests. Enjoy bonfires, stargazing, and the sounds of nature in complete serenity.',
      duration: 'Full Day',
      difficulty: 'Moderate',
      image : '/images/Chidiya Tapu.png',
      bestTime: 'Evening to Morning',
      groupSize: '6-15 people'
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
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Billede 225.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Experiences
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the magic of Baratang Island through curated adventures and authentic natural encounters
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-sage/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-forest-dark text-white shadow-lg scale-105'
                    : 'bg-cream text-forest-dark hover:bg-sage/20'
                }`}
              >
                <i className={`${category.icon} text-xl`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className={`text-sm font-semibold ${getDifficultyColor(experience.difficulty)}`}>
                      {experience.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-forest-dark mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Details Grid */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <i className="ri-time-line text-gold text-lg"></i>
                      <span className="font-medium">Duration</span>
                      <span className="ml-auto">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <i className="ri-sun-line text-gold text-lg"></i>
                      <span className="font-medium">Best Time</span>
                      <span className="ml-auto">{experience.bestTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <i className="ri-group-line text-gold text-lg"></i>
                      <span className="font-medium">Group Size</span>
                      <span className="ml-auto">{experience.groupSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center text-forest-dark mb-12">
            Everything you need to know before booking your adventure
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-center text-charcoal/80">
              Contact our travel desk to customize your perfect experience package
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
