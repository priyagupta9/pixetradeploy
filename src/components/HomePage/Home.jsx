import '../ProductsPage/styles/product.css';
import "./styles/home.css";
import React from 'react';
import Header from "../ProductsPage/Header"
import Photobook from "../ProductsPage/Photobook"
import  photobookbg from "../ProductsPage/img/photobookbg.png"
import BottomNavbar from "../ProductsPage/BottomNavbar"
import Hero from "./img/heroimg.png";
import { Link } from 'react-router-dom';

const data=[1,2,3,4]
function Home() {
  return (
    <div className='product-page'>
      <Header name="Joe" />
      <img className='heroimg' src={Hero} alt="beautiful products"  />
      {
        data.map(x=>(
          <Link to="/product-name" ><Photobook img={photobookbg} /></Link>
        ))
      }
      <BottomNavbar />
    </div>
  );
}

export default Home;
