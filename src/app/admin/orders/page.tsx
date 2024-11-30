"use client";
import React, { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "../../../components/maps/SearchBar";
import GoogleMapRouteComponent from "../../../components/maps/GoogleMapRouteComponent";
import AuthGuard from "../../../components/common/auth/AuthGurd";
import OrdersTable from "../../../components/common/orders/OrdersTable";
import { Spinner } from "@nextui-org/react";

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
        loadingElement={
          <div className="flex items-center justify-center h-full">
            <div className="flex justify-center items-center h-screen">
              <Spinner size="lg" />
            </div>{" "}
          </div>
        }
      >
        <div className="bg-gray-100">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full max-w-lg">
              {/* <SearchBar onPlaceSelected={handleOriginSelected} /> */}
            </div>
            <div className="w-full max-w-lg">
              {/* <SearchBar onPlaceSelected={handleDestinationSelected} /> */}
            </div>
          </div>
          <GoogleMapRouteComponent origin={origin} destination={destination} />
        </div>
        {/* Orders Table */}
        <div className="mt-8 px-4">
          <h2 className="text-xl font-bold mb-4">Orders List</h2>
          <OrdersTable />
        </div>
      </LoadScript>
    </AuthGuard>
  );
};

export default Orders;
