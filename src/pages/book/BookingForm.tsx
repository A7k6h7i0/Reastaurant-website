import { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([
    { adults: 1, children: 0 },
  ]);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [token] = useState(
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );

  /* Handle room count change */
  const handleRoomChange = (count) => {
    setRooms(count);

    const updatedRooms = [...roomDetails];

    if (count > roomDetails.length) {
      for (let i = roomDetails.length; i < count; i++) {
        updatedRooms.push({ adults: 1, children: 0 });
      }
    } else {
      updatedRooms.length = count;
    }

    setRoomDetails(updatedRooms);
  };

  /* Handle adults / children per room */
  const updateRoom = (index, field, value) => {
    const updated = [...roomDetails];
    updated[index][field] = Number(value);
    setRoomDetails(updated);
  };

  /* Capacity validation */
  const isCapacityInvalid = roomDetails.some(
    (room) => room.adults > 3 || room.children > 1
  );

  const handleBooking = async () => {
    if (isCapacityInvalid) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-3xl shadow p-8 space-y-6">
      <h2 className="text-2xl font-bold">Send Booking Request</h2>

      {submitted ? (
        <p className="text-green-600 font-semibold">
          ✅ Booking successful. Token: <strong>{token}</strong>
        </p>
      ) : (
        <>
          {/* Guest Details */}
          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Mobile Number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="w-full border p-3 rounded-xl"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Check-in Date */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Check-in Date
            </label>
            <input
              type="date"
              className="w-full border p-3 rounded-xl"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          {/* Rooms Selection */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Number of Rooms
            </label>
            <select
              className="w-full border p-3 rounded-xl"
              value={rooms}
              onChange={(e) => handleRoomChange(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Room{i + 1 > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Room Forms */}
          {roomDetails.map((room, index) => (
            <div
              key={index}
              className="border rounded-2xl p-4 space-y-4 bg-gray-50"
            >
              <h3 className="font-semibold">
                Room {index + 1} (Max: 3 Adults, 1 Child)
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Adults</label>
                  <select
                    className="w-full border p-2 rounded-lg"
                    value={room.adults}
                    onChange={(e) =>
                      updateRoom(index, "adults", e.target.value)
                    }
                  >
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Children</label>
                  <select
                    className="w-full border p-2 rounded-lg"
                    value={room.children}
                    onChange={(e) =>
                      updateRoom(index, "children", e.target.value)
                    }
                  >
                    {[0, 1].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          {/* Capacity Warning */}
          {isCapacityInvalid && (
            <p className="text-red-600 text-sm font-semibold">
              ⚠️ Each room allows a maximum of 3 adults and 1 child.
            </p>
          )}

          {/* Token */}
          <input
            className="w-full border p-3 rounded-xl bg-gray-100"
            value={token}
            readOnly
          />

          {/* Submit Button */}
          <button
            onClick={handleBooking}
            disabled={loading || isCapacityInvalid}
            className="bg-forest text-white px-6 py-3 rounded-xl disabled:opacity-60 w-full"
          >
            {loading ? "Sending..." : "Send Booking Request"}
          </button>
        </>
      )}
    </div>
  );
};

export default BookingForm;
