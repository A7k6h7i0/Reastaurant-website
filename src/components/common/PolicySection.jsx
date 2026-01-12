import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function PolicySection() {
  const [params] = useSearchParams();
  const info = params.get('info');
  const ref = useRef(null);

  useEffect(() => {
    if (info) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [info]);

  if (!info) return null;

  const data = {
    terms: {
      title: 'Terms & Conditions',
        desc: [
      'Terms & Conditions',
      'Check-out time is 08:00 AM and check-in is 09:00 AM. Early check-in and late check-out are subject to room availability.',
      'Any late check-out beyond 2:00 PM will be charged as one extra night.',
      'Early check-in or late check-out may be chargeable by the hotel directly.',
      'All reservations are confirmed only on 100% advance payment.',
      'Government-approved photo ID proof with address is mandatory at check-in.',
      'Foreign nationals must present a valid passport and visa.',
      'Indian nationals must present Passport, Driving License, Voter ID, or Aadhaar card.',
      'Taxes are subject to change and any increase will be charged at check-out.',
      'No refund will be allowed due to electricity failure, AC, or geyser issues.',
      'No refund once the guest checks in and decides not to use the room.',
      'Management reserves the right to cancel bookings for rule violations.',
    ],
    },
    refund: {
      title: 'Refund & Cancellation Policy',
       desc: [
    'Refund & Cancellation Policy',
    'You may cancel your booking by sending an email to dewdale.resorts@gmail.com with your reservation details.',
    'Refunds will be processed within 15 working days after receiving the cancellation request along with reservation number and payment details.',
    'For cancellation before 30 days of check-in, 75% of the advance amount will be refunded.',
    'For cancellation between 7 and 29 days before check-in, 50% of the advance amount will be refunded.',
    'For cancellation up to 6 days before check-in, no refund will be provided.',
    'In case of a no-show, 100% of the booking amount will be charged and no refund will be applicable.',
  ],
    },
    privacy: {
      title: 'Privacy Policy',
    desc: [
    'Privacy Policy',
    'Dew Dale Resorts collects certain information through its website www.dewdaleresorts.online to improve user experience and website performance.',
    'Our servers automatically collect analytics (clickstream) data for all visitors to the website.',
    'The information collected includes referring website, pages visited, total bytes of data transferred, geographic location, web browser type and version, date and time of page requests, and operating system type and version.',
    'This analytics data is used solely to generate reports and statistics about website usage and visitor behavior.',
    'Dew Dale Resorts uses cookies and similar technologies to understand which parts of the website are most popular, how visitors navigate the site, and how long they spend on each section.',
    'Cookies are also used to study traffic patterns and measure the effectiveness of customer communications.',
    'Our website contains online forms that allow users to submit enquiries, request services or support, or participate in discussions.',
    'All information collected through forms is used only for the purpose for which it was provided.',
    'Dew Dale Resorts does not disclose any personal information collected through the website to third parties without explicit user consent.',
    'If you contact Dew Dale Resorts via email or enquiry forms, your email address is used only to respond to your request and communicate directly with you.',
    'We do not add user email addresses to mailing lists and do not send unsolicited emails (spam).',
    'Dew Dale Resorts does not provide secure transmission facilities over the internet, and users should be aware of the inherent risks involved in transmitting information online.',
  ],
    },
    packages: {
      title: 'Packages',
      desc: [
        'Packages',
        'Discover curated stay packages including accommodation',
            'sightseeing tours, meals, and local experiences.']
    },
    booking: {
      title: 'Booking Engine',
      desc: [
        'Booking Engine',
        'Our booking engine allows real-time availability checks',
            'secure payments,  instant confirmations and online booking.']
    }
  };

  if (!data[info]) return null;

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="list-disc pl-6 space-y-3 text-charcoal leading-relaxed">
            {data[info].desc.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
      </div>
    </section>
  );
}
