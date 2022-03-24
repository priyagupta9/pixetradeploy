import React from 'react';
import "./styles/Phone.css"
import "./styles/WhiteBtn.css"
import  mobile from "../images/mobile.png"

function Phone(){
    return(
      <div className='white-box'>
      <img src={mobile} alt="phone" className='circle' />
        <div className='nr-input'>
                <span>+91</span>
                <input
                    type="tel"
                    pattern='[0-9]*'
                    label="Enter Phone Number"
                    title='Number'
                    required
                    name="phone"
                    maxLength="10"
                />
            </div>
            </div>
    )
}

export default Phone;
