import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { otherIslandPackages } from "../../data/otherIslandPackages";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("❌ VITE_API_URL is missing in production");
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

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading package details…</p>
      </div>
    );
  }

  const handleBooking = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all details");
      return;
    }

    if (!API_URL) {
      alert("Booking service unavailable. Please try later.");
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
          packageId: selectedPackage.code,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Booking API failed");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("❌ Booking error:", err);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{selectedPackage.title}</h1>
        <p className="text-gray-600">{selectedPackage.days}</p>
      </div>

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

export default BookOtherIslandPackage;
