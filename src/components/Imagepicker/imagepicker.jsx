import React from 'react';
import './styles/imagepicker.css';
import framedpicture from "./img/framedpicture.jpg";
import Btn from './Btn';
import Navbar from './Navbar.jsx';
const Imagepicker = () => {
  return (<>
    <Navbar />
    <div className='picker'>
<<<<<<< HEAD
      <div className='picker-image-div' >
      
   <img className='picker-image' src={framedpicture}  /></div>
=======
     <h1 className='picker-image'><span>🖼️</span></h1>
>>>>>>> 1c3d4889a3f7a62ce4c701f2326faedd74478397
     <h3 className='picker-header'>LAST BUT NOT THE LEAST</h3>
    <h4 className='picker-description'> Your memories are always safe with us </h4>    
    <Btn className="pickerBtn" text="ALLOW ACCESS TO THE GALLERY" />
    </div>
    </>
  )
}

export default Imagepicker