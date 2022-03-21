import React ,{ useState } from 'react';
import logo from "../images/512.png"
import '../allLogin.css';
import email from "./img/email.png";
import person from "./img/person.png"
// import {Link} from 'react-router-dom';
import { BrowserRouter as Redirect} from "react-router-dom";
import "../OtpPage/styles/WhiteBtn.css"
import "../OtpPage/styles/BlueBtn.css"
import  mobile from "../images/mobile.png"
import "./styles/Login.css";


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
  validateName(e);
  validateEmail(e);
  validatePhone(e);
  }

  function validateName(e){
    let {name,value} = e.target;
    if(name==="username"){
      if(validator.isAlpha(value)){
        setusernameError("")
      }else{
        setusernameError("Usename can only contain chracters!")
        document.getElementsByClassName("white-box").classList.add(".red")
      }
  }
}

  function validateEmail(e){
    let {name,value} = e.target;
    if(name==="email"){
      if(validator.isEmail(value)){
        setEmailError("")
      }else{
        setEmailError("Enter Valid Email!")
      }
  }}

  function validatePhone(e){
    let {name,value} = e.target;
    if(name === "phone"){
      if(value.length < 10){
        setphoneError("Enter Valid Phone Number")
      }
      else{
        setphoneError("")
      }
    }
  }

  function inp(e){
    console.log(inputValues);
    let {name,value} = e.target;

    setInputValues((previousValue)=>{
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function handleSubmit(e){
      e.preventDefault();
      setusernameError("");
      setEmailError("");
      setphoneError("");

      if(inputValues.username ===""){
        setusernameError("Please enter your username");
        return false;
      }else if(inputValues.email ===""){
      setEmailError("Please enter your Email ID");
      return false;
      }else if(inputValues.phone ===""){
        setphoneError("Please enter your Phone Number");
        return false;
      }else{
        return <Redirect to="/otplogin/" />
      }
  }

  return (
    <div className='otp-page'>
      <img src={logo} alt="logo" className='logo'/>

      <form className='loginInfo-form'>

        <div className='input_box'>
          <div className='white-box'>
          <img src={person} alt="phone" />
            <input type="text" id="userName" placeholder='Enter Your Name' name='username' value={inputValues.username}
              onChange={(e) => inputEvent(e)}></input>
          </div>
          <small>{usernameerror}</small>
        </div>

        <div className='input_box'>
          <div className='white-box'>
          <img src={email} alt="phone" />
            <input type="text" id="userEmail" placeholder='Enter Email ID' name='email' value={inputValues.email}
              onChange={(e) => inputEvent(e)}></input>
          </div>
          <small>{emailerror}</small>
        </div>

        <div className='input_box'>
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
                    value={inputValues.phone}
                    onChange={(e) => inputEvent(e)}
                />
            </div>
          </div>
            <small>{phoneerror}</small>
          </div>
          <button className='blue-box sub' type='submit' onClick={handleSubmit}>
          <p className='blue-text'>CONTINUE</p></button>

          {/* <Link to="/otplogin" >
          <button className='blue-box sub' type='submit' onClick={handleSubmit}>
          <p className='blue-text'>CONTINUE</p></button>
          </Link> */}


           </form>
      <a href="/">Need help?</a>
    </div>
  );
  }
export default LoginInfo;
