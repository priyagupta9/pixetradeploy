import React ,{ useState } from 'react';
import logo from "../images/512.png"
import '../allLogin.css';
import email from "./img/email.png";
import person from "./img/person.png"
import { Link } from 'react-router-dom';
import "../OtpPage/styles/WhiteBtn.css"
import "../OtpPage/styles/BlueBtn.css"
import  mobile from "../images/mobile.png"


import validator from 'validator'

function LoginInfo() {

  const [usernameerror,setusernameError] = useState("");
  const [emailerror,setEmailError] = useState("");
  const [phoneerror,setphoneError] = useState("");
  const [inputValues,setInputValues] = useState({
  username:"",
  email:"",
  phone:""
  });

  
  const inputEvent = (e) => {
  inp(e);
  validateEmail(e);
  }

  function validateEmail(e){
    let email = e.target.value;

    if(validator.isEmail(email)){
      setEmailError("")
    }else{
      setEmailError("Enter Valid Email!")
    }
  }

  function inp(e){
    console.log(inputValues);
    let {name,value} = e.target;
    setInputValues((previousValue)=>{
    
    if(name ==="username"){
    
      return {
        
      username:value,
      email:previousValue.email,
      phone:previousValue.phone
        
      }
    }else if(name ==="email"){
    
    return {
    
      email:value,
      username:previousValue.username,
      phone:previousValue.phone
    
    }
    }else if(name ==="phone"){
    
    return {
    
    phone:value,
    username:previousValue.username,
    email:previousValue.email
    }
    }
    });
  }

  function onSubmit(e){
      e.preventDefault();
      setusernameError("");
      setEmailError("");
      setphoneError("");

      if(inputValues.username ===""){
        setusernameError("username is required");
        return false;
      }else if(inputValues.email ===""){
      setEmailError("Email is required");
      return false;
      }else if(inputValues.phone ===""){
        setphoneError("phone is required");
        return false;
      }else{
          console.log("Form Submitted")
      }
  }

  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>

      <form className='loginInfo-form' onSubmit={onSubmit()}>

        <div className='input_box'>
          <div className='white-box'>
          <img src={person} alt="phone" />
            <input type="text" id="userName" placeholder='Enter Your Name' name='username' value={inputValues.username}
              onChange={(e) => inputEvent(e)}></input>
          </div>
          <small style={{ fontWeight: 'bold',color: 'red',}}>{usernameerror}</small>
        </div>

        <div className='input_box'>
          <div className='white-box'>
          <img src={email} alt="phone" />
            <input type="text" id="userEmail" placeholder='Enter Email ID' name='email' value={inputValues.email}
              onChange={(e) => inputEvent(e)}></input>
          </div>
          <small style={{ fontWeight: 'bold',color: 'red',}}>{emailerror}</small>
        </div>

        <div className='input_box'>
         <div className='white-box'>
            <img src={mobile} alt="phone" className='circle' />
            <div className='nr-input'>
              <span>+91</span>
                <input
                    type="tel"
                    label="Enter Phone Number"
                    title='Number'
                    required
                    name="phone"
                    maxLength="10"
                    value={inputValues.phone}
                />
            </div>
            <small style={{ fontWeight: 'bold',color: 'red',}}>{phoneerror}</small>
          </div>
          </div>
          <Link to="/otplogin">
          <button className='blue-box sub' type='submit'>
             <p className='blue-text'>CONTINUE</p> 
            </button>
          </Link>
      </form>
      <a href="/">Need help?</a>
    </div>
  );
  }
export default LoginInfo;
