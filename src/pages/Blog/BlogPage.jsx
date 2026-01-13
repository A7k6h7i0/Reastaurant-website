import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
// import PolicySection from '../../components/common/PolicySection';

const blogs = [
  {
    id: 1,
    title: "Experience Nature at Dew Dale Resorts",
    excerpt:
      "Wake up to lush greenery, fresh air, and serene surroundings at Dew Dale Resorts, Baratang Island.",
    image:
      "/images/bog1.png",
  },
  {
    id: 2,
    title: "Top Things to Do Near Baratang Island",
    excerpt:
      "Explore limestone caves, mangrove creeks, mud volcanoes and untouched beaches near the resort.",
    image: "/images/blog2.png"
  },
  {
    id: 3,
    title: "Why Dew Dale Resorts is Ideal for Families",
    excerpt:
      "Spacious rooms, calm environment and safe surroundings make it perfect for family vacations.",
    image:
      "/images/Billede 224.jpg",
  },
  {
    id: 4,
    title: "Best Time to Visit Baratang Island",
    excerpt:
      "Plan your stay with seasonal insights to enjoy the beauty of Andaman at its best.",
    image:
     "/images/blog4.png"  
    },
  {
    id: 5,
    title: "Eco-Tourism at Dew Dale Resorts",
    excerpt:
      "Discover how Dew Dale Resorts blends comfort with sustainability and nature conservation.",
    image:
          "/images/blog5.png"
    },
  {
    id: 6,
    title: "A Complete Travel Guide to Baratang Island",
    excerpt:
      "From how to reach to what to explore — everything you need to know before your visit.",
    image:
      "/images/About2.png",
  },
];

const BlogPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden mt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/AboutHeroImage.png')" }}
        >
          
          <div className="absolute inset-0 bg-forest-dark/70"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm tracking-widest uppercase font-sans mb-6">
              Our Stories
            </div>
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6">
              Dew Dale Resorts Blog
            </h1>
            <p className="text-sand-light text-lg leading-relaxed">
              Travel stories, experiences and guides from Baratang Island’s
              first eco-luxury resort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-forest-dark mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-olive text-base mb-6">
                    {blog.excerpt}
                  </p>

                  <button className="text-gold font-sans font-medium uppercase tracking-wider text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <PolicySection /> */}
      <Footer />
    </div>
  );
};

export default BlogPage;
