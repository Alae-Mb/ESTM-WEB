"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const defaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [40, 40],
  iconAnchor: [12, 41],
});

export default function OSMMap({ center, zoom }) {
  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <div className="w-full h-[400px]  overflow-hidden shadow-xl ">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center} />
      </MapContainer>
    </div>
  );
}
