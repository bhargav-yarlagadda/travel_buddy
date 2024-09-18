import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import List from './components/List';
import { getPlacesData } from './api';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounce, setBounce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
            setLoading(false);
          },
          (err) => {
            setError('Failed to get location');
            setLoading(false);
          }
        );
      } catch (error) {
        setError('Error retrieving location');
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (bounce) {
      const fetchPlacesData = async () => {
        try {
          const data = await getPlacesData(bounce.sw, bounce.ne);
          console.log(data)
          setPlaces(data);
        } catch (error) {
          setError('Error fetching places data');
        }
      };

      fetchPlacesData();
    }
  }, [bounce]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-1 h-screen">
        <div className="flex-grow basis-1/2 overflow-auto">
          <List places={places} />
        </div>
        <div className="flex-grow basis-1/2">
          <Map places={places} setCoordinates={setCoordinates} coordinates={coordinates} setBounce={setBounce} />
        </div>
      </div>
    </>
  );
};

export default App;
