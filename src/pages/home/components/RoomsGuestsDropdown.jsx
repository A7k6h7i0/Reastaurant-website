import { useState, useRef, useEffect } from "react";

const RoomsGuestsDropdown = ({
  rooms,
  setRooms,
  adults,
  setAdults,
  children,
  setChildren,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Counter = ({ label, value, setValue, min = 0 }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-700 font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && setValue(value - 1)}
          className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:border-[#1F3D2B]"
        >
          −
        </button>
        <span className="w-6 text-center font-semibold">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:border-[#1F3D2B]"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Rooms & Guests
          </p>
          <p className="text-xl font-bold text-gray-900 leading-tight">
            {rooms} Room{rooms > 1 ? "s" : ""}{" "}
            <span className="font-normal text-gray-700">
              {adults} Adult{adults > 1 ? "s" : ""}
            </span>
          </p>
        </div>

        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
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

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 mt-4 w-80 bg-white rounded-xl shadow-xl border p-5 z-50">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">
            Select Rooms & Guests
          </h4>

          <Counter label="Rooms" value={rooms} setValue={setRooms} min={1} />
          <Counter label="Adults" value={adults} setValue={setAdults} min={1} />
          <Counter label="Children" value={children} setValue={setChildren} />

          <button
            onClick={() => setOpen(false)}
            className="w-full mt-4 py-2.5 bg-[#1F3D2B] text-white rounded-lg font-medium"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomsGuestsDropdown;
