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

  /* ✅ NEW STATES (same as BookPackage) */
  const [checkInDate, setCheckInDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([
    { adults: 1, children: 0 },
  ]);

  useEffect(() => {
    setToken(`DD-${Date.now().toString(36).toUpperCase()}`);
  }, []);

  /* 🛑 SAFETY GUARD */
  if (!selectedPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-600">Package not found</p>
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
          checkInDate,
          rooms: roomDetails,
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

      {/* ================= PACKAGE DETAILS (UNCHANGED) ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h1 className="text-3xl font-bold">{selectedPackage.title}</h1>
        <p className="text-gray-600">{selectedPackage.days}</p>

        <div>
          <h3 className="font-semibold">Hotels Used</h3>
          <ul className="list-disc pl-6">
            <li>
              <b>Baratang:</b> {selectedPackage.hotels.baratang.join(", ")}
            </li>

            {selectedPackage.hotels.havelock.length > 0 && (
              <li>
                <b>Havelock:</b>{" "}
                {selectedPackage.hotels.havelock.join(", ")}
              </li>
            )}

            <li>
              <b>Port Blair:</b>{" "}
              {selectedPackage.hotels.portBlair.join(", ")}
            </li>
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

        <div>
          <h3 className="font-semibold">Package Includes</h3>
          <ul className="list-disc pl-6">
            {selectedPackage.includes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Package Excludes</h3>
          <ul className="list-disc pl-6">
            {selectedPackage.excludes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Important Notes</h3>
          <ul className="list-disc pl-6">
            {selectedPackage.notes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= BOOKING FORM (UPDATED) ================= */}
      <div className="bg-white rounded-3xl shadow p-8 space-y-6">
        <h2 className="text-2xl font-bold">Send Booking Request</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold">
            ✅ Booking successful. Token: <strong>{token}</strong>
          </p>
        ) : (
          <>
            <input
              className="w-full border p-3 rounded"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Mobile Number"
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="w-full border p-3 rounded"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Check-in Date */}
            {/* Check-in Date */}
<div className="space-y-1">
  <label className="text-sm font-medium text-gray-600">
    Arrival Date
  </label>
  <input
    type="date"
    className="w-full border p-3 rounded"
    value={checkInDate}
    onChange={(e) => setCheckInDate(e.target.value)}
  />
</div>


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
              className="w-full border p-3 rounded bg-gray-100"
              value={token}
              readOnly
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

export default BookOtherIslandPackage;
