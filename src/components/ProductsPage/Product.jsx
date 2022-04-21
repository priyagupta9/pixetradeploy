import './styles/product.css';
import React from 'react';
import Header from "./Header"
import Photobook from "./Photobook"
import  photobookbg from "./img/photobookbg.png"
import BottomNavbar from "./BottomNavbar"
import { Link } from 'react-router-dom';

const data=[1,2,3,4]
function Product() {
  return (
    <div className='product-page'>
      <Header name= "Priya" />
      {
        data.map(x=>(
          <Link to="/product-name" ><Photobook img={photobookbg} /></Link>
        ))
      }
       {/* {
        data.map(x=>(
          <Photobook img={photobookbg} />
        ))
      } */}
      <BottomNavbar />
    </div>
  );
}

export default Product;
