import React from 'react';
import AirbnbScriptLoaded from './AirbnbScriptLoaded';

function Airbnb() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap'
      }}
    >
      <AirbnbScriptLoaded />
    </div>
  );
}

export default Airbnb;
