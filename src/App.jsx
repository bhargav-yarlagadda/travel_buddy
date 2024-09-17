import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import List from './components/List';

const App = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row gap-1'>
        <div className='flex-grow md:basis-1/3'>
          <List />
        </div>
        <div className='flex-grow md:basis-2/3'>
          <Map />
        </div>
      </div>
    </>
  );
};

export default App;
