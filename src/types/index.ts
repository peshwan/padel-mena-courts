
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
