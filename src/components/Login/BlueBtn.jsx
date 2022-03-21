import './styles/Button.css';
import React from 'react';

function Bluebtn({text},{color}) {
    return (
      <div className='btn-box'>
        <button className='btnblu'>
          {text}
        </button>
      </div>
    );
  }
  
export default Bluebtn;
  