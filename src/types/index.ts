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
}

export interface Coach {
  id: string;
  name: string;
  image: string;
  country: Country;
  city: string;
  experience: number;
  specialties: string[];
  languages: string[];
  rating: number;
  bio: string;
  contactPhone: string;
  contactEmail: string;
  instagram?: string;
  availableForPrivateLessons: boolean;
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
