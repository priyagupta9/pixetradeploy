import '../ProductsPage/styles/product.css';
import "./styles/home.css";

import React from 'react';
import Header from "../ProductsPage/Header"
import BottomNavbar from "../ProductsPage/BottomNavbar"
import Heroimg from "./img/heroimg.png";
import Homeimg from "./img/homeing2.jpg";
import FrequentProduct from '../Sliders/FrequentProducts'
import ProductSlider from '../Sliders/FeaturedProductSlider';
import CollectionSlider from '../Sliders/CollectionSlider';
import BlogCard from './BlogCard';
import img6 from "./img/image6.jpg";
import Btn from '../ProductFlowP1Page/Btn';

function Home() {
  return (
    <div className='product-page'>
      <Header name="" />
      <div className='herodiv'>
      <img className='heroimg' src={Heroimg} alt="beautiful products"  />
      </div>
      <FrequentProduct />
      <CollectionSlider />
      <div className='herodiv'>
      <img className='homeimg' src={Homeimg} alt="beautiful products"  />
      </div>
  
     
      <ProductSlider />
      <div className='herodiv'>
      <img className='homeimg' src={img6} alt="beautiful products"  />
      </div>
      <h2 className="SliderHeader">Get Creative</h2>
      <BlogCard img={img6} />
      <BlogCard img={img6} />
      <BlogCard img={img6} />
      <Btn text="Explore more ideas    ->" />
     
      <BottomNavbar />
    </div>
    // 
    // <FeaturedProducts />
  );
}

export default Home;
