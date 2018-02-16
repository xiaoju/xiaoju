import React from 'react';
import scriptLoader from 'react-async-script-loader';

const AirbnbScriptLoaded = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  if (isScriptLoaded && isScriptLoadSucceed) {
    window.AirbnbAPI.bootstrap();
  }

  return (
    <div
      className="airbnb-embed-frame"
      data-id="21917882"
      data-view="home"
      data-hide-price="true"
      style={{ width: 450, height: 500, margin: 'auto' }}
    />
  );
};

export default scriptLoader(['https://www.airbnb.com/embeddable/airbnb_jssdk'])(
  AirbnbScriptLoaded
);
