'use client';
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { distance } from 'framer-motion';

interface GoogleMapRouteComponentProps {
  origin: { lat: number; lng: number } | null;
  destination: { lat: number; lng: number } | null;
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};

const GoogleMapRouteComponent: React.FC<GoogleMapRouteComponentProps> = ({ origin, destination }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [travelTime, setTravelTime] = useState<string | null>(null);

  useEffect(() => {
    if (origin && destination) {
      const calculateRoute = async () => {
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
              setDirections(result);
              const route = result.routes[0].legs[0];
              setTravelTime(route.duration?.text || null);
            } else {
              console.error(`Directions request failed due to ${status}`);
            }
          }
        );
      };
      calculateRoute();
    }
  }, [origin, destination]);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
        onLoad={map => setMap(map)}
      >
        {origin && <Marker position={origin} />}
        {destination && <Marker position={destination} />}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions
            }}
          />
        )}
      </GoogleMap>
      {travelTime && <p className="p-4">Estimated travel time: {travelTime}</p>}
      {!travelTime && <p className="p-4">No travel time available</p>}
      {!origin && <p className="p-4">Select origin</p>}
      {!destination && <p className="p-4">Select destination</p>}
      {origin && destination && !directions && <p className="p-4">Calculating route...</p>}
      {origin && destination && directions && !travelTime && <p className="p-4">Calculating travel time...</p>}
      {origin && destination && directions && travelTime && <p className="p-4">Route calculated!</p>}
      {/* show distance for the route */}
      {origin && destination && directions && travelTime && (
        <p className="p-4">Distance: {directions.routes[0].legs[0].distance?.text}</p>
      )}
    </div>
  );
};

export default GoogleMapRouteComponent;
