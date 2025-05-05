import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourtCard from "@/components/CourtCard";
import LocationFilter from "@/components/LocationFilter";
import { Button } from "@/components/ui/button";
import { MapPin, List, Filter, Loader, Star, Clock, Phone } from "lucide-react";
import { Court } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "@/components/ui/use-toast";
import { loadAllCourts, getCountries, getCitiesByCountry } from "@/utils/courtUtils";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Update the courts per page to 12
const COURTS_PER_PAGE = 12;

const Courts = () => {
  const { isArabic } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [allCourts, setAllCourts] = useState<Court[]>([]);
  const [filteredCourts, setFilteredCourts] = useState<Court[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get("country") || "");
  const [selectedCity, setSelectedCity] = useState<string>(searchParams.get("city") || "");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [nearMeActive, setNearMeActive] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredCourts.length / COURTS_PER_PAGE);
  
  // Current page courts
  const currentCourts = filteredCourts.slice(
    (currentPage - 1) * COURTS_PER_PAGE,
    currentPage * COURTS_PER_PAGE
  );

  useEffect(() => {
    // Load courts data
    const courts = loadAllCourts();
    setAllCourts(courts);
    setFilteredCourts(courts);
    
    // Apply any filters from URL
    applyFilters(courts);
  }, []);
  
  useEffect(() => {
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [filteredCourts]);

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
        const courtsWithDistance = allCourts.map(court => {
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

  const applyFilters = (courtsData = allCourts) => {
    let filtered = [...courtsData];
    
    // Filter by country
    if (selectedCountry && selectedCountry !== "all-countries") {
      filtered = filtered.filter((court) => court.location.country === selectedCountry);
    }
    
    // Filter by city
    if (selectedCity && selectedCity !== "all-cities") {
      filtered = filtered.filter((court) => court.location.city === selectedCity);
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
    setFilteredCourts(allCourts);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="flex flex-col min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container max-w-[1400px] px-4 mx-auto"> {/* Updated container to be wider */}
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
                onFilterApply={() => applyFilters()}
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

            {/* Courts List - Updated grid for wider layout */}
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
                <>
                  {view === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"> {/* Updated grid to show 4 cards per row on extra large screens */}
                      {currentCourts.map((court) => (
                        <CourtCard key={court.id} court={court} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 mb-8">
                      {currentCourts.map((court) => (
                        <div key={court.id} className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col sm:flex-row">
                          <div className="sm:w-1/3">
                            <img
                              src={court.images[0]}
                              alt={court.name}
                              className="w-full h-48 sm:h-full object-cover"
                            />
                          </div>
                          <div className="p-4 sm:w-2/3 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold">{isArabic ? court.nameAr : court.name}</h3>
                                <div className="flex items-center bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm">
                                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                  <span className="font-medium">{court.rating}</span>
                                </div>
                              </div>
                              <div className="flex items-center text-muted-foreground mb-2">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>
                                  {isArabic ? court.locationAr : `${court.location.city}, ${court.location.country}`}
                                </span>
                              </div>
                              <div className="flex items-center text-muted-foreground mb-2">
                                <Clock className="h-4 w-4 mr-1" />
                                <span className="text-sm">
                                  {isArabic ? `${court.hours.openAr} - ${court.hours.closeAr}` : `${court.hours.open} - ${court.hours.close}`}
                                </span>
                              </div>
                              {court.contact?.phone && (
                                <div className="flex items-center text-muted-foreground mb-2">
                                  <Phone className="h-4 w-4 mr-1" />
                                  <span className="text-sm">{court.contact.phone}</span>
                                </div>
                              )}
                              <p className="text-sm mb-4 line-clamp-2">{isArabic ? court.descriptionAr : court.description}</p>
                              {court.distance && (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                  {court.distance.toFixed(1)} {isArabic ? "كم" : "km"}
                                </span>
                              )}
                            </div>
                            <div className="flex justify-end mt-2">
                              <Button 
                                className="bg-court hover:bg-court-dark"
                                onClick={() => {
                                  const mapUrl = court.mapUrl || 
                                    `https://maps.google.com/?q=${encodeURIComponent(court.location.city + ', ' + court.location.country)}`;
                                  window.open(mapUrl, '_blank');
                                }}
                              >
                                {isArabic ? "عرض على الخريطة" : "View on Map"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination className="my-8">
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                        
                        {/* First page */}
                        {currentPage > 3 && (
                          <PaginationItem>
                            <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                          </PaginationItem>
                        )}
                        
                        {/* Ellipsis */}
                        {currentPage > 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        
                        {/* Pages around current page */}
                        {[...Array(Math.min(5, totalPages))].map((_, i) => {
                          let pageNum;
                          
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          
                          if (pageNum <= 0 || pageNum > totalPages) return null;
                          
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationLink 
                                isActive={currentPage === pageNum}
                                onClick={() => handlePageChange(pageNum)}
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}
                        
                        {/* Ellipsis */}
                        {currentPage < totalPages - 3 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        
                        {/* Last page */}
                        {currentPage < totalPages - 2 && (
                          <PaginationItem>
                            <PaginationLink onClick={() => handlePageChange(totalPages)}>
                              {totalPages}
                            </PaginationLink>
                          </PaginationItem>
                        )}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
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
