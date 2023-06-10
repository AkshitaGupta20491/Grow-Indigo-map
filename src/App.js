import React from 'react';
import {MapContainer,TileLayer,Marker, Popup,CircleMarker} from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import Polyline from 'react-leaflet-arrowheads'
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-arrowheads';
import L from "leaflet";
import "./App.css";
// import LeafletGeocoder from "./LeafletGeocoder";
// import LeafletRoutingMachine from "./LeafletRoutingMachine";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";




function App()
 {
  
  const center1=[31.1475, 75.3412];
  const center2=[31.1571, 75.3412];
  const redOptions = { color: 'red' };
  const limeOptions = { color: 'lime' };

  return (
    <MapContainer
    center={center1}
    zoom={15}
      style={{ width: '100vw', height: '100vh' }}
    > 
     <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker center={center1} pathOptions={redOptions} radius={3}>
      <Popup>Farmer 1</Popup>
    </CircleMarker>

    <CircleMarker center={center2} pathOptions={redOptions} radius={3}>
      <Popup>Farmer 2</Popup>
    </CircleMarker>
    {/* <Polyline positions={ [center1,center2] } pathOptions={limeOptions}  /> */}
    <Polyline positions={ [center1,center2] } pathOptions={limeOptions}  arrowheads/>
    




    </MapContainer>

  );
}

export default App;
