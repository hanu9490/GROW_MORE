import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const position = [51.505, -0.09];

function Map() {
  return (
    <div style={styles.container}>
      <div style={styles.map}>
        <MapContainer
          center={position}
          zoom={13}
          style={{
            height: "100%",
            width: "100%",
            zIndex: 1,
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh", // Full height of the viewport
    width: "100vw", // Full width of the viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    height: "400px",
    width: "400px",
    zIndex: 0,
  },
};

export default Map;
