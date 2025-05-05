// New court type based on the Google Places JSON format
export interface GoogleCourt {
  address: string;
  categoryName: string;
  city: string;
  countryCode: string;
  fid: string;
  googleFoodUrl: string;
  imageUrl: string;
  neighborhood: string;
  "openingHours/6/hours": string;
  phone: string;
  reviewsCount: number;
  searchPageUrl: string;
  title: string;
  totalScore: number;
  "location url": string;
  website: string;
}

// Function to convert GoogleCourt to our Court format
export const convertGoogleCourtToCourt = (googleCourt: GoogleCourt) => {
  return {
    id: googleCourt.fid,
    name: googleCourt.title,
    nameAr: googleCourt.title, // Using same title for Arabic
    type: googleCourt.categoryName,
    typeAr: googleCourt.categoryName === "Sports club" ? "نادي رياضي" : googleCourt.categoryName,
    location: {
      city: googleCourt.city,
      country: getCountryName(googleCourt.countryCode),
      neighborhood: googleCourt.neighborhood,
      address: googleCourt.address,
    },
    locationAr: `${googleCourt.neighborhood}، ${googleCourt.city}`,
    description: `${googleCourt.title} is a ${googleCourt.categoryName.toLowerCase()} located in ${googleCourt.neighborhood}, ${googleCourt.city}.`,
    descriptionAr: `${googleCourt.title} هو ${googleCourt.categoryName === "Sports club" ? "نادي رياضي" : googleCourt.categoryName} يقع في ${googleCourt.neighborhood}، ${googleCourt.city}.`,
    rating: googleCourt.totalScore,
    reviews: googleCourt.reviewsCount,
    price: {
      hour: 0, // Not provided in the data
      currency: "SAR",
    },
    amenities: [],
    images: [googleCourt.imageUrl],
    hours: {
      open: extractOpenHours(googleCourt["openingHours/6/hours"]),
      close: extractCloseHours(googleCourt["openingHours/6/hours"]),
      openAr: extractOpenHours(googleCourt["openingHours/6/hours"]),
      closeAr: extractCloseHours(googleCourt["openingHours/6/hours"]),
    },
    contact: {
      phone: googleCourt.phone,
      email: "",
      website: googleCourt.website,
    },
    mapUrl: googleCourt["location url"],
  };
};

// Helper function to extract opening hours
const extractOpenHours = (hoursString: string): string => {
  if (!hoursString) return "";
  const match = hoursString.match(/(\d+\s*[AP]M)\s+to/i);
  return match ? match[1] : "";
};

// Helper function to extract closing hours
const extractCloseHours = (hoursString: string): string => {
  if (!hoursString) return "";
  const match = hoursString.match(/to\s+(\d+\s*[AP]M)/i);
  return match ? match[1] : "";
};

// Helper function to convert country code to name
const getCountryName = (countryCode: string): string => {
  const countryMap: Record<string, string> = {
    SA: "Saudi Arabia",
    AE: "UAE",
    KW: "Kuwait",
    QA: "Qatar",
    OM: "Oman",
    EG: "Egypt",
    TN: "Tunisia",
  };
  
  return countryMap[countryCode] || countryCode;
};
