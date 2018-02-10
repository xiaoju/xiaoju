import React from 'react';
import xiao_chinese from '../pictures/xiao_chinese.svg';
import ju_chinese from '../pictures/ju_chinese.svg';
import xiao_pinyin from '../pictures/xiao_pinyin.svg';
import ju_pinyin from '../pictures/ju_pinyin.svg';
import xiaoju_io from '../pictures/xiaoju_io.svg';

const Home = props => (
  <div>
    <ul>
      <li>
        <img src={xiao_chinese} alt="" />
        <img src={ju_chinese} alt="" />
      </li>
      <li>
        <img src={xiao_pinyin} alt="" />
        <img src={ju_pinyin} alt="" />
      </li>
      <li>
        <img src={xiaoju_io} alt="" />
      </li>
    </ul>
  </div>
);

export default Home;
