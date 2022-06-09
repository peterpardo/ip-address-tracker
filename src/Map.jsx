import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = ({ lat, lng }) => {
  const currentLocation = [lat, lng];
  const icon = L.icon({
    iconUrl: "./placeholder.png",
    iconSize: [38, 38],
  });

  const ResetCenterView = () => {
    const map = useMap();

    useEffect(() => {
      if (lat && lng) {
        map.setView(L.latLng(lat, lng), map.getZoom(), { animate: true });
      }
    }, [lat, lng]);

    return null;
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={currentLocation} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <ResetCenterView />
    </MapContainer>
  );
};

export default Map;
