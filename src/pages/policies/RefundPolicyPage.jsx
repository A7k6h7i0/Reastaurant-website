import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-20 py-20 bg-sand-light">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-forest-dark mb-6">
            Refund & Cancellation
          </h1>

          <ul className="list-disc pl-6 space-y-3 text-charcoal">
            <li>Check-in 09:00 AM, Check-out 08:00 AM</li>
            <li>Cancellation & Amendments of Bookings</li>
            <li>You may cancel your booking by sending an e-mail to dewdale.resorts@gmail.com with your reservation details to manage your booking.</li>
            <li>Please note the refund will be processed within 15 working days post sending an email request to dewdale.resorts@gmail.com with reservation number/details of the cancelled booking alongwith payment details.</li>
            <li>The refund on cancellation would be as under:</li>
            <li>For cancellation before 30 days – 75% of advance amount.</li>
            <li>Between 7 days & 29 days before check-in – 50% of advance amount.</li>
            <li>Up to 6 days before check-in – NO REFUND.</li>
            <li>No Show Policy applies.</li>


                <li>In-case of no-show 100% charge will be applicable.</li>
            
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
