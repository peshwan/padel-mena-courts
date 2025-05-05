import { Link } from "react-router-dom";
import { MapPin, Star, Clock, Phone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Court } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface CourtCardProps {
  court: Court & {
    distance?: number;
    mapUrl?: string;
  };
}

const CourtCard = ({ court }: CourtCardProps) => {
  const { isArabic } = useLanguage();
  
  const handleMapView = () => {
    // Use the direct map URL if available, otherwise construct one
    const mapUrl = court.mapUrl || 
      `https://maps.google.com/?q=${encodeURIComponent(court.location.city + ', ' + court.location.country)}`;
    window.open(mapUrl, '_blank');
  };
  
  // Format phone number for display
  const formatPhoneNumber = (phone: string) => {
    if (!phone) return '';
    
    // For Arabic, we keep the phone number as is
    if (isArabic) return phone;
    
    // For English, we keep the international format
    return phone;
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img
          src={court.images[0]}
          alt={court.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-court text-white">{isArabic ? court.typeAr : court.type}</Badge>
        </div>
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <h3 className="font-bold text-lg mb-1">{isArabic ? court.nameAr : court.name}</h3>
          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{isArabic ? court.locationAr : court.location.city}</span>
            
            {court.distance !== undefined && (
              <span className="text-sm ml-auto font-medium text-court">
                {court.distance < 1 
                  ? isArabic 
                    ? `${Math.round(court.distance * 1000)} متر` 
                    : `${Math.round(court.distance * 1000)} m` 
                  : isArabic 
                    ? `${court.distance.toFixed(1)} كم` 
                    : `${court.distance.toFixed(1)} km`}
              </span>
            )}
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Star size={16} className="mr-1 text-yellow-500" />
            <span className="text-sm">{court.rating} ({court.reviews} {isArabic ? "تقييم" : "reviews"})</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">
              {isArabic ? `${court.hours.openAr} - ${court.hours.closeAr}` : `${court.hours.open} - ${court.hours.close}`}
            </span>
          </div>
          {court.contact?.phone && (
            <div className="flex items-center text-muted-foreground mb-2">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">{formatPhoneNumber(court.contact.phone)}</span>
            </div>
          )}
          {court.contact?.website && (
            <div className="flex items-center text-muted-foreground mb-3">
              <Globe size={16} className="mr-1" />
              <a 
                href={court.contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline truncate"
              >
                {court.contact.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {isArabic ? court.descriptionAr : court.description}
          </p>
        </div>
        <div className="mt-auto pt-3 border-t">
          <Button 
            className="w-full bg-court hover:bg-court/90"
            onClick={handleMapView}
          >
            {isArabic ? "عرض على الخريطة" : "View in Map"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourtCard;
