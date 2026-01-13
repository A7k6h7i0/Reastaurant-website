import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function BookingEnginePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-20 py-20 bg-sand-light">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-forest-dark mb-6">
            Booking engine
          </h1>

          <ul className="list-disc pl-6 space-y-3 text-charcoal">
            <li>Our booking engine allows real-time availability checks.</li>
            <li>secure payments,  instant confirmations and online booking.</li>
            
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
