import './styles/product.css';
import React from 'react';
import Header from "./Header"
import Photobook from "./Photobook"
import  photobookbg from "./img/photobookbg.png"
import BottomNavbar from "./BottomNavbar"
import { Link } from 'react-router-dom';

const data=[1,2,3,4]
function Product() {
<<<<<<< HEAD
  const {state} = useLocation();
  const name = state.name;
  if(name=== null){
    name = "User";
  }
  return (
    <div className='product-page'>
      <Header name={name} />
=======
  return (
    <div className='product-page'>
      <Header name= "" />
>>>>>>> 1c3d4889a3f7a62ce4c701f2326faedd74478397
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
