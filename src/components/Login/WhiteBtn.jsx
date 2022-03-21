import './styles/Button.css';
import React from 'react';

function Whitebtn({text},{color}) {
    return (
      <div className='btn-box'>
        <button className='btnwhite'>
          {text}
        </button>
      </div>
    );
  }

export default Whitebtn;