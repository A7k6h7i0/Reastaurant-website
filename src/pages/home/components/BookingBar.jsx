import { useState } from "react";
import RoomsGuestsDropdown from "./RoomsGuestsDropdown";

const BookingBar = () => {
  const roomPrices = {
    "Deluxe AC": 6900,
    "Deluxe Non-AC": 5900,
  };

  const [checkIn, setCheckIn] = useState("2026-01-13");
  const [checkOut, setCheckOut] = useState("2026-01-14");
  const [roomType, setRoomType] = useState("Deluxe AC");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);


  const nights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24) || 1;

  const pricePerNight = roomPrices[roomType];
  const totalPrice = pricePerNight * rooms * nights;

  return (
    <div className="relative z-20 -mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-5 gap-6 p-6 items-center">

          {/* Location */}
          <div>
            
            <p className="text-sm text-black-500 font-bold">Dew Dale</p>
            <p className="text-sm text-black-500 font-bold">Resorts</p>
          </div>

          {/* Check-in */}
          <div>
            <p className="text-sm text-gray-500">Check-In</p>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full font-semibold text-lg outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <p className="text-sm text-gray-500">Check-Out</p>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full font-semibold text-lg outline-none"
            />
          </div>

          
          {/* Rooms & Guests */}
            <div>
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
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <h3 className="text-2xl font-bold text-forest">
              ₹{totalPrice.toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">
              ₹{pricePerNight}/night
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingBar;
