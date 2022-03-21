import React, { useState } from 'react';
import "./styles/Phone.css"
import "./styles/WhiteBtn.css"
import  mobile from "../images/mobile.png"

function Phone(){
const [number, setNumber] = useState("");
function numberChange(element){
  let value=element.value;
  if(isNaN(value)) return false;
  
  setNumber(value);
  if(value.length > 10){
    return false;
  }
}
    return(
      <div className='white-box'>
      <img src={mobile} alt="phone" className='circle' />
        <div className='nr-input'>
                <span>+91</span>
                <input
                type="tel"
                name="mobile"
                label="Enter Phone Number"
                title='Number'
                required
                value={number}
                maxLength="10"
                onChange={e => numberChange(e.target)}
                />
            </div>
            </div>
    )
}

export default Phone;
