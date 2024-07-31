"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const centre = {
  lat: 6.902104487846379,
  lng: 79.86151327930085,
};

const locations = [
  { lat: 7.489236, lng: 80.36528 },
  { lat: 6.489236, lng: 80.36528 },
];

const MultipleMarkersMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={centre} zoom={10}>
        {locations.map((location, index) => (
          <Marker key={`marker-${index}`} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MultipleMarkersMap;
