import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ setCoordinates, setBounce, coordinates }) => {
  const apiKey = "AIzaSyC8jM6cQ_Tc_WlNtmS7tiX12PFWZTxuxbk";

  const handleMapChange = ({ center, marginBounds }) => {
    setCoordinates({ lat: center.lat, lng: center.lng });
    setBounce({ ne: marginBounds.ne, sw: marginBounds.sw });
  };

  return (
    <div className="h-1/2 md:h-[90%] p-4 md:w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        onChange={handleMapChange}
      >
        {/* You can add custom markers or children components here */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
