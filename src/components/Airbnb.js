import React from 'react';
import AirbnbScriptLoaded from './AirbnbScriptLoaded';
import AirbnbHtmlImport from './AirbnbHtmlImport';

function Airbnb() {
  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'flex',
        flexFlow: 'row wrap',
        // justifyContent: 'space-around',
        alignItems: 'center'
        // alignContent: 'center'
      }}
    >
      <AirbnbScriptLoaded />
      <AirbnbHtmlImport />
    </div>
  );
}

export default Airbnb;
