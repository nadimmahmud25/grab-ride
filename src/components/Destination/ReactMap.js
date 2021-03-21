
import React, {useState } from 'react';
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import '../../App.css'

const ReactMap = () => {
    
  const [mapCenter, setMapCenter] = useState({ lat:23.74, lng:90.3765});
  const [mapZoom, setMapZoom] = useState(10);
  
  return (
    <div className="map">
        <LeafletMap center={mapCenter} zoom={mapZoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </LeafletMap>
    </div>
  );
};

export default ReactMap;