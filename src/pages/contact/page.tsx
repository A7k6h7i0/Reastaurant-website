import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    arrivalDate: '',
    guests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate textarea length
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5c8qf9dn6dhfpiabq30', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          arrivalDate: '',
          guests: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src = "/images/Billede 388.jpg"
            alt="Contact Dew Dale Resorts"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
            We're here to help plan your perfect escape to Baratang Island
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                <i className="ri-phone-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Call Us</h3>
              <p className="text-stone-600 mb-4">Available 24/7 for your convenience</p>
              <a 
                href="tel:+919933288870"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg cursor-pointer"
              >
                +91 99332 88870
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                <i className="ri-whatsapp-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">WhatsApp</h3>
              <p className="text-stone-600 mb-4">Quick responses to your queries</p>
              <a 
                href="https://wa.me/919933288870"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg cursor-pointer"
              >
                Chat with Us
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mx-auto mb-6">
                <i className="ri-mail-line text-3xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Email</h3>
              <p className="text-stone-600 mb-4">Send us your detailed inquiries</p>
              <a 
                href="mailto:info@dewdaleresorts.com"
                className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg cursor-pointer"
              >
                info@dewdaleresorts.com
              </a>
            </div>
          </div>

          {/* Location & Form Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Information */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">
                Visit Our Resort
              </h2>
              
              <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">Address</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Sundergarh Village, Baratang Island<br />
                      Middle Andaman, Andaman and Nicobar Islands<br />
                      India - 744202
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                    <i className="ri-map-2-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">Distance</h3>
                    <p className="text-stone-600 leading-relaxed">
                      65 miles from Port Blair<br />
                      Nestled in evergreen forest near exotic beaches
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                    <i className="ri-time-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">Reception Hours</h3>
                    <p className="text-stone-600 leading-relaxed">
                      24/7 Front Desk Service<br />
                      Check-in: 2:00 PM | Check-out: 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-md h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125000!2d92.7!3d12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA2JzAwLjAiTiA5MsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dew Dale Resorts Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 font-serif">
                Send Us a Message
              </h2>
              
              <form 
                id="contact-form"
                data-readdy-form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="Room Booking">Room Booking</option>
                      <option value="Package Inquiry">Package Inquiry</option>
                      <option value="Experience Booking">Experience Booking</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="arrivalDate" className="block text-sm font-semibold text-stone-700 mb-2">
                      Expected Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm cursor-pointer"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-stone-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  <p className="text-xs text-stone-500 mt-2">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line text-xl animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line text-xl"></i>
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3">
                    <i className="ri-checkbox-circle-line text-2xl text-emerald-600"></i>
                    <p className="text-emerald-700 font-medium">
                      Thank you! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-3">
                    <i className="ri-error-warning-line text-2xl text-rose-600"></i>
                    <p className="text-rose-700 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
              How to Reach Us
            </h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Your journey to paradise starts here
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-full mb-6">
                <i className="ri-plane-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">By Air</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Fly to Veer Savarkar International Airport, Port Blair. From there, it's a scenic 65-mile journey to our resort.
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Airport Transfer Available
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-full mb-6">
                <i className="ri-ship-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">By Sea</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Regular ferry services connect Port Blair to Baratang Island. Enjoy the beautiful coastal views during your journey.
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Ferry Schedule Available
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl">
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-full mb-6">
                <i className="ri-car-line text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">By Road</h3>
              <p className="text-stone-600 leading-relaxed mb-4">
                Drive through the scenic Andaman Trunk Road. Our resort is located in Sundergarh village, easily accessible by car.
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                Pickup Service Available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md group cursor-pointer">
              <summary className="font-semibold text-stone-800 text-lg flex items-center justify-between cursor-pointer">
                What are the check-in and check-out times?
                <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md group cursor-pointer">
              <summary className="font-semibold text-stone-800 text-lg flex items-center justify-between cursor-pointer">
                Do you provide airport/ferry transfer services?
                <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Yes, we offer pickup and drop services from Port Blair airport and ferry terminal. Please contact us in advance to arrange your transfer.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md group cursor-pointer">
              <summary className="font-semibold text-stone-800 text-lg flex items-center justify-between cursor-pointer">
                What activities can be arranged through the resort?
                <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Our travel desk can arrange canoeing, kayaking, wildlife safaris, bird-watching, hiking, biking, fishing, and village tours. All activities are guided by experienced professionals.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md group cursor-pointer">
              <summary className="font-semibold text-stone-800 text-lg flex items-center justify-between cursor-pointer">
                Is food included in the room tariff?
                <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Our packages typically include meals. Please check your specific package details or contact us for information about meal inclusions and our multi-cuisine restaurant options.
              </p>
            </details>

            <details className="bg-white p-6 rounded-xl shadow-md group cursor-pointer">
              <summary className="font-semibold text-stone-800 text-lg flex items-center justify-between cursor-pointer">
                What is your cancellation policy?
                <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform"></i>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Cancellation policies vary by season and package. Please contact us directly for detailed information about cancellation terms and refund policies.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Contact us now and let us help you plan your perfect island getaway
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919933288870"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-stone-100 text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-lg"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              WhatsApp Now
            </a>
            <a
              href="tel:+919933288870"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line text-xl"></i>
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
