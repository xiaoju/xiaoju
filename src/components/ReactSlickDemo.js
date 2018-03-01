import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReactSlickDemo.css';

class ReactSlickDemo extends Component {
  render() {
    const sliderSettings = {
      dots: true
    };

    return (
      <Slider {...sliderSettings}>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="" />
        </div>
      </Slider>
    );
  }
}

export default ReactSlickDemo;
