import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { packages } from "../../data/packages";

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

  /* ✅ NEW STATES */
  const [checkInDate, setCheckInDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([
    { adults: 1, children: 0 },
  ]);

  useEffect(() => {
    setToken(`DDR-${Date.now().toString(36).toUpperCase()}`);
  }, []);

  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading package details…</p>
      </div>
    );
  }

  /* ================= ROOM HANDLERS ================= */

  const handleRoomChange = (count: number) => {
    setRooms(count);
    const updated = [...roomDetails];

    if (count > updated.length) {
      for (let i = updated.length; i < count; i++) {
        updated.push({ adults: 1, children: 0 });
      }
    } else {
      updated.length = count;
    }

    setRoomDetails(updated);
  };

  const updateRoom = (
    index: number,
    field: "adults" | "children",
    value: number
  ) => {
    const updated = [...roomDetails];
    updated[index][field] = value;
    setRoomDetails(updated);
  };

  const isCapacityInvalid = roomDetails.some(
    (r) => r.adults > 3 || r.children > 1
  );

  /* ================= BOOKING ================= */

  const handleBooking = async () => {
    if (!name || !email || !phone || !checkInDate) {
      alert("Please fill all details");
      return;
    }

    if (isCapacityInvalid) {
      alert("Room capacity exceeded");
      return;
    }

    if (!API_URL) {
      alert("Booking service unavailable.");
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
          packageId: selectedPackage.id,
          checkInDate,
          rooms: roomDetails,
        }),
      });

      if (!res.ok) throw new Error("Booking failed");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">

      {/* ================= PACKAGE DETAILS (UNCHANGED) ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{selectedPackage.title}</h1>
        <p className="text-gray-600">{selectedPackage.nights}</p>

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
      </div>

      {/* ================= BOOKING FORM (UPDATED) ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h2 className="text-2xl font-bold">Send Booking Request</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold">
            ✅ Booking successful. Your token: <strong>{token}</strong>
          </p>
        ) : (
          <>
            <input
              className="w-full border p-3 rounded"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Check-in Date */}
            <input
              type="date"
              className="w-full border p-3 rounded"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />

            {/* Rooms */}
            <select
              className="w-full border p-3 rounded"
              value={rooms}
              onChange={(e) => handleRoomChange(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Room{i + 1 > 1 ? "s" : ""}
                </option>
              ))}
            </select>

            {/* Dynamic Room Details */}
            {roomDetails.map((room, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 bg-gray-50 space-y-3"
              >
                <p className="font-semibold">
                  Room {index + 1} (Max: 3 Adults + 1 Child)
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="border p-2 rounded"
                    value={room.adults}
                    onChange={(e) =>
                      updateRoom(index, "adults", Number(e.target.value))
                    }
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        Adults: {n}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border p-2 rounded"
                    value={room.children}
                    onChange={(e) =>
                      updateRoom(index, "children", Number(e.target.value))
                    }
                  >
                    {[0, 1].map((n) => (
                      <option key={n} value={n}>
                        Children: {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            {isCapacityInvalid && (
              <p className="text-red-600 text-sm font-semibold">
                ⚠️ Room capacity exceeded (Max 3 adults & 1 child per room)
              </p>
            )}

            <input
              value={token}
              readOnly
              className="w-full border p-3 rounded bg-gray-100"
            />

            <button
              onClick={handleBooking}
              disabled={loading || isCapacityInvalid}
              className="bg-forest text-white px-6 py-3 rounded-xl disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Booking Request"}
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default BookPackage;
