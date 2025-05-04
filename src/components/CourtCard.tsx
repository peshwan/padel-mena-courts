
import { Link } from "react-router-dom";
import { MapPin, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Court } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface CourtCardProps {
  court: Court & {
    distance?: number;
  };
}

const CourtCard = ({ court }: CourtCardProps) => {
  const { isArabic } = useLanguage();
  
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
          <div className="flex items-center text-muted-foreground mb-3">
            <Star size={16} className="mr-1 text-yellow-500" />
            <span className="text-sm">{court.rating} ({court.reviews} {isArabic ? "تقييم" : "reviews"})</span>
            
            <Clock size={16} className="ml-3 mr-1" />
            <span className="text-sm">
              {isArabic ? `${court.hours.openAr} - ${court.hours.closeAr}` : `${court.hours.open} - ${court.hours.close}`}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {isArabic ? court.descriptionAr : court.description}
          </p>
        </div>
        <div className="mt-auto pt-3 border-t">
          <Link to={`/courts/${court.id}`}>
            <Button className="w-full bg-court hover:bg-court/90">
              {isArabic ? "احجز الآن" : "Book Now"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourtCard;
