import './styles/header.css';
import React from 'react';

function Header({name}) {
  return (
    <div className='header'>
       <h1><span>👋</span>Hello, {name}</h1>
    </div>
  );
}

export default Header;
