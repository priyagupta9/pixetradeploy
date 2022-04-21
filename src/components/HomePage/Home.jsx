import React from 'react';
import "./styles/home.css";

import Header from './Header';
import Heroimg from "./img/heroimg.png";
import Homeimg from "./img/homeing2.jpg";
import img6 from "./img/image6.jpg";

import FrequentProduct from '../Sliders/FrequentProducts';
import CollectionSlider from '../Sliders/CollectionSlider';
// import ProductSlider from '../Sliders/FeaturedProductSlider';
import BlogCard from './BlogCard';

const Home = () => {
  return (
    <div className='product-page'>
    <Header name="Harsh" />
    <div className='herodiv'>
    <img className='heroimg' src={Heroimg} alt="beautiful products"  />
    </div>
    <FrequentProduct />
    <CollectionSlider />
    <div className='herodiv'>
      <img className='homeimg' src={Homeimg} alt="beautiful products"  />
      </div>
      {/* <ProductSlider /> */}
      <div className='herodiv'>
      <img className='homeimg' src={img6} alt="beautiful products"  />
      </div>
      <h2 className="SliderHeader">Get Creative</h2>
      <BlogCard img={img6} />
      <BlogCard img={img6} />
      <BlogCard img={img6} />
      {/* <Btn text="Explore more ideas    ->" /> */}
    </div>
  )
}

export default Home