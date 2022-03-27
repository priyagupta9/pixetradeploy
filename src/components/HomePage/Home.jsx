import '../ProductsPage/styles/product.css';
import "./styles/home.css";

import React from 'react';
import Header from "../ProductsPage/Header"
import Photobook from "../ProductsPage/Photobook"
import  photobookbg from "../ProductsPage/img/photobookbg.png"
import BottomNavbar from "../ProductsPage/BottomNavbar"
import Heroimg from "./img/heroimg.png";
import Homeimg from "./img/homeing2.jpg";
import { Link } from 'react-router-dom';
import Product1 from "./sliderProduct";
import Collection from "./CollectionComp"
import FeaturedProducts from './FeaturedProducts';
import SwipeToSlide from '../SwipeToSlide';
import ProductSlider from '../Sliders/ProductSlider';
import CollectionSlider from '../Sliders/CollectionSlider';
import BlogCard from './BlogCard';
import img6 from "./img/image6.jpg";
import Btn from '../ProductFlowP1Page/Btn';
const data=[1,2,3,4]
function Home() {
  return (
    <div className='product-page'>
      <Header name="Joe" />
      <div className='herodiv'>
      <img className='heroimg' src={Heroimg} alt="beautiful products"  />
      </div>
      <CollectionSlider />
      <div className='herodiv'>
      <img className='homeimg' src={Homeimg} alt="beautiful products"  />
      </div>
      {/* {
        data.map(x=>(
          <Link to="/product-name" ><Photobook img={photobookbg} /></Link>
        ))
      } */}
     
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
