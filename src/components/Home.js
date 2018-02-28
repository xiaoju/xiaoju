import React from 'react';
import MediaQuery from 'react-responsive';
import xiaoju_horizontal from '../pictures/iconXiaojuio_cn_horizontal.svg';
import xiaoju_vertical from '../pictures/iconXiaojuio_cn_vertical.svg';

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
        style={{ flexGrow: '1', minHeight: '100%' }}
        src={xiaoju_vertical}
        alt="小驹: xiaoju.io"
      />
    </Mobile>
    <Default>
      <img
        style={{ flexGrow: '1', minHeight: '100%' }}
        src={xiaoju_horizontal}
        alt="小驹: xiaoju.io"
      />
    </Default>
  </div>
);

export default Home;
