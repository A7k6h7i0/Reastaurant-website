import { useState } from "react";

const RoomsGuestsDropdown = ({
  rooms,
  setRooms,
  adults,
  setAdults,
  children,
  setChildren,
}) => {
  const [open, setOpen] = useState(false);

  const Counter = ({ label, value, setValue, min = 0 }) => (
    <div className="flex items-center justify-between py-3">
      <span className="font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && setValue(value - 1)}
          className="w-8 h-8 rounded border text-lg"
        >
          −
        </button>
        <span className="w-4 text-center font-semibold">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="w-8 h-8 rounded border text-lg"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Header (CLICKABLE) */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer select-none"
      >
        <p className="text-sm text-gray-500">Rooms & Guests</p>

        <div className="flex items-center gap-2 font-bold text-lg">
          <span>
            {rooms} Room{rooms > 1 ? "s" : ""}, {adults} Adult
            {adults > 1 ? "s" : ""}
          </span>

          {/* Dropdown Icon */}
          <svg
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border p-4 z-50">
          <Counter label="Rooms" value={rooms} setValue={setRooms} min={1} />
          <Counter label="Adults" value={adults} setValue={setAdults} min={1} />
          <Counter label="Children" value={children} setValue={setChildren} />

          <p className="text-xs text-gray-500 mt-3">
            Please provide the correct number of guests for best pricing.
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomsGuestsDropdown;
