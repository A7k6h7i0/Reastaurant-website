export interface ItineraryDay {
  day: string;
  description: string;
}

export interface OtherIslandPackage {
  id: string;
  code: string;
  title: string;
  days: string;
  image: string;

  includes: string[];
  excludes: string[];
  transport: string[];
  notes: string[];
  hotels: {
    baratang: string[];
    havelock: string[];
    portBlair: string[];
  };

  itinerary: ItineraryDay[];
}

export const otherIslandPackages: OtherIslandPackage[] = [
  /* ================= LT34-002 ================= */
  {
    id: "LT34-002",
    code: "LT34-002",
    title: "Port Blair (2N) + Baratang (1N)",
    days: "3 Nights / 4 Days",
    image: "/images/NorthBayIsland.png",

    includes: [
      "Rates are per person for AC Accommodation on Twin sharing (CP basis), Arr./Dep. transfer, Welcome drink, All Transfers, All Sightseeing as per Itinerary, All Entrance fees and all taxes",
    ],

    excludes: [
      "Airfares",
      "Use of hotel rooms before/after normal check in/out times",
      "Personal expenses such as telephone calls, dry cleaning, mini bar purchases, etc.",
      "Meals not indicated in the package",
      "Any Optional Tours",
      "Any other items or services not listed in the itinerary",
      "Costs quoted are subject to availability and confirmation of accommodations and services as listed",
      "Costs may be subject to change due to Hotel Tariff fluctuations, government tax increases, or any new taxes",
    ],

    transport: ["AC Vehicle – Xylo or equivalent"],

    notes: [
      "Maximum one extra person per room allowed",
      "If extra bed required for child below 12yrs, extra person charges are applicable",
      "Child 5-12 yrs no extra bed provided",
      "Child below 5yrs is complimentary",
      "Tours are subject to weather conditions",
      "Best period is from Oct-May",
    ],

    hotels: {
      baratang: ["Dew Dale Resorts"],
      havelock: [],
      portBlair: [
        "Fortune Resort Bay Island/Hotel Sentinel/Hotel Sinclairs (Lx) or similar hotels",
        "Megapode Resort/Sunsea Resort/TSG Emerald View/Hotel Mainak (Ex) or similar hotels",
        "Andaman Residency/Hotel Nakshatra Inn/Hotel Rishab/Hotel Aparupa (Ec) or similar hotels",
      ],
    },

    itinerary: [
      {
        day: "Day 1",
        description:
          "Arrival at Port Blair Airport. Transfer to Hotel, morning trip to Ross Island the once British HQ. one can find the ruins of old structures, church, club etc.",
      },
      {
        day: "Day 2",
        description:
          "Morning trip to Baratang Island, proceed to the Resort for Check-in. After Lunch a head on to the Baludera Beach via the Mud Valcano site. Just before sunset pick up from Baludera Beach for a trip to the Parrot Island.",
      },
      {
        day: "Day 3",
        description:
          "Visit to the famous lime stone caves at Rafter’s Creek then Return Back to Port Blair. If time permits visit to Sagarika Emporium and Light & Sound Show at Cellular Jail. Ovenight at Port Blair.",
      },
      {
        day: "Day 4",
        description: "Drop back to Airport to catch onward connections.",
      },
    ],
  },

  /* ================= LT45-001 ================= */
  {
    id: "LT45-001",
    code: "LT45-001",
    title: "Port Blair (2N) + Havelock (1N) + Baratang (1N)",
    days: "4 Nights / 5 Days",
    image: "/images/Jolly Buoy Island.png",

    includes: [
      "Rates are per person for AC Accommodation on Twin sharing (CP basis), Arr./Dep. transfer, Welcome drink, All Transfers, All Sightseeing as per Itinerary, All Entrance fees and all taxes",
    ],

    excludes: [
      "Airfares",
      "Use of hotel rooms before/after normal check in/out times",
      "Personal expenses such as telephone calls, dry cleaning, mini bar purchases, etc.",
      "Meals not indicated in the package",
      "Any Optional Tours",
      "Any other items or services not listed in the itinerary",
      "Costs quoted are subject to availability and confirmation of accommodations and services as listed",
      "Costs may be subject to change due to Hotel Tariff fluctuations, government tax increases, or any new taxes",
    ],

    transport: ["AC Vehicle – Xylo or equivalent"],

    notes: [
      "Maximum one extra person per room allowed",
      "If extra bed required for child below 12yrs, extra person charges are applicable",
      "Child 5-12 yrs no extra bed provided",
      "Child below 5yrs is complimentary",
      "Tours are subject to weather conditions",
      "Best period is from Oct-May",
    ],

    hotels: {
      baratang: ["Dew Dale Resorts"],
      havelock: [
        "Silver Sand Resort (Lx)",
        "Seashells/Kingdom (Ex)",
        "Dolphin Resort/Seashells (Non AC)/Bayview Inn (Ec) or similar hotels",
      ],
      portBlair: [
        "Fortune Resort Bay Island/Hotel Sentinel/Hotel Sinclairs (Lx)",
        "Megapode Resort/Sunsea Resort/TSG Emerald View/Hotel Mainak (Ex)",
        "Andaman Residency/Hotel Nakshatra Inn/Hotel Rishab/Hotel Aparupa (Ec) or similar hotels",
      ],
    },

    itinerary: [
      {
        day: "Day 1",
        description:
          "Pick up from Port Blair Airport and Transfer to Baratang Island by Pvt. Car. On reaching Baratang proceed to the Resort for Check-in. After Lunch a head on to the Baludera Beach via the Mud Valcano site. Just before sunset pick up from Baludera Beach for a trip to the Parrot Island. Overnight at Baratang.",
      },
      {
        day: "Day 2",
        description:
          "Visit to the famous lime stone caves at Rafter’s Creek. Thereafter return back to Port Blair. Overnight at Port Blair .",
      },
      {
        day: "Day 3",
        description:
          "Early morning trip to Havelock Island, Check in at the Hotel. A trip to the Radha nagar Beach. Overnight at Havelock.",
      },
      {
        day: "Day 4",
        description:
          "Return Back to Port Blair. If time permits visit to Sagarika Emporium and Light & Sound Show at Cellular Jail. Overnight at Port Blair.",
      },
      {
        day: "Day 5",
        description: "Drop back to Airport to catch onward connections.",
      },
    ],
  },

  /* ================= LT56-001 ================= */
  {
    id: "LT56-001",
    code: "LT56-001",
    title: "Port Blair (1N) + Havelock (2N) + Baratang (2N)",
    days: "5 Nights / 6 Days",
    image: "/images/limestoneCaves.png",

    includes: [
      "Rates are per person for AC Accommodation on Twin sharing (CP basis), Arr./Dep. transfer, Welcome drink, All Transfers, All Sightseeing as per Itinerary, All Entrance fees and all taxes",
    ],

    excludes: [
      "Airfares",
      "Use of hotel rooms before/after normal check in/out times",
      "Personal expenses such as telephone calls, dry cleaning, mini bar purchases, etc.",
      "Meals not indicated in the package",
      "Any Optional Tours",
      "Any other items or services not listed in the itinerary",
      "Costs quoted are subject to availability and confirmation of accommodations and services as listed",
      "Costs may be subject to change due to Hotel Tariff fluctuations, government tax increases, or any new taxes",
    ],

    transport: ["AC Vehicle – Xylo or equivalent"],

    notes: [
      "Maximum one extra person per room allowed",
      "If extra bed required for child below 12yrs, extra person charges are applicable",
      "Child 5-12 yrs no extra bed provided",
      "Child below 5yrs is complimentary",
      "Tours are subject to weather conditions",
      "Best period is from Oct-May",
    ],

    hotels: {
      baratang: ["Dew Dale Resorts"],
      havelock: [
        "Silver Sand Resort (Lx)",
        "Seashells/Kingdom (Ex)",
        "Dolphin Resort/Seashells (Non AC)/Bayview Inn (Ec) or similar hotels",
      ],
      portBlair: [
        "Fortune Resort Bay Island/Hotel Sentinel/Hotel Sinclairs (Lx)",
        "Megapode Resort/Sunsea Resort/TSG Emerald View/Hotel Mainak (Ex)",
        "Andaman Residency/Hotel Nakshatra Inn/Hotel Rishab/Hotel Aparupa (Ec) or similar hotels",
      ],
    },

    itinerary: [
      {
        day: "Day 1",
        description:
          "On Arrival receive at Port Blair Airport and then take a trip to Baratang Island. Morning at leisure, afternoon visit to the unique mud volcano site and trip to Baludera Beach. Overnight at Baratang.",
      },
      {
        day: "Day 2",
        description:
          "Visit to the famous lime stone caves at Rafter’s Creek, Return back to the Resorts. After lunch relax and in the evening Proceed to the Parrot Island. Overnight at Baratang.",
      },
      {
        day: "Day 3",
        description:
          "Return trip to Port Blair for onward connection to Havelock Island. Night Halt at Havelock.",
      },
      {
        day: "Day 4",
        description:
          "A trip to the Radha nagar Beach. Rest of the day at leisure at Havelock. Overnight at Havelock.",
      },
      {
        day: "Day 5",
        description:
          "Return back to Port Blair, If time permits visit to Sagarika Emporium and Light & Sound Show at Cellular Jail. Overnight at Port Blair.",
      },
      {
        day: "Day 6",
        description: "Drop back to Airport to catch onward connections.",
      },
    ],
  },

  /* ================= LT67-001 ================= */
  {
    id: "LT67-001",
    code: "LT67-001",
    title: "Port Blair (2N) + Havelock (2N) + Baratang (2N)",
    days: "6 Nights / 7 Days",
    image: "/images/Chidiya Tapu.png",

    includes: [
      "Rates are per person for AC Accommodation on Twin sharing (CP basis), Arr./Dep. transfer, Welcome drink, All Transfers, All Sightseeing as per Itinerary, All Entrance fees and all taxes",
    ],

    excludes: [
      "Airfares",
      "Use of hotel rooms before/after normal check in/out times",
      "Personal expenses such as telephone calls, dry cleaning, mini bar purchases, etc.",
      "Meals not indicated in the package",
      "Any Optional Tours",
      "Any other items or services not listed in the itinerary",
      "Costs quoted are subject to availability and confirmation of accommodations and services as listed",
      "Costs may be subject to change due to Hotel Tariff fluctuations, government tax increases, or any new taxes",
    ],

    transport: ["AC Vehicle – Xylo or equivalent"],

    notes: [
      "Maximum one extra person per room allowed",
      "If extra bed required for child below 12yrs, extra person charges are applicable",
      "Child 5-12 yrs no extra bed provided",
      "Child below 5yrs is complimentary",
      "Tours are subject to weather conditions",
      "Best period is from Oct-May",
      "Coral Island visit subject to weather conditions",
    ],

    hotels: {
      baratang: ["Dew Dale Resorts"],
      havelock: [
        "Silver Sand Resort (Lx)",
        "Seashells/Kingdom (Ex)",
        "Dolphin Resort/Seashells (Non AC)/Bayview Inn (Ec) or similar hotels",
      ],
      portBlair: [
        "Fortune Resort Bay Island/Hotel Sentinel/Hotel Sinclairs (Lx)",
        "Megapode Resort/Sunsea Resort/TSG Emerald View/Hotel Mainak (Ex)",
        "Andaman Residency/Hotel Nakshatra Inn/Hotel Rishab/Hotel Aparupa (Ec) or similar hotels",
      ],
    },

    itinerary: [
      {
        day: "Day 1",
        description:
          "On Arrival receive at Port Blair Airport and then take a trip to Baratang Island Morning at leisure, afternoon visit to the unique mud volcano site and trip to Baludera Beach.",
      },
      {
        day: "Day 2",
        description:
          "Visit to the famous lime stone caves at Rafter’s Creek, Return back to the Resorts. After lunch relax and in the evening Proceed to the Parrot Island.",
      },
      {
        day: "Day 3",
        description:
          "Return trip to Port Blair for onward connection to Havelock Island. Night Halt at Havelock.",
      },
      {
        day: "Day 4",
        description:
          "A trip to the Radha nagar Beach. Rest of the day at leisure at Havelock. Overnight at Havelock.",
      },
      {
        day: "Day 5",
        description:
          "Return back to Port Blair, If time permits visit to Sagarika Emporium and Light & Sound Show at Cellular Jail. Overnight at Port Blair.",
      },
      {
        day: "Day 6",
        description: "Full Day trip to Jolly Bouy ~Coral Island.",
      },
      {
        day: "Day 7",
        description: "Drop back to Airport to catch onward connections.",
      },
    ],
  },

  /* ================= LT67-002 ================= */
  {
    id: "LT67-002",
    code: "LT67-002",
    title: "Port Blair (2N) + Havelock (1N) + Baratang (3N)",
    days: "6 Nights / 7 Days",
    image: "/images/About1.png",

    includes: [
      "Rates are per person for AC Accommodation on Twin sharing (CP basis), Arr./Dep. transfer, Welcome drink, All Transfers, All Sightseeing as per Itinerary, All Entrance fees and all taxes",
    ],

    excludes: [
      "Airfares",
      "Use of hotel rooms before/after normal check in/out times",
      "Personal expenses such as telephone calls, dry cleaning, mini bar purchases, etc.",
      "Meals not indicated in the package",
      "Any Optional Tours",
      "Any other items or services not listed in the itinerary",
      "Costs quoted are subject to availability and confirmation of accommodations and services as listed",
      "Costs may be subject to change due to Hotel Tariff fluctuations, government tax increases, or any new taxes",
    ],

    transport: ["AC Vehicle – Xylo or equivalent"],

    notes: [
      "Maximum one extra person per room allowed",
      "If extra bed required for child below 12yrs, extra person charges are applicable",
      "Child 5-12 yrs no extra bed provided",
      "Child below 5yrs is complimentary",
      "Tours are subject to weather conditions",
      "Best period is from Oct-May",
    ],

    hotels: {
      baratang: ["Dew Dale Resorts"],
      havelock: [
        "Silver Sand Resort (Lx)",
        "Seashells/Kingdom (Ex)",
        "Dolphin Resort/Seashells (Non AC)/Bayview Inn (Ec) or similar hotels",
      ],
      portBlair: [
        "Fortune Resort Bay Island/Hotel Sentinel/Hotel Sinclairs (Lx)",
        "Megapode Resort/Sunsea Resort/TSG Emerald View/Hotel Mainak (Ex)",
        "Andaman Residency/Hotel Nakshatra Inn/Hotel Rishab/Hotel Aparupa (Ec) or similar hotels",
      ],
    },

    itinerary: [
      {
        day: "Day 1",
        description:
          "On Arrival receive at Port Blair Airport and then take a trip to Baratang Island Morning at leisure, afternoon visit to the unique mud volcano site and trip to Baludera Beach.",
      },
      {
        day: "Day 2",
        description:
          "Visit to the famous lime stone caves at Rafter’s Creek, Return back to the Resorts. After lunch relax and in the evening Proceed to the Parrot Island.",
      },
      {
        day: "Day 3",
        description:
          "Morning start jungle Trekking from the Resort ~ it is a amazing trip for Bird Watchers, Reach the Camping site at Bada Balu Beach. Laze around the Beach and packed food will be served. Have a picnic lunch, take rest, enjoy the Beach and in the evening return back to the Resort by boat.",
      },
      {
        day: "Day 4",
        description:
          "Return trip to Port Blair for onward connection to Havelock Island. Night Halt at Havelock.",
      },
      {
        day: "Day 5",
        description:
          "A trip to the Radha nagar Beach. Return back to Port Blair by evening ferry. Overnight at Port Blair.",
      },
      {
        day: "Day 6",
        description: "Full Day trip to Jolly Bouy ~ Coral Island",
      },
      {
        day: "Day 7",
        description: "Drop back to Airport to catch onward connections.",
      },
    ],
  },
];
