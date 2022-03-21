import React, { useState } from 'react';
import "./styles/Number.css";
import  facebook from "./img/facebook.png";
import  insta from "./img/facebook (1).png";
import  twitter from "./img/twitter.png";
import BlueBtn from '../OtpPage/BlueBtn';
import Whitebtn from "./WhiteBtn";
import CircleBtn from "./CircleBtn";
import google from "../images/google.png";

function Number() {
  const [otp, setOtp] = useState(new Array(6).fill(""));


  function handleChange(element, index){
    let value=element.value;
    if(isNaN(value)) return false;

    setOtp([...otp.map((d,idx)=>(idx === index) ? value : d)]);

    if(element.nextSibling){
      element.nextSibling.focus();
    }
  }

  return (
    <div>
      <form action="/" method="post" name="validtelephone">
        <div className="phone">
        
        
        <BlueBtn text="CONTINUE" />
        <Whitebtn text="LOGIN WITH FACEBOOK"/>
        </div>
      <div>
        <CircleBtn img={facebook} />
        <CircleBtn img={twitter} />
        <CircleBtn img={insta} />
        </div>
      </form>
     
    </div>
  );
}

export default Number;
