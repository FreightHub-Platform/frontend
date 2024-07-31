"use client";

import React, { useState, useRef } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface MapWithSearchProps {
  onPlaceSelected: (location: { lat: number; lng: number }) => void;
}

const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 6.902187538251858,
  lng: 79.86075851564465,
};

const MapWithSearch: React.FC<MapWithSearchProps> = ({ onPlaceSelected }) => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handlePlaceSelected = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place && place.geometry && place.geometry.location) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setLocation(location);
      onPlaceSelected(location);
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={["places"]}
    >
      <div className="flex flex-col justify-center gap-3 w-full justify-items-center ">
        <div className=" flex px-1/2 w-full content-center justify-items-center justify-center ">
          {" "}
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelected}
          >
            <div className="justify-self-center">
            <Paper
              component="form"
              sx={{
                width: "100%",
                borderRadius: "50px",
                background: "#F5F6FA",
                display: "flex",
                padding: "0 10px",
                alignItems: "center",
                backgroundColor: "#F5F6FA",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onSubmit={handleFormSubmit}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
            </div>
          </Autocomplete>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location || defaultCenter}
          zoom={10}
          onLoad={(map) => setMap(map)}
        >
          {location && <Marker position={location} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapWithSearch;
