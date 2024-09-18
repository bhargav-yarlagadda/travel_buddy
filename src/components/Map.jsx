import React from "react";
import GoogleMapReact from "google-map-react";
import { FaLocationDot } from "react-icons/fa6";

const Map = ({ setCoordinates, setBounce, coordinates,places }) => {
  const apiKey = import.meta.env.REACT_API_KEY;

  const handleMapChange = ({ center, marginBounds }) => {
    setCoordinates({ lat: center.lat, lng: center.lng });
    setBounce({ ne: marginBounds.ne, sw: marginBounds.sw });
  };

  return (
    <div className="h-[50vh] md:h-[90vh] w-full p-4">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        onChange={handleMapChange}
      >
        {places?.map((place,i)=>{
          return(
            <div key={i} className="" lat={Number(place.latitute)} lng={Number(place.longitude)} >
              <FaLocationDot/>
            </div>
          )
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
