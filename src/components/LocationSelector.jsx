import React, { useState, useRef, useEffect } from "react";
import { MapPin, X, ChevronDown, ArrowLeftRight } from "lucide-react";

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const popupRef = useRef(null);
  const inputRef = useRef(null);

  // Function to initialize Google Maps Autocomplete
  useEffect(() => {
    if (isOpen && window.google) {
      const autocompleteService =
        new window.google.maps.places.AutocompleteService();

      if (inputValue) {
        autocompleteService.getPlacePredictions(
          {
            input: inputValue,
            types: ["geocode"],
          },
          (predictions, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setSuggestions(predictions);
            } else {
              setSuggestions([]);
            }
          }
        );
      } else {
        setSuggestions([]);
      }
    }
  }, [inputValue, isOpen]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Function to truncate location text
  const truncateLocation = (location) => {
    const words = location.split(" ");
    if (words.length >= 3) {
      console.log("String Test:");
      
      return words.slice(0, 2).join(" ") + "...";
    }
    return location;
  };

  // Handle location selection
  const handleSelectLocation = (suggestion) => {
    setSelectedLocation(suggestion.description);
    setIsOpen(false);
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <div className="relative cursor-pointer">
      {/* Location selector trigger */}
      <span className="text-[13px] text-gray-400 px-4">For delivery</span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full max-w-md px-4 rounded-lg"
      >
        {/* <MapPin className="w-5 h-5 mr-2 text-gray-500" /> */}
        <span className="text-sm font-semibold">
          {selectedLocation
            ? truncateLocation(selectedLocation)
            : "Set location"}
        </span>
        <ChevronDown className="ml-2 w-4 h-4" />
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute z-50 w-[500px] mt-2 bg-white border rounded-lg shadow-lg"
        >
          <div className="">
            <div className="flex flex-col mb-4 py-6 px-5">
              <span className="mb-3">Change Location</span>
              <div className="flex items-center">
                <div className="bg-shoppingCartGreen py-2 px-3 rounded-lg">
                  <p className="text-[13px] text-white font-semibold">Detect My Location</p>
                </div>
                <div className="mx-3">
                  <ArrowLeftRight className="h-4 w-4 text-gray-400"/>
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter your location"
                  className="flex-1 p-2 border rounded-lg focus:outline-none "
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Suggestions list */}
            {suggestions.length > 0 && (
              <ul className="max-h-60 overflow-auto">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    onClick={() => handleSelectLocation(suggestion)}
                    className="p-2 hover:bg-gray-50 cursor-pointer rounded"
                  >
                    <div className="flex items-center gap-5 py-2 px-3">
                      <div>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-[450]">{suggestion.description}</span>
                        <span className="text-sm text-gray-500">{suggestion.description}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
