
import { City, Country, Court } from "@/types";
import { convertGoogleCourtToCourt } from "@/types/CourtTypes";
import { allCourts, saudiArabiaCourts, egyptCourts, qatarCourts, kuwaitCourts, uaeCourts, tunisCourts, bahrainCourts } from "@/data/countries";

export const loadAllCourts = (): Court[] => {
  // Convert courts from all countries
  const convertedCourts = [
    ...saudiArabiaCourts.map(court => convertGoogleCourtToCourt(court)),
    ...egyptCourts.map(court => convertGoogleCourtToCourt(court)),
    ...qatarCourts.map(court => convertGoogleCourtToCourt(court)),
    ...kuwaitCourts.map(court => convertGoogleCourtToCourt(court)),
    ...uaeCourts.map(court => convertGoogleCourtToCourt(court)),
    ...tunisCourts.map(court => convertGoogleCourtToCourt(court)),
    ...bahrainCourts.map(court => convertGoogleCourtToCourt(court))
  ];
  
  return convertedCourts;
};

export const loadCountryCourts = (country: Country): Court[] => {
  // Get courts for specific country and convert them
  const countryCourts = allCourts[country] || [];
  return countryCourts.map(court => convertGoogleCourtToCourt(court));
};

export const getCountries = (): Country[] => {
  // Update to include Bahrain
  return ['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Oman', 'Egypt', 'Tunisia', 'Bahrain'];
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
    'Bahrain': [
      { id: 'manama', name: 'Manama', country: 'Bahrain' },
    ],
  };

  return cities[country] || [];
};
