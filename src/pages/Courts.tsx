
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourtCard from "@/components/CourtCard";
import LocationFilter from "@/components/LocationFilter";
import { Button } from "@/components/ui/button";
import { MapPin, List, Filter, Loader } from "lucide-react";
import { courts } from "@/data/courtsData";
import { PadelCourt, convertPadelCourtToCourt } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";

const Courts = () => {
  const { isArabic } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourts, setFilteredCourts] = useState<PadelCourt[]>(courts);
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get("country") || "");
  const [selectedCity, setSelectedCity] = useState<string>(searchParams.get("city") || "");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [nearMeActive, setNearMeActive] = useState(false);

  useEffect(() => {
    applyFilters();
  }, []);

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
    setIsLoadingLocation(true);
    setNearMeActive(true);
    
    if (!navigator.geolocation) {
      toast({
        title: isArabic ? "خطأ" : "Error",
        description: isArabic 
          ? "خدمة تحديد الموقع غير متوفرة في متصفحك" 
          : "Geolocation is not supported by your browser",
        variant: "destructive"
      });
      setIsLoadingLocation(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
        setIsLoadingLocation(false);
        
        // Update courts with distance
        const courtsWithDistance = courts.map(court => {
          // Create random coordinates for demonstration purposes
          const courtLat = Math.random() * 10 + 25; // Random coordinates for Middle East
          const courtLng = Math.random() * 20 + 35;
          
          const distance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            courtLat,
            courtLng
          );
          
          return { ...court, distance };
        });
        
        // Sort by distance
        const sorted = [...courtsWithDistance].sort((a, b) => (a.distance || 0) - (b.distance || 0));
        setFilteredCourts(sorted);
        
        toast({
          title: isArabic ? "تم بنجاح" : "Success",
          description: isArabic 
            ? "تم تحديد موقعك وترتيب الملاعب حسب الأقرب إليك" 
            : "Location detected! Courts are now sorted by distance",
        });
      },
      () => {
        setIsLoadingLocation(false);
        toast({
          title: isArabic ? "خطأ" : "Error",
          description: isArabic 
            ? "لم نتمكن من الوصول إلى موقعك. يرجى التأكد من تفعيل خدمة الموقع والمحاولة مرة أخرى" 
            : "Could not access your location. Please make sure location services are enabled",
          variant: "destructive"
        });
      }
    );
  };

  const applyFilters = () => {
    let filtered = [...courts];
    
    // Filter by country
    if (selectedCountry && selectedCountry !== "all-countries") {
      filtered = filtered.filter((court) => court.country === selectedCountry);
    }
    
    // Filter by city
    if (selectedCity && selectedCity !== "all-cities") {
      filtered = filtered.filter((court) => court.city === selectedCity);
    }
    
    // If near me is active and we have the user location, re-apply distance calculation
    if (nearMeActive && userLocation) {
      filtered = filtered.map(court => {
        // Create random coordinates for demonstration purposes
        const courtLat = Math.random() * 10 + 25;
        const courtLng = Math.random() * 20 + 35;
        
        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          courtLat,
          courtLng
        );
        
        return { ...court, distance };
      }).sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }
    
    setFilteredCourts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCountry && selectedCountry !== "all-countries") params.set("country", selectedCountry);
    if (selectedCity && selectedCity !== "all-cities") params.set("city", selectedCity);
    setSearchParams(params);
  };

  const resetFilters = () => {
    setSelectedCountry("");
    setSelectedCity("");
    setNearMeActive(false);
    setSearchParams({});
    setFilteredCourts(courts);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isArabic ? "دليل ملاعب البادل" : "Padel Courts Directory"}
            </h1>
            <p className="text-muted-foreground">
              {isArabic ? "ابحث عن ملاعب البادل في الشرق الأوسط وشمال أفريقيا." : "Find and book padel courts across Middle East and North Africa."}
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              onClick={toggleFilter}
              className="w-full flex items-center justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {isFilterOpen ? 
                (isArabic ? "إخفاء الفلاتر" : "Hide Filters") : 
                (isArabic ? "عرض الفلاتر" : "Show Filters")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filter Sidebar */}
            <div className={`md:block ${isFilterOpen ? "block" : "hidden"}`}>
              <LocationFilter
                selectedCountry={selectedCountry}
                selectedCity={selectedCity}
                onCountryChange={handleCountryChange}
                onCityChange={setSelectedCity}
                onFilterApply={applyFilters}
                isArabic={isArabic}
              />
              
              {/* Near Me feature */}
              <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <h3 className="text-lg font-medium mb-4">
                  {isArabic ? "الملاعب القريبة مني" : "Courts Near Me"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {isArabic
                    ? "استخدم موقعك الحالي لإيجاد أقرب الملاعب إليك"
                    : "Use your current location to find the nearest courts"}
                </p>
                <Button
                  onClick={getLocation}
                  disabled={isLoadingLocation}
                  className={`w-full flex items-center justify-center ${nearMeActive ? "bg-court hover:bg-court/90" : ""}`}
                >
                  {isLoadingLocation ? (
                    <Loader className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <MapPin className="h-4 w-4 mr-2" />
                  )}
                  {isArabic ? "استخدم موقعي" : "Use My Location"}
                </Button>
                
                {nearMeActive && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      onClick={resetFilters} 
                      className="w-full"
                    >
                      {isArabic ? "إعادة ضبط الموقع" : "Reset Location"}
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Courts List */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? (
                      <>
                        عرض <span className="font-medium text-foreground">{filteredCourts.length}</span> ملعب
                        {selectedCountry && selectedCountry !== "all-countries" && ` في ${selectedCountry}`}
                        {selectedCity && selectedCity !== "all-cities" && `، ${selectedCity}`}
                        {nearMeActive && userLocation && " مرتبة حسب المسافة"}
                      </>
                    ) : (
                      <>
                        Showing <span className="font-medium text-foreground">{filteredCourts.length}</span> courts
                        {selectedCountry && selectedCountry !== "all-countries" && ` in ${selectedCountry}`}
                        {selectedCity && selectedCity !== "all-cities" && `, ${selectedCity}`}
                        {nearMeActive && userLocation && " sorted by distance"}
                      </>
                    )}
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      variant={view === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setView("grid")}
                      className={view === "grid" ? "bg-court hover:bg-court-dark" : ""}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid-2x2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/><path d="M12 3v18"/></svg>
                    </Button>
                    <Button
                      variant={view === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setView("list")}
                      className={view === "list" ? "bg-court hover:bg-court-dark" : ""}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {filteredCourts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-gray-100 p-3">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    {isArabic ? "لم يتم العثور على ملاعب" : "No courts found"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {isArabic ? "حاول تغيير خيارات التصفية للعثور على المزيد من الملاعب." : "Try changing your filter options to find more courts."}
                  </p>
                  <Button onClick={resetFilters}>
                    {isArabic ? "إعادة ضبط الفلاتر" : "Reset Filters"}
                  </Button>
                </div>
              ) : (
                view === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourts.map((court) => (
                      <CourtCard key={court.id} court={convertPadelCourtToCourt(court, court.distance)} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredCourts.map((court) => (
                      <div key={court.id} className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col sm:flex-row">
                        <div className="sm:w-1/3">
                          <img
                            src={court.image}
                            alt={court.name}
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        </div>
                        <div className="p-4 sm:w-2/3 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold">{court.name}</h3>
                              <div className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" className="w-4 h-4 mr-1">
                                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">{court.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>
                                {isArabic ? `${court.country}، ${court.city}` : `${court.city}, ${court.country}`}
                              </span>
                            </div>
                            <p className="text-sm mb-4 line-clamp-2">{court.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              <span className="bg-sand/10 px-2 py-1 rounded-full text-xs">
                                {isArabic ? `${court.numberOfCourts} ملعب` : `${court.numberOfCourts} Courts`}
                              </span>
                              <span className="bg-teal/10 px-2 py-1 rounded-full text-xs">
                                {court.indoor ? 
                                  (isArabic ? 'داخلي' : 'Indoor') : 
                                  (isArabic ? 'خارجي' : 'Outdoor')}
                              </span>
                              {court.amenities.slice(0, 2).map((amenity, idx) => (
                                <span key={idx} className="bg-court/10 px-2 py-1 rounded-full text-xs">{amenity}</span>
                              ))}
                              {court.distance && (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                  {court.distance.toFixed(1)} {isArabic ? "كم" : "km"}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <p className="font-medium">
                              <span className="text-court">${court.pricePerHour}</span> {isArabic ? "/ ساعة" : "/ hour"}
                            </p>
                            <Button 
                              className="bg-court hover:bg-court-dark"
                              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(court.address + ', ' + court.city + ', ' + court.country)}`, '_blank')}
                            >
                              {isArabic ? "عرض على الخريطة" : "View on Map"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courts;
