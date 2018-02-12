import React from 'react';
import MediaQuery from 'react-responsive';

import name_horizontal from '../pictures/name_horizontal.svg';
import name_vertical from '../pictures/name_vertical.svg';

const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Default = props => <MediaQuery {...props} minWidth={768} />;

const Home = props => (
  <div>
    <Mobile>
      <img src={name_vertical} alt="" width="200px" />
    </Mobile>
    <Default>
      <img src={name_horizontal} alt="" width="400px" />
    </Default>
  </div>
);

export default Home;
