'use client';
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

interface SearchBarProps {
  onPlaceSelected: (location: { lat: number; lng: number }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onPlaceSelected }) => {
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place.geometry?.location;
      if (location) {
        onPlaceSelected({ lat: location.lat(), lng: location.lng() });
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Search location"
        className="p-2 border border-gray-300 rounded"
      />
    </Autocomplete>
  );
};

export default SearchBar;
