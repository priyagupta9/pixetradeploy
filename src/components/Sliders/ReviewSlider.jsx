import React, { Component } from "react";
import Slider from "react-slick";
// css 
import "./Styles/SliderStyle.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from "../ProductFlowP1Page/Review";

export default class ProductSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 1.4,
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
        {/* <h2 className="SliderHeader">Featured Products</h2> */}
        <Slider {...settings}>
          {[1,2,3,4,5,6,7].map((item,index)=>{
            return <div key={index}><Review /> </div>;
          })}
          
        </Slider>
      </div>
    );
  }
}