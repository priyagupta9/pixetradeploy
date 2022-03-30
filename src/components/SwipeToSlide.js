import React, { Component } from "react";
import Slider from "react-slick";
import lala from "./images/512.png"
// css 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 6,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h2>Hehe Slider Basic Dome</h2>
        <Slider {...settings}>
          {[{lala},{lala},{lala}].map((item,index)=>{
            return <div key={index}><img src={item} /></div>;
          })}
          
        </Slider>
      </div>
    );
  }
}