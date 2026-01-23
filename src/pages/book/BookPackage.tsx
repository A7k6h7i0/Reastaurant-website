import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { packages } from "../../data/packages";

/**
 * ✅ Production-safe API URL
 * Must be defined in Vercel env as:
 * VITE_API_URL=https://<render-backend>.onrender.com
 */
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("❌ VITE_API_URL is missing. Booking will fail in production.");
}

const BookPackage = () => {
  const { id } = useParams<{ id: string }>();

  const selectedPackage = useMemo(
    () => packages.find((p) => p.id === id),
    [id]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken(`DDR-${Date.now().toString(36).toUpperCase()}`);
  }, []);

  /* 🛑 Guard */
  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading package details…</p>
      </div>
    );
  }

  /* ===============================
     📦 PRODUCTION-READY BOOKING
     =============================== */
  const handleBooking = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all details");
      return;
    }

    if (!API_URL) {
      alert("Booking service unavailable. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/book-tour`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          token,
          packageId: selectedPackage.id,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Booking API failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("❌ Booking failed:", err);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">

      {/* ================= PACKAGE DETAILS ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{selectedPackage.title}</h1>
        <p className="text-gray-600">{selectedPackage.nights}</p>

        <div>
          <h3 className="font-semibold text-lg mb-2">Room Tariff</h3>
          <ul className="list-disc pl-6 space-y-1">
            {selectedPackage.roomTariff.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Other Components</h3>
          <ul className="list-disc pl-6 space-y-1">
            {selectedPackage.backendComponents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Package Includes</h3>
          <ul className="list-disc pl-6 space-y-1">
            {selectedPackage.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Package Excludes</h3>
          <ul className="list-disc pl-6 space-y-1">
            {selectedPackage.excludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Important Notes</h3>
          <ul className="list-disc pl-6 space-y-1">
            {selectedPackage.notes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Tour Itinerary</h3>
          <div className="space-y-3">
            {selectedPackage.itinerary.map((day) => (
              <p key={day.day}>
                <strong>{day.day}:</strong> {day.description}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BOOKING FORM ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-4">
        <h2 className="text-2xl font-bold">Book This Tour</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold">
            ✅ Booking successful. Your token: <strong>{token}</strong>
          </p>
        ) : (
          <>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded"
            />
            <input
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded"
            />
            <input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded"
            />
            <input
              value={token}
              readOnly
              className="w-full border p-3 rounded bg-gray-100"
            />

            <button
              onClick={handleBooking}
              disabled={loading}
              className="bg-forest text-white px-6 py-3 rounded-xl disabled:opacity-60"
            >
              {loading ? "Booking..." : "Book Tour"}
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default BookPackage;
