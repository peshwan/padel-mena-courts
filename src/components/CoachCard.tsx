
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Coach } from "@/types";

interface CoachCardProps {
  coach: Coach;
}

const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={coach.image}
          alt={coach.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{coach.name}</CardTitle>
          <div className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
            <Star className="h-4 w-4 fill-amber-500 stroke-amber-500 mr-1" />
            <span className="font-medium">{coach.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <CardDescription>{coach.city}, {coach.country}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm line-clamp-2 mb-2">{coach.bio}</p>
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-teal text-white">{coach.experience}+ Years</Badge>
          {coach.availableForPrivateLessons && (
            <Badge variant="outline" className="bg-court/10">Available for booking</Badge>
          )}
        </div>
        <div className="text-sm font-medium">
          <span className="text-gray-600">Specialties:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {coach.specialties.map((specialty, idx) => (
              <Badge key={idx} variant="outline" className="bg-sand/10">{specialty}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-teal hover:bg-teal-dark">Contact Coach</Button>
      </CardFooter>
    </Card>
  );
};

export default CoachCard;
