'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface GoogleMapComponentProps {
  markers: { lat: number; lng: number }[];
  center?: { lat: number; lng: number };
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 37.437041393899676,
  lng: -4.191635586788259
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ markers, center = defaultCenter }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (markers.length > 0 && map) {
      map.panTo(markers[markers.length - 1]);
    }
  }, [markers, map]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={map => setMap(map)}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
