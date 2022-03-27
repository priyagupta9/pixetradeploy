import React from 'react';
import './styles/imagepicker.css';
import Btn from '../ProductFlowP1Page/Btn';

const Imagepicker = () => {
  return (
    <div className='picker'>
     <h1 className='picker-image'>🖼️</h1>
     <h3 className='picker-header'>LAST BUT NOT THE LEAST</h3>
    <h4 className='picker-description'> Your memories are always safe with us </h4>    
    <Btn text="ALLOW ACCESS TO THE GALLERY" />
    </div>
  )
}

export default Imagepicker