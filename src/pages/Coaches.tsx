
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoachCard from "@/components/CoachCard";
import LocationFilter from "@/components/LocationFilter";
import { Button } from "@/components/ui/button";
import { MapPin, Filter } from "lucide-react";
import { coaches } from "@/data/coachesData";
import { Coach } from "@/types";

const Coaches = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredCoaches, setFilteredCoaches] = useState<Coach[]>(coaches);
  const [selectedCountry, setSelectedCountry] = useState<string>(searchParams.get("country") || "");
  const [selectedCity, setSelectedCity] = useState<string>(searchParams.get("city") || "");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    applyFilters();
  }, []);

  const applyFilters = () => {
    let filtered = [...coaches];
    
    if (selectedCountry) {
      filtered = filtered.filter((coach) => coach.country === selectedCountry);
    }
    
    if (selectedCity) {
      filtered = filtered.filter((coach) => coach.city === selectedCity);
    }
    
    setFilteredCoaches(filtered);
    
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
            <h1 className="text-3xl font-bold mb-2">Padel Coaches Directory</h1>
            <p className="text-muted-foreground">
              Find professional padel coaches across Middle East and North Africa.
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

            {/* Coaches List */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredCoaches.length}</span> coaches
                  {selectedCountry && ` in ${selectedCountry}`}
                  {selectedCity && `, ${selectedCity}`}
                </p>
              </div>

              {filteredCoaches.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-gray-100 p-3">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No coaches found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try changing your filter options to find coaches in other areas.
                  </p>
                  <Button onClick={() => {
                    setSelectedCountry("");
                    setSelectedCity("");
                    setSearchParams({});
                    setFilteredCoaches(coaches);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCoaches.map((coach) => (
                    <CoachCard key={coach.id} coach={coach} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Coaches;
