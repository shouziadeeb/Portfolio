import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "300px",
    width: "90%",
    color: "white",
    borderRadius: "10px",
  };

  const defaultCenter = {
    lat: 28.89873,
    lng: 78.465594,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAqqJfNXEUyokb-RM9vU8DAPYbvkVFS6S0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
        <Marker />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
