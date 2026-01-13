import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="mt-20 relative h-[320px] md:h-[380px]">
        <img
          src="/images/Jolly Buoy Island.png"
          alt="Policy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
            Cancellation, Modification & Refund Policy
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* SECTION 1 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
            Cancellation & Amendments of Bookings :
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            You may cancel your booking by sending an email to{' '}
            <a
              href="mailto:dewdale.resorts@gmail.com"
              className="text-blue-700 font-medium underline"
            >
              dewdale.resorts@gmail.com
            </a>{' '}
            with your reservation details to manage your booking.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Please note that the refund will be processed within <strong>15 working days</strong>{' '}
            after receiving the cancellation request along with reservation number
            and payment details.
          </p>

          {/* SECTION 2 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
            The Refund on Cancellation Would Be as Under
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-relaxed">
            <li>
              For cancellation before <strong>30 days</strong> – 75% of the advance amount will be refunded.
            </li>
            <li>
              For cancellation between <strong>7 days & 29 days</strong> before check-in –
              50% of the advance amount will be refunded.
            </li>
            <li>
              For cancellation up to <strong>6 days</strong> before check-in – <strong>NO REFUND</strong>.
            </li>
            <li>
              In case of <strong>No-Show</strong>, 100% of the booking amount will be charged
              and no refund will be applicable.
            </li>
          </ul>

        </div>
      </section>

      <Footer />
    </div>
  );
}
