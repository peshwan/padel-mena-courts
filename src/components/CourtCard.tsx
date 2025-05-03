
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { PadelCourt } from "@/types";

interface CourtCardProps {
  court: PadelCourt;
}

const CourtCard = ({ court }: CourtCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={court.image}
          alt={court.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{court.name}</CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{court.city}, {court.country}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <span className="text-sm">{court.address}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <span className="text-sm">{court.contactPhone}</span>
        </div>
        
        <div className="flex items-start gap-2">
          <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
          <div className="text-sm">
            <div>Weekdays: {court.openingHours.weekdays}</div>
            <div>Weekends: {court.openingHours.weekends}</div>
          </div>
        </div>

        <Button 
          className="w-full bg-court hover:bg-court-dark mt-2"
          onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(court.address + ', ' + court.city + ', ' + court.country)}`, '_blank')}
        >
          <MapPin className="h-4 w-4 mr-2" /> View on Map
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourtCard;
