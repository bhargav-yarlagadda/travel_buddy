import React, { useState } from 'react';
import PlaceDetails from './PlaceDetails';

const List = ({ places }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  return (
    <div className="py-8 px-4 max-h-screen md:overflow-y-scroll bg-gray-800">
      <div className="flex justify-center mb-6">
        <span className="text-white text-3xl font-semibold tracking-wide text-center">
          Hostels, Restaurants <br /> & Attractions Around You
        </span>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <form className="w-full flex flex-col gap-6 justify-around sm:flex-row sm:gap-4">
          {/* Location Filter */}
          <div className="flex flex-col w-full sm:w-1/2 items-center">
            <label
              className="mb-2 text-lg text-white font-medium tracking-wide"
              htmlFor="locations"
            >
              Choose a Location:
            </label>
            <select
              id="locations"
              name="locations"
              className="w-full px-4 py-3 rounded-md border border-gray-500 bg-gray-50 text-black focus:outline-none focus:border-blue-500"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option disabled value="">
                Select an Option
              </option>
              <option value="hostels">Hostels</option>
              <option value="restaurants">Restaurants</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="flex flex-col w-full sm:w-1/2 items-center">
            <label
              className="mb-2 text-lg text-white font-medium tracking-wide"
              htmlFor="ratings"
            >
              Choose a Rating:
            </label>
            <select
              id="ratings"
              name="ratings"
              className="w-full px-4 py-3 rounded-md border border-gray-500 bg-gray-50 text-black focus:outline-none focus:border-blue-500"
              value={selectedRating}
              onChange={handleRatingChange}
            >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </div>
        </form>
      </div>

      {/* Places List */}
      <div className="mt-8 h-1/2 overflow-y-auto space-y-4">
        {places.map((item, idx) => (
          <PlaceDetails key={idx} place={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
