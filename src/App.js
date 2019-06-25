import React from 'react';

import Wrapper from './Wrapper';
import BusinessCard from './BusinessCard';
import Showcase from './Showcase';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BusinessCard />
        <Showcase />
      </Wrapper>
    </div>
  );
}

export default App;
