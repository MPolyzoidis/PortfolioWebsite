import React from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import memojiSmile from "../images/memoji-smile.png"

const customIcon = new L.Icon({
    iconUrl: memojiSmile.src,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    className: "rounded-full bg-gray-950/90",
})

const Map = () => {
    const position: [number, number] = [40.626431, 22.948294]

    return (
        <MapContainer
            center={position}
            zoom={12}
            scrollWheelZoom={false}
            zoomControl={false}
            doubleClickZoom={false}
            touchZoom={false}
            className="h-full w-full z-10"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon} />
        </MapContainer>
    )
}

export default Map
