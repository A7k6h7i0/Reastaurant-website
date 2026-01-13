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

  const formatDateDisplay = (dateStr) => {
    const date = new Date(dateStr);
    return `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;
  };

  const CalendarIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="relative z-20 mt-10 md:-mt-20 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-[#F9F8F4] rounded-2xl shadow-xl">
        {/* Desktop */}
        <div className="hidden md:flex divide-x divide-gray-200">
          <Section title="RESORT">
            <p className="font-serif text-lg text-[#1F3D2B]">Dew Dale</p>
            <p className="text-sm text-gray-600">Resorts</p>
          </Section>

          <DateSection
            label="CHECK-IN"
            value={checkIn}
            onChange={setCheckIn}
            format={formatDateDisplay}
            Icon={CalendarIcon}
          />

          <DateSection
            label="CHECK-OUT"
            value={checkOut}
            onChange={setCheckOut}
            format={formatDateDisplay}
            Icon={CalendarIcon}
          />

          <Section title="GUESTS">
            <RoomsGuestsDropdown
              rooms={rooms}
              setRooms={setRooms}
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
            />
          </Section>

          {/* CLEAN PRICE */}
          <div className="flex-1 px-6 py-5 flex flex-col justify-center items-end">
            <p className="text-[11px] tracking-widest uppercase text-gray-500">
              Total Price
            </p>
            <p className="font-serif text-3xl text-[#0F4C5C] mt-1">
              ₹{totalPrice.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {rooms} Room × {nights} Night · ₹{pricePerNight.toLocaleString()}/night
            </p>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden p-4 space-y-4">
          <Section title="RESORT">
            <p className="font-serif text-lg text-[#1F3D2B]">Dew Dale</p>
            <p className="text-sm text-gray-600">Resorts</p>
          </Section>

          <div className="grid grid-cols-2 gap-4">
            <DateSection
              label="CHECK-IN"
              value={checkIn}
              onChange={setCheckIn}
              format={formatDateDisplay}
              Icon={CalendarIcon}
            />
            <DateSection
              label="CHECK-OUT"
              value={checkOut}
              onChange={setCheckOut}
              format={formatDateDisplay}
              Icon={CalendarIcon}
            />
          </div>

          <Section title="GUESTS">
            <RoomsGuestsDropdown
              rooms={rooms}
              setRooms={setRooms}
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
            />
          </Section>

          {/* CLEAN MOBILE PRICE */}
          <div className="mt-4 rounded-xl bg-gradient-to-br from-[#F0F7F4] to-[#E6F1ED] p-4 shadow-sm border border-[#d9ebe4]">
  <p className="text-[10px] tracking-widest uppercase text-[#4A6F63]">
    Total Price
  </p>

  <div className="flex items-end justify-between mt-1">
    <p className="font-serif text-3xl md:text-2xl text-[#0F4C5C] leading-none">
      ₹{totalPrice.toLocaleString()}
    </p>

    <span className="text-xs text-[#4A6F63] bg-white/70 px-2 py-0.5 rounded-md">
      {rooms} Room · {nights} Night
    </span>
  </div>

  <p className="text-xs text-[#5F7F75] mt-1">
    ₹{pricePerNight.toLocaleString()} per night
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="flex-1 px-6 py-5">
    <p className="text-[11px] tracking-widest uppercase text-gray-500 mb-1">
      {title}
    </p>
    {children}
  </div>
);

const DateSection = ({ label, value, onChange, format, Icon }) => (
  <Section title={label}>
    <div className="flex items-center gap-3">
      <span className="font-medium text-gray-800">
        {format(value)}
      </span>
      <div className="relative">
        <Icon />
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  </Section>
);

export default BookingBar;
