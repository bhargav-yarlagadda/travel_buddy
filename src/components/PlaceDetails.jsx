import React from 'react';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const PlaceDetails = ({ place }) => {

  return (
    <div className="shadow-lg rounded-lg md:w-[80%] mx-auto overflow-hidden bg-white">
      <div className="h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'})` }}>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{place.name}</h2>
        
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center">
            <AiFillStar className="text-yellow-500" />
            <p className="ml-1">{Number(place.rating)}</p>
          </div>
          <p>{place.num_reviews} review{place.num_reviews > 1 && 's'}</p>
        </div>

        <div className="flex justify-between items-center my-2">
          <p className="text-gray-600">Price</p>
          <p>{place.price_level}</p>
        </div>

        <div className="flex justify-between items-center my-2">
          <p className="text-gray-600">Ranking</p>
          <p>{place.ranking}</p>
        </div>

        {place?.awards?.map((award) => (
          <div className="flex items-center justify-between my-2" key={award.display_name}>
            <img src={award.images.small} alt={award.display_name} className="w-6 h-6" />
            <p className="text-sm text-gray-500 ml-2">{award.display_name}</p>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 my-2">
          {place?.cuisine?.map(({ name }) => (
            <span key={name} className="bg-gray-200 px-2 py-1 text-sm rounded">{name}</span>
          ))}
        </div>

        {place.address && (
          <p className="flex items-center text-gray-500 text-sm mt-2">
            <FaLocationArrow className="mr-2" />{place.address}
          </p>
        )}

        {place.phone && (
          <p className="flex items-center text-gray-500 text-sm mt-2">
            <FaPhoneAlt className="mr-2" />{place.phone}
          </p>
        )}
      </div>

      <div className="px-4 py-2 bg-gray-100 flex justify-between">
        <button
          className="text-blue-500 hover:underline"
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </button>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
