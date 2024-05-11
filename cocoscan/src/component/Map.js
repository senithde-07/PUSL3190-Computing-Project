import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for styling

const Map = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <MapContainer
          style={{ width: "auto", height: "75vh", marginTop: "40px" }}
          center={[6.9271, 79.8612]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Map;
