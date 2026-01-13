import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-20 py-20 bg-sand-light">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-forest-dark mb-6">
            Terms & Conditions
          </h1>

          <ul className="list-disc pl-6 space-y-3 text-charcoal">
            <li>Check-out time is 08.00 AM and Check-in is 09.00 AM. Early check-in and late check-out are subject to availability of rooms. Any late check-out beyond 2.00 PM will be charged as one extra night’s room rate.</li>

<li>Early check-in or late check-out is subject to availability and may be chargeable by the hotel directly.</li>

<li>All reservations will be confirmed only on 100% advance payment.</li>

<li>Government-approved photo identity proof with address of the guest and companion(s), if any, must be presented at the time of check-in. Foreign nationals are required to present a valid Passport and Visa. Indian nationals must present any one of the following: Passport, Driving License, Voter ID Card, or Aadhaar Card bearing the holder’s photograph and address.</li>

<li>Taxes are subject to change. Any increase in tariff due to a change in taxes will be charged to the guest and collected at the time of check-out.</li>

<li>No refund will be allowed in any case on account of breakdown of electricity or failure of AC/Geyser during the stay.</li>

<li>Once the booking entry is made in the booking register and the guest has checked in, no refund will be allowed if the guest decides not to use the room for any reason whatsoever.</li>

<li>The management reserves the right to cancel any booking if the guest is found to be performing any acts in violation of the rules and conditions of the resort.</li>

          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
