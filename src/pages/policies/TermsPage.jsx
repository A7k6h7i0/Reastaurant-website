import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="mt-20 relative h-[320px] md:h-[380px]">
        <img
          src="/images/Jolly Buoy Island.png"
          alt="Terms & Conditions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* INTRO */}
          <p className="text-gray-700 leading-relaxed mb-10">
            These terms and conditions govern your stay and booking with
            <strong> Dew Dale Resorts</strong>. By confirming your reservation,
            you agree to comply with the following policies.
          </p>

          {/* SECTION: CHECK-IN */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Check-in & Check-out Policy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Check-in time is <strong>09:00 AM</strong> and check-out time is
            <strong> 08:00 AM</strong>. Early check-in and late check-out are
            subject to room availability. Any late check-out beyond
            <strong> 02:00 PM</strong> will be charged as one additional night.
          </p>

          {/* SECTION: PAYMENT */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Reservation & Payment
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            All reservations are confirmed only upon receipt of
            <strong> 100% advance payment</strong>. Early check-in or late
            check-out may attract additional charges and are at the discretion
            of the resort.
          </p>

          {/* SECTION: ID */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Guest Identification
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Guests must present a valid government-approved photo ID at the time
            of check-in. Foreign nationals must provide a valid
            <strong> Passport and Visa</strong>. Indian nationals may present
            Passport, Driving License, Voter ID Card, or Aadhaar Card.
          </p>

          {/* SECTION: TAX */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Taxes & Charges
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Taxes are subject to change as per government regulations. Any
            increase in tariff due to tax changes will be charged to the guest
            and collected during check-out.
          </p>

          {/* SECTION: REFUND */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Refund Policy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            No refund will be allowed due to electricity failure, malfunction of
            AC, geyser, or similar facilities during the stay. Once the guest has
            checked in, no refund will be provided if the guest decides not to
            continue their stay for any reason.
          </p>

          {/* SECTION: RIGHTS */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Management Rights
          </h2>

          <p className="text-gray-700 leading-relaxed">
            The management reserves the right to cancel any booking if the guest
            is found violating the rules and regulations of the resort or
            engaging in inappropriate behavior.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
