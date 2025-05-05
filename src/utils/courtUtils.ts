import { City, Country, Court } from "@/types";
import { saudiArabiaCourts } from "@/data/countries/saudiArabia";
import { convertGoogleCourtToCourt } from "@/types/CourtTypes";

export const loadAllCourts = (): Court[] => {
  // Convert all Saudi Arabia courts
  const saudiCourts = saudiArabiaCourts.map(court => convertGoogleCourtToCourt(court));
  
  // You can add more court data from other countries here
  // const uaeCourts = uaeCourts.map(court => convertGoogleCourtToCourt(court));
  
  // For now, we're just using the Saudi Arabia courts
  return saudiCourts;
};

export const getCountries = (): Country[] => {
  return ['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Oman', 'Egypt', 'Tunisia'];
};

export const getCitiesByCountry = (country: Country): City[] => {
  const cities: Record<Country, City[]> = {
    'Saudi Arabia': [
      { id: 'dammam', name: 'Dammam', country: 'Saudi Arabia' },
      { id: 'riyadh', name: 'Riyadh', country: 'Saudi Arabia' },
      { id: 'khobar', name: 'Khobar', country: 'Saudi Arabia' },
      { id: 'dhahran', name: 'Dhahran', country: 'Saudi Arabia' },
    ],
    'UAE': [
      { id: 'dubai', name: 'Dubai', country: 'UAE' },
      { id: 'abu-dhabi', name: 'Abu Dhabi', country: 'UAE' },
    ],
    'Kuwait': [
      { id: 'kuwait-city', name: 'Kuwait City', country: 'Kuwait' },
    ],
    'Qatar': [
      { id: 'doha', name: 'Doha', country: 'Qatar' },
    ],
    'Oman': [
      { id: 'muscat', name: 'Muscat', country: 'Oman' },
    ],
    'Egypt': [
      { id: 'cairo', name: 'Cairo', country: 'Egypt' },
    ],
    'Tunisia': [
      { id: 'tunis', name: 'Tunis', country: 'Tunisia' },
    ],
  };

  return cities[country] || [];
};
