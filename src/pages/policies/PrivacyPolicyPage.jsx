import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO HEADER WITH BACKGROUND IMAGE */}
       <section className="mt-20 relative h-[320px] md:h-[380px]">
        <img
          src="/images/Jolly Buoy Island.png"
          alt="Policy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide uppercase">
            Privacy Policy
          </h1>
          {/* <p className="text-gray-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            This Privacy Policy explains how Dew Dale Resorts collects, uses,
            and protects information obtained through our website.
          </p> */}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* INTRO */}
          <div>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Dew Dale Resorts respects your privacy and is committed to protecting
              the personal information you share with us through our website
              <strong> www.dewdaleresorts.online</strong>.
            </p>
          </div>

          {/* ANALYTICS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
              Analytics (Clickstream) Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our servers automatically collect and log clickstream data for all
              visitors to our website. This information helps us understand how
              visitors interact with our site and improve overall performance.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Referring website</li>
              <li>Pages visited</li>
              <li>Total bytes of data transferred</li>
              <li>Geographic location</li>
              <li>Web browser type and version</li>
              <li>Date and time of page requests</li>
              <li>Operating system type and version</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-6">
              The collected analytics data is used solely to generate reports and
              statistics related to website traffic and user behavior.
            </p>
          </div>

          {/* COOKIES */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
              Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As is standard practice on many corporate websites, Dew Dale Resorts
              uses cookies and similar technologies to understand which sections
              of the website are most popular, how visitors navigate the site,
              and how much time they spend on each page.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Cookies also help us analyze traffic patterns and evaluate the
              effectiveness of customer communications.
            </p>
          </div>

          {/* FORM DATA */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
              Form Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website contains online forms that allow users to submit
              enquiries, request services or support, or participate in discussions.
              All information collected through these forms is used strictly for
              the purpose for which it was provided.
            </p>
          </div>

          {/* INFORMATION DISCLOSURE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
              Information Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dew Dale Resorts does not disclose any personal information collected
              through the website to third parties without explicit user consent.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you contact us via email or enquiry forms, your email address
              will be used only to respond to your request and communicate directly
              with you. We do not add email addresses to mailing lists and do not
              send unsolicited emails (spam).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dew Dale Resorts does not provide secure transmission facilities
              over the internet. Users should be aware of the inherent risks
              involved when transmitting information online.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
