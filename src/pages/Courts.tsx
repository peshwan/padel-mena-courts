
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourtCard from "@/components/CourtCard";
import LocationFilter from "@/components/LocationFilter";
import { Button } from "@/components/ui/button";
import { MapPin, List, Filter } from "lucide-react";
import { courts } from "@/data/courtsData";
import { PadelCourt } from "@/types";

const Courts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCourts, setFilteredCourts] = useState<PadelCourt[]>(courts);
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get("country") || "");
  const [selectedCity, setSelectedCity] = useState<string>(searchParams.get("city") || "");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    applyFilters();
  }, []);

  const applyFilters = () => {
    let filtered = [...courts];
    
    if (selectedCountry) {
      filtered = filtered.filter((court) => court.country === selectedCountry);
    }
    
    if (selectedCity) {
      filtered = filtered.filter((court) => court.city === selectedCity);
    }
    
    setFilteredCourts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCountry) params.set("country", selectedCountry);
    if (selectedCity) params.set("city", selectedCity);
    setSearchParams(params);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Padel Courts Directory</h1>
            <p className="text-muted-foreground">
              Find and book padel courts across Middle East and North Africa.
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
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
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
              />
            </div>

            {/* Courts List */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredCourts.length}</span> courts
                    {selectedCountry && ` in ${selectedCountry}`}
                    {selectedCity && `, ${selectedCity}`}
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
                  <h3 className="text-lg font-medium mb-2">No courts found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try changing your filter options to find more courts.
                  </p>
                  <Button onClick={() => {
                    setSelectedCountry("");
                    setSelectedCity("");
                    setSearchParams({});
                    setFilteredCourts(courts);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              ) : (
                view === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourts.map((court) => (
                      <CourtCard key={court.id} court={court} />
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
                              <span>{court.city}, {court.country}</span>
                            </div>
                            <p className="text-sm mb-4 line-clamp-2">{court.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              <span className="bg-sand/10 px-2 py-1 rounded-full text-xs">{court.numberOfCourts} Courts</span>
                              <span className="bg-teal/10 px-2 py-1 rounded-full text-xs">{court.indoor ? 'Indoor' : 'Outdoor'}</span>
                              {court.amenities.slice(0, 2).map((amenity, idx) => (
                                <span key={idx} className="bg-court/10 px-2 py-1 rounded-full text-xs">{amenity}</span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <p className="font-medium">
                              <span className="text-court">${court.pricePerHour}</span> / hour
                            </p>
                            <Button className="bg-court hover:bg-court-dark">Book Now</Button>
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
