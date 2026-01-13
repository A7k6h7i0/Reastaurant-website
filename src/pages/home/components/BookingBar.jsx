import { useState } from "react";
import RoomsGuestsDropdown from "./RoomsGuestsDropdown";

const BookingBar = () => {
  const roomPrices = {
    "Deluxe AC": 6900,
    "Deluxe Non-AC": 5900,
  };

  const [checkIn, setCheckIn] = useState("2026-01-13");
  const [checkOut, setCheckOut] = useState("2026-01-14");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const nights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24) || 1;

  const pricePerNight = roomPrices["Deluxe AC"];
  const totalPrice = pricePerNight * rooms * nights;

  return (
    <div className="relative z-20 -mt-24 flex justify-center">
      <div className="w-full max-w-5xl px-4">
        <div className="bg-[#F9F8F4] rounded-2xl shadow-xl px-5 py-4">

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

            {/* Resort */}
            <div className="text-center md:text-left leading-tight">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                Resort
              </p>
              <p className="font-serif text-base text-[#1F3D2B]">
                Dew Dale
              </p>
              <p className="text-xs text-gray-600">Resorts</p>
            </div>

            {/* Check-in */}
            <div className="text-center md:text-left leading-tight">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                Check-In
              </p>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent font-medium text-gray-800 text-sm focus:outline-none"
              />
            </div>

            {/* Check-out */}
            <div className="text-center md:text-left leading-tight">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                Check-Out
              </p>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent font-medium text-gray-800 text-sm focus:outline-none"
              />
            </div>

            {/* Guests */}
            <div className="text-center md:text-left leading-tight">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                Guests
              </p>
              <RoomsGuestsDropdown
                rooms={rooms}
                setRooms={setRooms}
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
              />
            </div>

            {/* Price */}
            <div className="text-center md:text-right leading-tight">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gray-500">
                Total
              </p>
              <p className="font-serif text-xl text-[#0F4C5C]">
                ₹{totalPrice.toLocaleString()}
              </p>
              <p className="text-[11px] text-gray-500">
                ₹{pricePerNight.toLocaleString()} / night
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
