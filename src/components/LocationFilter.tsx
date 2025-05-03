
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getCountries, getCitiesByCountry } from "@/data/courtsData";
import { Filter } from "lucide-react";

interface LocationFilterProps {
  selectedCountry: string;
  selectedCity: string;
  onCountryChange: (country: string) => void;
  onCityChange: (city: string) => void;
  onFilterApply: () => void;
}

const LocationFilter = ({
  selectedCountry,
  selectedCity,
  onCountryChange,
  onCityChange,
  onFilterApply,
}: LocationFilterProps) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setCountries(getCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setCities(getCitiesByCountry(selectedCountry));
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (value: string) => {
    onCountryChange(value);
    onCityChange("");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Filter Courts</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" />
          {isExpanded ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      
      <div className={`space-y-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select value={selectedCountry} onValueChange={handleCountryChange}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all-countries">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Select value={selectedCity} onValueChange={onCityChange} disabled={!selectedCountry}>
              <SelectTrigger id="city">
                <SelectValue placeholder={selectedCountry ? "Select a city" : "Select country first"} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all-cities">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onFilterApply} className="bg-court hover:bg-court-dark">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationFilter;
