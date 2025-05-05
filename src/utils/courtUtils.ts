
import { saudiArabiaCourts } from "@/data/countries/saudiArabia";
import { Court } from "@/types";
import { GoogleCourt, convertGoogleCourtToCourt } from "@/types/CourtTypes";

// Load all courts from different country files
export const loadAllCourts = (): Court[] => {
  const allGoogleCourts: GoogleCourt[] = [
    ...saudiArabiaCourts,
    // Add other country imports here as they become available
    // ...uaeCourts,
    // ...kuwaitCourts,
  ];
  
  // Convert all Google courts to our Court format
  return allGoogleCourts.map(googleCourt => convertGoogleCourtToCourt(googleCourt));
};

// Get unique countries from courts data
export const getCountries = (courts: Court[]): string[] => {
  return [...new Set(courts.map(court => court.location.country))].sort();
};

// Get cities by country
export const getCitiesByCountry = (courts: Court[], country: string): string[] => {
  return [...new Set(courts
    .filter(court => court.location.country === country)
    .map(court => court.location.city))].sort();
};

// Get all cities
export const getAllCities = (courts: Court[]): string[] => {
  return [...new Set(courts.map(court => court.location.city))].sort();
};
