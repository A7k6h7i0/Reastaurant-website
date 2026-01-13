import { useState, useMemo } from "react";
import RoomsGuestsDropdown from "./RoomsGuestsDropdown";
import { CalendarDays } from "lucide-react";

const PRICE_PER_NIGHT = 6900;

const BookingBar = () => {
  const [checkIn, setCheckIn] = useState("2026-01-13");
  const [checkOut, setCheckOut] = useState("2026-01-14");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const nights = useMemo(() => {
    const diff =
      (new Date(checkOut) - new Date(checkIn)) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const totalPrice = PRICE_PER_NIGHT * rooms * nights;

  return (
    <div className="relative z-20 mt-6 px-1 sm:px-3 md:px-4">

      <div className="mx-auto w-full max-w-6xl bg-white rounded-xl shadow-lg border border-gray-200">


        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.4fr_1.2fr] divide-y md:divide-y-0 md:divide-x">

          {/* RESORT */}
          <Field>
            <Label>Resort</Label>
            <ValueLarge>Dew Dale Resorts</ValueLarge>
            <ValueSub>Baratang Island</ValueSub>
          </Field>

          <DateField label="Check-in" value={checkIn} onChange={setCheckIn} />
          <DateField label="Check-out" value={checkOut} onChange={setCheckOut} />

          {/* ROOMS */}
          <Field className="relative">
            <Label>Rooms & Guests</Label>
            <RoomsGuestsDropdown
              rooms={rooms}
              setRooms={setRooms}
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
            />
          </Field>

          {/* PRICE BUTTON */}
          <button className="bg-[#1F3D2B] text-white px-4 py-4 md:py-5 flex flex-col justify-center items-start md:items-center rounded-b-xl md:rounded-none md:rounded-r-xl">
            <span className="text-base md:text-lg font-semibold">
              ₹{totalPrice.toLocaleString()}
            </span>
            <span className="text-[11px] opacity-90">
              {rooms} Room · {nights} Night
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ---------------- UI PARTS ---------------- */

const Field = ({ children, className = "" }) => (
  <div className={`px-4 py-3 md:px-6 md:py-5 ${className}`}>{children}</div>
);

const Label = ({ children }) => (
  <p className="text-[10px] md:text-[11px] tracking-widest uppercase text-gray-400 mb-1">
    {children}
  </p>
);

const ValueLarge = ({ children }) => (
  <p className="font-serif text-lg md:text-xl text-[#1F3D2B] leading-tight">
    {children}
  </p>
);

const ValueSub = ({ children }) => (
  <p className="text-xs md:text-sm text-gray-500">{children}</p>
);

const DateField = ({ label, value, onChange }) => {
  const date = new Date(value);

  return (
    <Field className="relative cursor-pointer">
      <Label>{label}</Label>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-base md:text-lg font-semibold text-gray-900">
            {date.getDate()}{" "}
            {date.toLocaleString("en-IN", { month: "short" })}'
            {String(date.getFullYear()).slice(2)}
          </p>
          <p className="text-xs text-gray-500">
            {date.toLocaleString("en-IN", { weekday: "long" })}
          </p>
        </div>

        <CalendarDays className="w-5 h-5 text-gray-400" />
      </div>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </Field>
  );
};

export default BookingBar;
