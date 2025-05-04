
export type Country = 
  | 'Saudi Arabia' 
  | 'UAE' 
  | 'Kuwait' 
  | 'Qatar' 
  | 'Oman' 
  | 'Egypt' 
  | 'Tunisia';

export interface City {
  id: string;
  name: string;
  country: Country;
}

export interface PadelCourt {
  id: string;
  name: string;
  description: string;
  image: string;
  country: Country;
  city: string;
  address: string;
  indoor: boolean;
  numberOfCourts: number;
  amenities: string[];
  rating: number;
  pricePerHour: number;
  contactPhone: string;
  contactEmail: string;
  website?: string;
  openingHours: {
    weekdays: string;
    weekends: string;
  };
  distance?: number;
}

export interface Court {
  id: string;
  name: string;
  nameAr: string;
  type: string;
  typeAr: string;
  location: {
    city: string;
    country: string;
    lat?: number;
    lng?: number;
  };
  locationAr: string;
  description: string;
  descriptionAr: string;
  rating: number;
  reviews: number;
  price: {
    hour: number;
    currency: string;
  };
  amenities: string[];
  amenitiesAr?: string[];
  images: string[];
  hours: {
    open: string;
    close: string;
    openAr: string;
    closeAr: string;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  distance?: number;
}

export interface Coach {
  id: string;
  name: string;
  image: string;
  country: Country;
  city: string;
  bio: string;
  experience: number;
  rating: number;
  specialties: string[];
  availableForPrivateLessons: boolean;
  pricePerHour?: number;
  contactPhone?: string;
  contactEmail?: string;
}

// Utility function to convert PadelCourt to Court
export function convertPadelCourtToCourt(padelCourt: PadelCourt, distance?: number): Court {
  // Extract hour from weekdays opening hours (e.g. "8:00 AM - 11:00 PM" -> "8:00 AM")
  const openHour = padelCourt.openingHours.weekdays.split(' - ')[0] || '';
  const closeHour = padelCourt.openingHours.weekdays.split(' - ')[1] || '';
  
  return {
    id: padelCourt.id,
    name: padelCourt.name,
    nameAr: padelCourt.name, // Default to English name
    type: padelCourt.indoor ? 'Indoor' : 'Outdoor',
    typeAr: padelCourt.indoor ? 'داخلي' : 'خارجي',
    location: {
      city: padelCourt.city,
      country: padelCourt.country,
      lat: 0, // Default values since PadelCourt doesn't have coordinates
      lng: 0,
    },
    locationAr: `${padelCourt.city}، ${padelCourt.country}`,
    description: padelCourt.description,
    descriptionAr: padelCourt.description, // Default to English description
    rating: padelCourt.rating,
    reviews: Math.floor(padelCourt.rating * 10), // Generate a fake number of reviews based on rating
    price: {
      hour: padelCourt.pricePerHour,
      currency: 'USD',
    },
    amenities: padelCourt.amenities,
    images: [padelCourt.image],
    hours: {
      open: openHour,
      close: closeHour,
      openAr: openHour,
      closeAr: closeHour,
    },
    contact: {
      phone: padelCourt.contactPhone,
      email: padelCourt.contactEmail,
      website: padelCourt.website,
    },
    distance: padelCourt.distance || distance,
  };
}
