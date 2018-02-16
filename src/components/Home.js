import React from 'react';
import MediaQuery from 'react-responsive';

import name_horizontal from '../pictures/name_horizontal.svg';
import name_vertical from '../pictures/name_vertical.svg';

const Mobile = props => <MediaQuery {...props} maxWidth={639} />;
const Default = props => <MediaQuery {...props} minWidth={640} />;

const Home = props => (
  <div
    style={{
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0% 20% 0% 20%'
    }}
  >
    <Mobile>
      <img
        style={{ flexGrow: '1' }}
        src={name_vertical}
        alt="小驹: xiaoju.io"
      />
    </Mobile>
    <Default>
      <img
        style={{ flexGrow: '1' }}
        src={name_horizontal}
        alt="小驹: xiaoju.io"
      />
    </Default>
  </div>
);

export default Home;
