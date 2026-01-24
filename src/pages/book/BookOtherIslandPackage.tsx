import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { otherIslandPackages } from "../../data/otherIslandPackages";


/**
 * ✅ Production-safe API URL
 */
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("❌ VITE_API_URL is missing.");
}

const BookOtherIslandPackage = () => {
  const { id } = useParams<{ id: string }>();

  const selectedPackage = useMemo(
    () => otherIslandPackages.find((p) => p.id === id),
    [id]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken(`DD-${Date.now().toString(36).toUpperCase()}`);
  }, []);

  /* 🛑 SAFETY GUARD */
  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-600">
          Package not found
        </p>
      </div>
    );
  }

  const handleBooking = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all details");
      return;
    }

    if (!API_URL) {
      alert("Booking service unavailable");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/book-tour`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          token,
          packageId: selectedPackage.code,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Booking failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">

      {/* PACKAGE DETAILS */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{selectedPackage.title}</h1>
        <p className="text-gray-600">{selectedPackage.days}</p>

        <div>
          <h3 className="font-semibold">Hotels Used</h3>
          <ul className="list-disc pl-6">
            <li><b>Baratang:</b> {selectedPackage.hotels.baratang.join(", ")}</li>
            {selectedPackage.hotels.havelock.length > 0 && (
              <li><b>Havelock:</b> {selectedPackage.hotels.havelock.join(", ")}</li>
            )}
            <li><b>Port Blair:</b> {selectedPackage.hotels.portBlair.join(", ")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Tour Itinerary</h3>
          {selectedPackage.itinerary.map((day) => (
            <p key={day.day}>
              <strong>{day.day}:</strong> {day.description}
            </p>
          ))}
        </div>
      </div>

      {/* BOOKING FORM */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-4">
        <h2 className="text-2xl font-bold">Book This Tour</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold">
            ✅ Booking successful. Token: <strong>{token}</strong>
          </p>
        ) : (
          <>
            <input className="w-full border p-3 rounded" placeholder="Full Name" onChange={e => setName(e.target.value)} />
            <input className="w-full border p-3 rounded" placeholder="Mobile Number" onChange={e => setPhone(e.target.value)} />
            <input className="w-full border p-3 rounded" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
            <input className="w-full border p-3 rounded bg-gray-100" value={token} readOnly />

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

export default BookOtherIslandPackage;
