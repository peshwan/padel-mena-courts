
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{court.name}</CardTitle>
          <div className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
            <Star className="h-4 w-4 fill-amber-500 stroke-amber-500 mr-1" />
            <span className="font-medium">{court.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <CardDescription>{court.city}, {court.country}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm line-clamp-2 mb-3">{court.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="bg-sand/10">{court.numberOfCourts} Courts</Badge>
          <Badge variant="outline" className="bg-teal/10">{court.indoor ? 'Indoor' : 'Outdoor'}</Badge>
          {court.amenities.slice(0, 2).map((amenity, idx) => (
            <Badge key={idx} variant="outline" className="bg-court/10">{amenity}</Badge>
          ))}
          {court.amenities.length > 2 && (
            <Badge variant="outline" className="bg-gray-100">+{court.amenities.length - 2}</Badge>
          )}
        </div>
        <p className="text-sm font-medium">
          <span className="text-court">${court.pricePerHour}</span> / hour
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-court hover:bg-court-dark">Book Court</Button>
      </CardFooter>
    </Card>
  );
};

export default CourtCard;
