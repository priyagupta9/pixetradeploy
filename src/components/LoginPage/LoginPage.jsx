import React from 'react';
import logo from "../images/512.png"
import WhiteBtn from '../OtpPage/WhiteBtn';
import '../allLogin.css';
import Phone from '../OtpPage/Phone';
import email from "./img/email.png";
import person from "./img/person.png"

function LoginPage() {
  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>
      <div className='btns'>
      <WhiteBtn text="" img={person} placeholder="Your Name"/>
      <WhiteBtn text="" img={email} placeholder="Your Email ID"/>
      <Phone />
      </div>
      <a href="/">Need help?</a>
    </div>
  );
}

export default LoginPage;
