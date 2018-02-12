import React from 'react';
import AirbnbScriptLoaded from './AirbnbScriptLoaded';
import AirbnbHtmlImport from './AirbnbHtmlImport';

function Airbnb() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap'
      }}
    >
      {/* <AirbnbScriptLoaded /> */}
      <AirbnbHtmlImport />
    </div>
  );
}

export default Airbnb;
