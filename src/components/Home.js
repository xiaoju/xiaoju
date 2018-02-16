import React from 'react';
import MediaQuery from 'react-responsive';

import name_horizontal from '../pictures/name_horizontal.svg';
import name_vertical from '../pictures/name_vertical.svg';

const Mobile = props => <MediaQuery {...props} maxWidth={767} />;
const Default = props => <MediaQuery {...props} minWidth={768} />;

const Home = props => (
  <div
    style={{
      display: 'flex',
      // justifyContent: 'center',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'center',
      // flexShrink: '1',
      // width: '100%',
      margin: '0% 20% 0% 20%'
    }}
  >
    <Mobile>
      <img
        style={{ flexGrow: '1' }}
        src={name_vertical}
        // width="10%"
        alt="小驹: xiao ju (little foal), written in chinese characters"
      />
    </Mobile>
    <Default>
      <img
        style={{ flexGrow: '1' }}
        src={name_horizontal}
        // width="10%"
        alt="小驹: xiao ju (little foal), written in chinese characters"
      />
    </Default>
  </div>
);

export default Home;
