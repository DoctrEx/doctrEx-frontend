import React from "react";
import { GoogleMap, Circle, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 31.968599,
  lng: -99.90181,
};

export default function GoogleMaps() {
  const { isLoaded, loadError } = useLoadScript({
    // Uncomment the line below and add your API key
    // googleMapsApiKey: "AIzaSyAyDukOJtPrpTiy8WPCnL33EKwGGPxMEvg",
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  const marks = [
    { lat: 25.9324, lng: 65.1127 },
    { lat: 20.9324, lng: 67.1127 },
    { lat: 24.9324, lng: 49.1127 },
    { lat: 29.9324, lng: 61.1127 },
    { lat: 31.9324, lng: 62.1127 },
    { lat: 34.9324, lng: 54.1127 },
  ];
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={{ lat: 24.9324, lng: 67.1127 }}
    >
      {/* {marks.map((mark, index) => (
        <Circle
          key={index}
          center={mark}
          radius={1000}
          options={{
            strokeColor: "#66009a",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: `#66009a`,
            fillOpacity: 0.35,
            zIndex: 1,
          }}
        />
      ))} */}
      {marks.map((marker) => (
        <Marker
          position={{ lat: marker.lat, lng: marker.lng }}
          key={marker.id}
        />
      ))}
    </GoogleMap>
  );
}
