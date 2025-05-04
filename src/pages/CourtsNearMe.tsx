import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courts } from "@/data/courtsData";
import CourtCard from "@/components/CourtCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { convertPadelCourtToCourt } from "@/types";

const CourtsNearMe = () => {
  const { isArabic } = useLanguage();
  const isMobile = useIsMobile();
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nearbyCourts, setNearbyCourts] = useState(courts);
  const [sortedCourts, setSortedCourts] = useState(courts);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Function to calculate distance between two points
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  };

  const getLocation = () => {
    setIsLoading(true);
    setStatus("loading");
    
    if (!navigator.geolocation) {
      setStatus("error");
      setIsLoading(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
        setStatus("success");
        setIsLoading(false);
      },
      () => {
        setStatus("error");
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    if (userLocation) {
      const courtsWithDistance = courts.map(court => {
        // Create random coordinates for demonstration purposes
        const courtLat = Math.random() * 10 + 25; // Random coordinates for Middle East
        const courtLng = Math.random() * 20 + 35;
        
        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          courtLat,
          courtLng
        );
        
        return { ...court, distance };
      });
      
      const sorted = [...courtsWithDistance].sort((a, b) => (a.distance || 0) - (b.distance || 0));
      setSortedCourts(sorted);
      setNearbyCourts(sorted.slice(0, 6)); // Show top 6 nearest courts
    }
  }, [userLocation]);

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isArabic ? "الملاعب القريبة منك" : "Courts Near You"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isArabic 
                ? "اكتشف ملاعب البادل الأقرب إلى موقعك الحالي. اسمح للتطبيق باستخدام موقعك للحصول على أفضل النتائج."
                : "Find padel courts closest to your current location. Allow the app to use your location for the best results."}
            </p>
            
            <div className="mt-6">
              <Button 
                onClick={getLocation} 
                disabled={isLoading}
                size="lg"
                className="bg-court hover:bg-court/90 flex items-center gap-2"
              >
                {isLoading ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <MapPin className="h-4 w-4" />
                )}
                {isArabic ? "حدد موقعي" : "Use My Location"}
              </Button>
            </div>
          </div>
          
          {status === "error" && (
            <div className="text-center p-6 bg-red-50 rounded-lg mb-8">
              <p className="text-red-600">
                {isArabic 
                  ? "عذرًا، لم نتمكن من الوصول إلى موقعك. يرجى التأكد من تفعيل خدمة الموقع والمحاولة مرة أخرى."
                  : "Sorry, we couldn't access your location. Please make sure location services are enabled and try again."}
              </p>
            </div>
          )}
          
          {status === "success" && (
            <div className="mb-8 p-4 bg-green-50 rounded-lg text-center">
              <p className="text-green-700">
                {isArabic 
                  ? "تم تحديد موقعك بنجاح! إليك الملاعب الأقرب إليك."
                  : "Location successfully detected! Here are the courts closest to you."}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(status === "success" ? nearbyCourts : sortedCourts).map((court) => (
              <CourtCard 
                key={court.id} 
                court={convertPadelCourtToCourt(court, court.distance)}
              />
            ))}
          </div>
          
          {status !== "success" && !isLoading && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                {isArabic 
                  ? "قم بتفعيل خدمة الموقع لترتيب الملاعب حسب الأقرب إليك."
                  : "Enable location services to see courts sorted by proximity to you."}
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourtsNearMe;
