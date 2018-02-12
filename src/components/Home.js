import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import xiao_chinese from '../pictures/xiao_chinese.svg';
import ju_chinese from '../pictures/ju_chinese.svg';
import xiao_pinyin from '../pictures/xiao_pinyin.svg';
import ju_pinyin from '../pictures/ju_pinyin.svg';
import xiaoju_io from '../pictures/xiaoju_io.svg';
import name_horizontal from '../pictures/name_horizontal.svg';
// import AirbnbPreview from './AirbnbPreview';
// import AirbnbComponent from './AirbnbComponent';
// import JQueryExample from './JQueryExample';
import IFrame from './IFrame';

const Home = props => (
  <div>
    {/* <Link to="/bootstrap">Bootstrap</Link>
    <Link to="/sandbox">Sandbox</Link> */}
    <div
      style={{
        backgroundColor: '#5d5d5d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        // height: '100%'
        // maxWidth: '100%'
      }}
    >
      <img style={{ alignSelf: 'flex-end' }} src={name_horizontal} alt="" />
    </div>
  </div>
);

export default Home;
