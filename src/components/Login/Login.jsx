import './styles/Otp.css';
import React from 'react';
import Number from "./Number";
import logo from "./img/512.png"

import Skipbtn from './SkipBtn';
function Login() {
  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>
     <Number/>
     <a className='FAQ' href="/">Need help?</a>
     <Skipbtn />
    </div>
  );
}

export default Login;
