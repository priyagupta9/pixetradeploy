import './styles/photobook.css';
import React from 'react';

function Photobook({img}) {
  return (
    <div className='product-card'>
        <img src={img} alt="Photobook" />
        <h1>PhotoBooks</h1>
    </div>
  );
}

export default Photobook;
