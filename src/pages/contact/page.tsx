import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I would like to inquire about booking:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACheck-in: ${formData.checkIn}%0ACheck-out: ${formData.checkOut}%0AGuests: ${formData.guests}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919434280628?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappUrl = "https://wa.me/919434280628?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Dew%20Dale%20Resorts";

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contactHero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We're here to help plan your perfect escape to Baratang Island
          </p>
        </motion.div>
      </motion.section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Phone */}
            <a 
              href="tel:+919434280628"
              className="bg-cream hover:bg-sage/20 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <i className="ri-phone-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-semibold text-forest-dark mb-2">Call Us</h3>
              <p className="text-sm text-charcoal/60 mb-3">Available 24/7 for your convenience</p>
              <p className="text-gold font-semibold">+91 9434280628</p>
            </a>

            {/* WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream hover:bg-sage/20 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <i className="ri-whatsapp-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-semibold text-forest-dark mb-2">WhatsApp</h3>
              <p className="text-sm text-charcoal/60 mb-3">Quick responses to your queries</p>
              <p className="text-gold font-semibold">Chat with Us</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:dewdale.resorts@gmail.com"
              className="bg-cream hover:bg-sage/20 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <i className="ri-mail-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-semibold text-forest-dark mb-2">Email</h3>
              <p className="text-sm text-charcoal/60 mb-3">Send us your detailed inquiries</p>
              <p className="text-gold font-semibold text-sm">dewdale.resorts@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <motion.section 
        ref={formRef}
        initial={{ opacity: 0, y: 30 }}
        animate={formInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-20 bg-cream"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="font-serif text-3xl font-bold text-forest-dark mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-sage/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-dark hover:bg-forest-darker text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Send Inquiry
                  <i className="ri-send-plane-fill group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>

            {/* Resort Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl text-gold"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-forest-dark mb-3">
                      Our Location
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed">
                      Sundergarh Village, Baratang Island<br />
                      Middle Andaman, Andaman and Nicobar Islands<br />
                      India - 744202
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-charcoal/60">
                      <i className="ri-road-map-line text-gold"></i>
                      <span>105 km from Port Blair</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-charcoal/60">
                      <i className="ri-plant-line text-gold"></i>
                      <span>Nestled in evergreen forest near exotic beaches</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-2xl text-gold"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-forest-dark mb-3">
                      Reception Hours
                    </h3>
                    <p className="text-charcoal/80 mb-2">24/7 Front Desk Service</p>
                    <div className="space-y-1 text-sm text-charcoal/60">
                      <p>Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sage/10 rounded-3xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-map-2-line text-5xl text-sage/40 mb-4"></i>
                  <p className="text-charcoal/60">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How to Reach - BY SEA AND BY ROAD ONLY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-4">
              How to Reach
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Your journey to paradise starts here
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* By Air */}
            <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-flight-takeoff-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">By Air</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Regular ferry services connect Port Blair to Baratang Island. Enjoy the beautiful views during your journey.
              </p>
              <div className="inline-flex items-center gap-2 text-gold font-semibold">
                <i className="ri-calendar-line"></i>
                <span>Ferry Schedule Available</span>
              </div>
            </div>

            {/* By Road */}
            <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-car-line text-3xl text-gold"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">By Road</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Drive through the scenic Andaman Trunk Road. Our resort is located in Sundergarh village, easily accessible by car.
              </p>
              <div className="inline-flex items-center gap-2 text-gold font-semibold">
                <i className="ri-customer-service-line"></i>
                <span>Pickup Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-4">
        Additional Information
      </h2>
      <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
        Everything you need to know before planning your stay
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Terms & Conditions */}
      <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <i className="ri-file-text-line text-2xl text-gold"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">
          Terms & Conditions
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          Please review our resort policies regarding stays, guest responsibilities,
          property usage, and safety guidelines to ensure a pleasant experience.
        </p>
      </div>

      {/* Refund & Cancellation Policy */}
      <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <i className="ri-refund-2-line text-2xl text-gold"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">
          Refund & Cancellation
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          Cancellations and refunds are subject to our policy. Please contact us in
          advance to understand timelines, charges, and eligibility.
        </p>
      </div>

      {/* Privacy Policy */}
      <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <i className="ri-shield-check-line text-2xl text-gold"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">
          Privacy Policy
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          We respect your privacy. All personal information shared with us is handled
          securely and used only for booking and communication purposes.
        </p>
      </div>

      {/* Packages */}
      <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <i className="ri-gift-line text-2xl text-gold"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">
          Packages
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          Explore our specially curated stay packages that include accommodation,
          sightseeing, and unique island experiences.
        </p>
      </div>

      {/* Booking Engine */}
      <div className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300 lg:col-span-2">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <i className="ri-calendar-check-line text-2xl text-gold"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">
          Booking Engine
        </h3>
        <p className="text-charcoal/80 leading-relaxed">
          Our booking engine allows you to check availability, select rooms, and
          confirm your stay seamlessly.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-sage/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-center text-forest-dark mb-12">
            Quick answers to common questions
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
                
               Where is Dew Dale Resorts located?
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Dew Dale Resorts is located in Baratang Island, Andaman and Nicobar Islands, at about 100 Kms from Port Blair, by the National Highway running through Baratang towards Diglipur. Baratang Island can easily be reached by road (National Highway - 4) from Port Blair, with a 20 minutes vehicle ferry crossing on the last leg of the journey. One can then reach the Resort in 5 minutes by Car from vehicle ferry docking point.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
                What are the famous tourist attractions in and around Baratang Island?
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
                Baratang Island is famous as a tourist destination. Sightseeing in Baratang is unique and consists of natural wonders. Most sightseeing involves boat trips through mangroves. The popular sightseeing are the limestone caves, mud volcanoes, isolated and uncrowded beaches like Baludera, and most important of all the mesmerizing sunset boat trip to Parrot Island. The trip to the exotic and pristine Merk Bay beach can be covered from Baratang Island.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
                Is it necessary to start as early as 2.30-3 AM from Port Blair to cover Baratang sightseeing?
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
               No. It is not necessary. You can opt for a relaxed Baratang tour with night stay. Baratang trip is a 3 hour journey from Port Blair by road and should be planned in accordance with the convoy timings which start from the Jirkatang Police check-post. The convoy timings from the check-post are 6.00 AM, 9.00 AM, 12.00 Noon, and 2.30 PM. To reach the Jirkatang Police check-post, it takes one-and-half hours from Port Blair. And from the Jirkatang Police check-post to your next destination, that is, Middle Strait Police check-post, it takes another one-and-half hours. Baratang Island is across the Middle Strait Creek which can be crossed in 20 minutes on a vehicle ferry. So one can plan a trip to Baratang Island based on the above information.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
                What are the convoy timings from Jirkatang Police check-post?
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
             Convoy timings are 6.00 AM, 9.00 AM, 12.00 Noon, and 2.30 PM.              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
                What are the convoy timings for the return trip from Middle Strait Police check-post?
                <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
             Convoy timings for return trip are 6.30 AM, 9.30 AM, 12.30 PM and 3.00 PM.              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
              What are the main tourist attractions in and around Baratang Island and their timings?
              <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
             Lime Stone Caves – This is a boat trip from Baratang Jetty. Normal tour duration is 2 to 3 hours and this tour is available for booking from 7.00 AM to 11.30 AM.
              Mud Volcano Site – This is a road trip and takes 15 minutes from the Resort. Normal tour duration is half an hour to one hour. This tour is available anytime during the day.
              Parrot Island - This is a boat trip from Baratang Jetty. Normal tour duration is 2 hours. This tour is usually available at 4.30 PM, when one can witness thousands of parrots returning back to their natural habitat just before sunset.
              Baludera Beach – This beach can be reached by a road trip and takes 15 minutes from the Resort. Normal tour duration is half an hour to one hour. But if you are a beach lover, you can spend more time on this beach. This tour is available anytime during the day.
              Jungle Trekking – This tour can be taken up as a day tour. We have identified many trekking paths for tourists interested in this type of adventure.
              Creek Safari – Creek Safari is arranged for visitors who are interested in boat rides through the Creek.
              Merk Bay Beach, Lalaji Bay Beach, Amkunj Beach and Curtbert Bay Beach – Tours to all these isolated beaches can be arranged from Baratang as separate individual day trips. These are arranged as picnic tours by the Resort with packed food for the tour. Merk bay and Lalaji bay beaches are covered with boat trips, whereas Amkunj Beach and Curtbert Bay Beaches are reachable by road.</p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md group">
              <summary className="font-semibold text-forest-dark cursor-pointer flex items-center justify-between">
             One night or more in Baratang Island?
               <i className="ri-arrow-down-s-line text-2xl group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="mt-4 text-charcoal/80 leading-relaxed">
             Based on individual interest by including the above tour options one can decide how many nights need to be spent in Baratang Island. To explore regular sightseeing in Baratang Island leisurely, 2 nights stay in Baratang would be most ideal.  </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-forest-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Contact us now and let us help you plan your perfect island getaway
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919434280628"
              className="bg-gold hover:bg-gold/90 text-forest-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <i className="ri-phone-line"></i>
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-forest-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
