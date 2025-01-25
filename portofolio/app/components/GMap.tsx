"use client";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

const Gmap = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    const mapId = process.env.NEXT_PUBLIC_MAP_ID || '';
    const position = { lat: 40.5813007436962, lng: 22.95886575955679 };

    return (
        <APIProvider apiKey={apiKey}>
            <div className="h-full">
                <Map 
                    zoom={11}
                    defaultCenter={position} 
                    mapId={mapId} 
                    zoomControl={false}
                    mapTypeControl={false}
                    fullscreenControl={false}
                    streetViewControl={false}/>
                <AdvancedMarker position={position} />
            </div>
        </APIProvider>
    )
}

export default Gmap