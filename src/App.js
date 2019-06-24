import React from 'react';

import BusinessCard from './BusinessCard';
import Showcase from './Showcase'; // make sure you set index correctly etc

function App() {
  return (
    <div className="App">
      {/* set wrapper and basic body styling here */}
      <h1>boop</h1>
      <BusinessCard />
      <Showcase />
    </div>
  );
}

export default App;
