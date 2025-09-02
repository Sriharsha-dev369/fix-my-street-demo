"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map() {
  return (
    <MapContainer
      center={[17.385, 78.4867]} // Example: Hyderabad
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[17.385, 78.4867]}>
        <Popup>Hello World</Popup>
      </Marker>
    </MapContainer>
  )
}