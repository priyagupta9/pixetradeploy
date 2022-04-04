import React, { Component } from "react";
import Slider from "react-slick";

// css 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Collection from "../HomePage/CollectionComp";
import "./Styles/SliderStyle.css";

export default class CollectionSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "0px",
      slidesToShow: 2.17,
      swipeToSlide: true,
      arrows: false,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h2 className="SliderHeader">Trending Collection</h2>
        <Slider {...settings}>
          {[1,2,3,4,5,6,7].map((item,index)=>{
            return <div key={index}><Collection/></div>;
          })}
          
        </Slider>
      </div>
    );
  }
}