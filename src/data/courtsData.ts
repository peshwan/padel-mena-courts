
import { PadelCourt } from "@/types";

export const courts: PadelCourt[] = [
  {
    id: "1",
    name: "Riyadh Padel Center",
    description: "Premium padel facility in the heart of Riyadh with 8 professional courts.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Riyadh",
    address: "King Fahd Road, Al Olaya District",
    indoor: true,
    numberOfCourts: 8,
    amenities: ["Parking", "Showers", "Pro Shop", "Cafe", "Training Programs"],
    rating: 4.8,
    pricePerHour: 120,
    contactPhone: "+966 12 345 6789",
    contactEmail: "info@riyadhpadelcenter.com",
    website: "https://riyadhpadelcenter.com",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "2",
    name: "Dubai Padel Hub",
    description: "Luxury padel facility featuring panoramic views of Dubai skyline.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Dubai",
    address: "Jumeirah Beach Road",
    indoor: false,
    numberOfCourts: 12,
    amenities: ["VIP Lounge", "Restaurant", "Pro Shop", "Fitness Center", "Swimming Pool"],
    rating: 4.9,
    pricePerHour: 150,
    contactPhone: "+971 4 123 4567",
    contactEmail: "bookings@dubaipadelclub.ae",
    website: "https://dubaipadelclub.ae",
    openingHours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "7:00 AM - 12:00 AM"
    }
  },
  {
    id: "3",
    name: "Kuwait Padel Academy",
    description: "Modern padel facility with air-conditioned indoor courts.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Kuwait",
    city: "Kuwait City",
    address: "Salmiya District, Block 12",
    indoor: true,
    numberOfCourts: 6,
    amenities: ["Air Conditioning", "Pro Shop", "Cafe", "Coaching Services"],
    rating: 4.7,
    pricePerHour: 95,
    contactPhone: "+965 2222 3333",
    contactEmail: "info@kuwaitpadel.com",
    website: "https://kuwaitpadel.com",
    openingHours: {
      weekdays: "9:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM"
    }
  },
  {
    id: "4",
    name: "Doha Padel Club",
    description: "Qatar's premier padel destination with professional-grade courts.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Qatar",
    city: "Doha",
    address: "West Bay, Diplomatic Area",
    indoor: true,
    numberOfCourts: 10,
    amenities: ["Locker Rooms", "Sports Bar", "Pro Shop", "Private Coaching"],
    rating: 4.8,
    pricePerHour: 140,
    contactPhone: "+974 4444 5555",
    contactEmail: "play@dohapadelclub.qa",
    website: "https://dohapadelclub.qa",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "5",
    name: "Muscat Padel Center",
    description: "Oman's first professional padel facility with stunning mountain views.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "Oman",
    city: "Muscat",
    address: "Al Khuwair, Sultan Qaboos Street",
    indoor: false,
    numberOfCourts: 4,
    amenities: ["Mountain Views", "Cafe", "Equipment Rental", "Beginner Lessons"],
    rating: 4.6,
    pricePerHour: 85,
    contactPhone: "+968 9999 8888",
    contactEmail: "info@muscatpadel.om",
    website: "https://muscatpadel.om",
    openingHours: {
      weekdays: "4:00 PM - 10:00 PM",
      weekends: "3:00 PM - 11:00 PM"
    }
  },
  {
    id: "6",
    name: "Cairo Padel Academy",
    description: "Egypt's largest padel facility with professional training programs.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Egypt",
    city: "Cairo",
    address: "New Cairo, 5th Settlement",
    indoor: false,
    numberOfCourts: 8,
    amenities: ["Night Lighting", "Pro Shop", "Cafe", "Training Academy"],
    rating: 4.7,
    pricePerHour: 70,
    contactPhone: "+20 2 1234 5678",
    contactEmail: "info@cairopadel.eg",
    website: "https://cairopadel.eg",
    openingHours: {
      weekdays: "10:00 AM - 11:00 PM",
      weekends: "9:00 AM - 12:00 AM"
    }
  },
  {
    id: "7",
    name: "Tunis Padel Club",
    description: "Tunisia's premier padel destination with Mediterranean views.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Tunisia",
    city: "Tunis",
    address: "La Marsa Beachfront",
    indoor: false,
    numberOfCourts: 6,
    amenities: ["Beachfront Location", "Bar", "Equipment Rental", "Group Lessons"],
    rating: 4.5,
    pricePerHour: 60,
    contactPhone: "+216 71 234 567",
    contactEmail: "play@tunispadel.tn",
    website: "https://tunispadel.tn",
    openingHours: {
      weekdays: "9:00 AM - 10:00 PM",
      weekends: "9:00 AM - 11:00 PM"
    }
  },
  {
    id: "8",
    name: "Jeddah Padel Elite",
    description: "Exclusive padel club with state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Jeddah",
    address: "Red Sea Mall, King Abdulaziz Road",
    indoor: true,
    numberOfCourts: 6,
    amenities: ["VIP Lounge", "Pro Coach", "Equipment Store", "Fitness Area"],
    rating: 4.8,
    pricePerHour: 130,
    contactPhone: "+966 12 987 6543",
    contactEmail: "info@jeddahpadelelite.sa",
    website: "https://jeddahpadelelite.sa",
    openingHours: {
      weekdays: "8:00 AM - 11:00 PM",
      weekends: "8:00 AM - 12:00 AM"
    }
  },
  {
    id: "9",
    name: "Abu Dhabi Padel Zone",
    description: "Modern padel facility in the UAE capital with professional tournaments.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Abu Dhabi",
    address: "Yas Island Sports District",
    indoor: true,
    numberOfCourts: 8,
    amenities: ["Tournament Facilities", "Spectator Areas", "Sports Bar", "Pro Coaching"],
    rating: 4.9,
    pricePerHour: 145,
    contactPhone: "+971 2 765 4321",
    contactEmail: "play@abudhabi-padel.ae",
    website: "https://abudhabipadel.ae",
    openingHours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "8:00 AM - 12:00 AM"
    }
  },
  {
    id: "10",
    name: "Alexandria Padel Club",
    description: "Beachfront padel facility with Mediterranean views.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Egypt",
    city: "Alexandria",
    address: "Montaza Corniche",
    indoor: false,
    numberOfCourts: 4,
    amenities: ["Sea View", "Beach Access", "Cafe", "Equipment Rental"],
    rating: 4.6,
    pricePerHour: 65,
    contactPhone: "+20 3 456 7890",
    contactEmail: "info@alexpadel.eg",
    website: "https://alexpadel.eg",
    openingHours: {
      weekdays: "10:00 AM - 10:00 PM",
      weekends: "9:00 AM - 11:00 PM"
    }
  }
];

// Helper functions to get unique countries and cities
export const getCountries = (): string[] => {
  return [...new Set(courts.map(court => court.country))].sort();
};

export const getCitiesByCountry = (country: string): string[] => {
  return [...new Set(courts
    .filter(court => court.country === country)
    .map(court => court.city))].sort();
};

export const getAllCities = (): string[] => {
  return [...new Set(courts.map(court => court.city))].sort();
};
