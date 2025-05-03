
import { Coach } from "@/types";

export const coaches: Coach[] = [
  {
    id: "1",
    name: "Mohammed Al-Faisal",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Riyadh",
    experience: 8,
    specialties: ["Beginner Training", "Advanced Tactics", "Doubles Strategy"],
    languages: ["Arabic", "English"],
    rating: 4.9,
    bio: "Former professional tennis player turned padel coach with over 8 years of experience. Certified by the World Padel Tour.",
    contactPhone: "+966 55 123 4567",
    contactEmail: "coach.mohammed@riyadhpadel.com",
    instagram: "@coach_mohammed",
    availableForPrivateLessons: true
  },
  {
    id: "2",
    name: "Sara Al-Maktoum",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Dubai",
    experience: 10,
    specialties: ["Ladies Training", "Technical Skills", "Youth Development"],
    languages: ["Arabic", "English", "Spanish"],
    rating: 4.8,
    bio: "International padel champion with 10+ years of coaching experience. Specializes in developing female players and youth programs.",
    contactPhone: "+971 50 987 6543",
    contactEmail: "sara@dubaipadelacademy.ae",
    instagram: "@sara_padel_pro",
    availableForPrivateLessons: true
  },
  {
    id: "3",
    name: "Carlos Menendez",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Qatar",
    city: "Doha",
    experience: 15,
    specialties: ["Pro Training", "Competition Preparation", "Physical Conditioning"],
    languages: ["Spanish", "English", "Arabic"],
    rating: 5.0,
    bio: "Former World Padel Tour player from Spain with multiple championships. Now bringing professional training methodologies to Qatar.",
    contactPhone: "+974 3333 2222",
    contactEmail: "carlos@qatarpadelacademy.com",
    instagram: "@carlospadel",
    availableForPrivateLessons: true
  },
  {
    id: "4",
    name: "Fatima El-Baz",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Egypt",
    city: "Cairo",
    experience: 6,
    specialties: ["Beginner to Intermediate", "Group Classes", "Youth Training"],
    languages: ["Arabic", "English", "French"],
    rating: 4.7,
    bio: "Pioneer of women's padel in Egypt with a passion for growing the sport. Specialized in introducing the sport to newcomers of all ages.",
    contactPhone: "+20 10 2345 6789",
    contactEmail: "fatima@cairopadel.eg",
    instagram: "@fatima_padel_egypt",
    availableForPrivateLessons: true
  },
  {
    id: "5",
    name: "Ahmed Al-Jabri",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "Oman",
    city: "Muscat",
    experience: 7,
    specialties: ["All Levels", "Mental Game", "Strategic Play"],
    languages: ["Arabic", "English"],
    rating: 4.8,
    bio: "Oman's leading padel instructor dedicated to growing the sport in the country. Former national tennis player with a strategic approach to coaching.",
    contactPhone: "+968 9876 5432",
    contactEmail: "ahmed@omanpadel.om",
    instagram: "@ahmed_padel_muscat",
    availableForPrivateLessons: true
  },
  {
    id: "6",
    name: "Leila Ben Salah",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
    country: "Tunisia",
    city: "Tunis",
    experience: 9,
    specialties: ["Advanced Techniques", "Tournament Preparation", "Defensive Play"],
    languages: ["Arabic", "French", "English"],
    rating: 4.9,
    bio: "Tunisia's top padel coach with a background in professional tennis. Known for developing competitive players through advanced training techniques.",
    contactPhone: "+216 98 765 432",
    contactEmail: "leila@tunispadel.tn",
    instagram: "@leila_padel_tunis",
    availableForPrivateLessons: true
  },
  {
    id: "7",
    name: "Khaled Al-Otaibi",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
    country: "Saudi Arabia",
    city: "Jeddah",
    experience: 12,
    specialties: ["Elite Training", "Competitive Strategy", "Professional Development"],
    languages: ["Arabic", "English"],
    rating: 4.9,
    bio: "High-performance coach who has trained several national champions. Focuses on developing elite players with professional aspirations.",
    contactPhone: "+966 56 789 0123",
    contactEmail: "khaled@jeddahpadelelite.sa",
    instagram: "@khaled_elite_coach",
    availableForPrivateLessons: true
  },
  {
    id: "8",
    name: "Elena Martinez",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
    country: "UAE",
    city: "Abu Dhabi",
    experience: 14,
    specialties: ["Technical Excellence", "Professional Training", "Volley Techniques"],
    languages: ["Spanish", "English", "Arabic"],
    rating: 5.0,
    bio: "Spanish padel pro with World Padel Tour experience bringing European techniques to the UAE. Known for technical precision and competitive training.",
    contactPhone: "+971 50 123 4567",
    contactEmail: "elena@abudhabipadel.ae",
    instagram: "@elena_padel_pro",
    availableForPrivateLessons: true
  }
];

// Helper function to get coaches by country
export const getCoachesByCountry = (country: string): Coach[] => {
  return coaches.filter(coach => coach.country === country);
};

// Helper function to get coaches by city
export const getCoachesByCity = (city: string): Coach[] => {
  return coaches.filter(coach => coach.city === city);
};
