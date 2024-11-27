"use client";
import React, { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "../../../components/maps/SearchBar";
import GoogleMapRouteComponent from "../../../components/maps/GoogleMapRouteComponent";
import AuthGuard from "../../../components/common/auth/AuthGurd";

const libraries = ["places"];

const Orders: React.FC = () => {
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [destination, setDestination] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleOriginSelected = (location: { lat: number; lng: number }) => {
    setOrigin(location);
  };

  const handleDestinationSelected = (location: {
    lat: number;
    lng: number;
  }) => {
    setDestination(location);
  };

  return (
    <AuthGuard>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={["places"]}
      >
        <div className="bg-gray-100 min-h-screen">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full max-w-lg">
              <SearchBar onPlaceSelected={handleOriginSelected} />
            </div>
            <div className="w-full max-w-lg">
              <SearchBar onPlaceSelected={handleDestinationSelected} />
            </div>
          </div>
          <GoogleMapRouteComponent origin={origin} destination={destination} />
        </div>
      </LoadScript>
    </AuthGuard>
  );
};

export default Orders;
