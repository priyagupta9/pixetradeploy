import './styles/product.css';
import React from 'react';
import Header from "./Header"
import Photobook from "./Photobook"
import  photobookbg from "./img/photobookbg.png"
import BottomNavbar from "./BottomNavbar"
import { Link } from 'react-router-dom';
import {useLocation } from 'react-router-dom';

const data=[1,2,3,4]
function Product() {
  const {state} = useLocation();
  const name = state.name;
  if(name=== null){
    name = "User";
  }
  return (
    <div className='product-page'>
      <Header name={name} />
      {
        data.map(x=>(
          <Link to="/product-name" ><Photobook img={photobookbg} /></Link>
        ))
      }
      <BottomNavbar />
    </div>
  );
}

export default Product;
