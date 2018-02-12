import React from 'react';
import placeholder from '../pictures/350x150.png';

function Flexbox() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: 'green'
      }}
    >
      <img style={{ border: 'solid blue' }} src={placeholder} alt="" />
      <img style={{ border: 'solid' }} src={placeholder} alt="" />
      <img style={{ border: 'solid red' }} src={placeholder} alt="" />
    </div>
  );
}

export default Flexbox;
