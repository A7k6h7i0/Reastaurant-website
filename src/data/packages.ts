export interface PackageItineraryDay {
  day: string;
  description: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  nights: string;
  image: string;

  // pricing & room rules
  roomTariff: string[];
  backendComponents: string[];

  includes: string[];
  excludes: string[];
  transport: string[];
  notes: string[];

  itinerary: PackageItineraryDay[];
}

export const packages: TravelPackage[] = [
  /* ================= DDR12 ================= */
  {
    id: "DDR12",
    title: "Baratang (1N)",
    nights: "1 Night / 2 Days",
    image: "/images/1.png",

    roomTariff: [
      "Double Room on CP (Breakfast included)",
      "Extra Person: Adult / Child (with or without mattress)",
      "Max occupancy: 3 Adults/Child with mattress + 1 Child below 5 years",
      "Max – 3 + 1 = 4 pax (2 extra adults not permitted)",
    ],

    backendComponents: [
      "Car from Port Blair round trip – upto 5 pax (1 car), above 5 pax (2 cars)",
      "Route bus tickets – round trip per person (optional)",
      "Car charges for night stay (applicable only for car transfers)",
      "Boat charges – per boat (upto 8 pax) OR per person",
      "Permit charges – per person",
    ],

    includes: [
      "Accommodation on twin sharing (CP)",
      "Mud Volcano",
      "Baludera Beach",
      "Parrot Island",
      "Limestone Caves",
      "Port Blair – Baratang – Port Blair transfers",
      "All permit fees & taxes",
    ],

    excludes: [
      "Any optional tours",
      "Personal expenses",
      "Stay before / after check-in & check-out",
    ],

    transport: ["AC Vehicle"],

    notes: [
      "All rates are per person basis",
      "Maximum one extra person per room allowed",
      "Child 5–12 yrs: no extra bed",
      "Child below 5 yrs is complimentary",
      "Tours subject to weather conditions",
      "Best period: Oct – May",
    ],

    itinerary: [
      {
        day: "Day 1",
        description:
          "Pick up from Port Blair and transfer to Baratang Island by Pvt. Car. Resort check-in. After lunch visit Mud Volcano & Baludera Beach. Before sunset trip to Parrot Island. Overnight at Baratang.",
      },
      {
        day: "Day 2",
        description:
          "Check-out. Visit Limestone Caves at Rafter’s Creek (can be covered Day 1 if time permits). Return to Port Blair. Drop.",
      },
    ],
  },

  /* ================= DDR23 ================= */
  {
    id: "DDR23",
    title: "Baratang (2N)",
    nights: "2 Nights / 3 Days",
    image: "/images/Baludera Beach.png",

    roomTariff: [
      "Double Room on CP (Breakfast included)",
      "Extra Person charges applicable",
      "Max occupancy: 3 + 1",
    ],

    backendComponents: [
      "AC Car from Port Blair round trip",
      "Car charges for sightseeing",
      "Boat charges (per person / per boat)",
      "Permit charges per person",
    ],

    includes: [
      "Accommodation on twin sharing",
      "Mud Volcano",
      "Baludera Beach",
      "Parrot Island",
      "Limestone Caves",
    ],

    excludes: [
      "Optional tours",
      "Personal expenses",
    ],

    transport: ["AC Vehicle"],

    notes: [
      "Tours subject to weather",
      "Best period: Oct – May",
    ],

    itinerary: [
      {
        day: "Day 1",
        description:
          "Pick up from Port Blair and transfer to Baratang Island. Resort check-in. Afternoon visit Mud Volcano & Baludera Beach. Overnight at Baratang.",
      },
      {
        day: "Day 2",
        description:
          "Visit Limestone Caves. After lunch relax. Evening trip to Parrot Island. Overnight at Baratang.",
      },
      {
        day: "Day 3",
        description:
          "Check-out and return to Port Blair. Drop at airport/hotel/jetty.",
      },
    ],
  },

  /* ================= DDR34 (MISSING PACKAGE – NOW ADDED) ================= */
  {
    id: "DDR34",
    title: "Baratang (3N) – Min 6 Pax",
    nights: "3 Nights / 4 Days",
    image: "/images/Ross Island.png",

    roomTariff: [
      "Double Room on CP (Breakfast included)",
      "Extra Person: Adult / Child (with or without mattress)",
      "Minimum 6 pax required",
      "Max occupancy rules apply",
    ],

    backendComponents: [
      "AC Car transfers from Port Blair",
      "Car charges for sightseeing",
      "Boat charges for Merk Bay (local boat)",
      "Permit charges per person",
    ],

    includes: [
      "Accommodation on twin sharing",
      "Mud Volcano",
      "Baludera Beach",
      "Parrot Island",
      "Limestone Caves",
      "Full day Merk Bay Beach trip",
      "Packed lunch at Merk Bay",
    ],

    excludes: [
      "Optional activities",
      "Personal expenses",
    ],

    transport: ["AC Vehicle", "Local Boat"],

    notes: [
      "Merk Bay is in North Passage Island",
      "White sandy beach, shallow water",
      "Suitable for snorkeling & swimming",
      "Dolphins often spotted",
      "Tours subject to weather",
    ],

    itinerary: [
      {
        day: "Day 1",
        description:
          "Pick up from Port Blair. Transfer to Baratang. Resort check-in. Afternoon visit Mud Volcano & Baludera Beach. Overnight at Baratang.",
      },
      {
        day: "Day 2",
        description:
          "Visit Limestone Caves. After lunch relax. Evening trip to Parrot Island. Overnight at Baratang.",
      },
      {
        day: "Day 3",
        description:
          "After breakfast transfer to Gandhighat Jetty. Local boat to Merk Bay via mangrove creeks. Full day beach trip. Packed lunch served. Return before sunset.",
      },
      {
        day: "Day 4",
        description:
          "Check-out and return to Port Blair. Drop at airport/hotel/jetty.",
      },
    ],
  },
];
