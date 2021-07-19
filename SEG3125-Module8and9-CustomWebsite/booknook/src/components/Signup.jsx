import React, {useState} from "react";
import Footer from './Footer';
import signupphoto from '../assets/signup.PNG';
import validator from 'validator';

function Signup() {
  const[phoneError,setPhoneError]=useState('')
  const validatePhone=(e)=>{
    var a=e.target.value

    var filter=/(?:\(\d{3}\))([-])\d{3}\1\d{4}/;
    if(filter.test(a)){
      setPhoneError("")}
      else{
        setPhoneError("Wrong format for phone number. \nIt must be in the format (xxx)-xxx-xxxx, where each x is a number.")
      }    


      
  }

  const[emailError,setEmailError]=useState('')
  const validateEmail=(e)=>{
    var email=e.target.value

    if(validator.isEmail(email)){
      setEmailError("")}
      else{
        setEmailError("Please enter a valid email address.")
      }    

  }
  return (
    <div className="signup">
        <br></br>
        <p>
              Interested in becoming a member of Book Nook? Just fill in and submit your information to apply!
            </p>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <p>First Name   <input type="text" placeholder="Enter First Name" name="firstname"></input></p>
          <p>Last Name   <input type="text" placeholder="Enter Last Name" name="lastname"></input></p>
          <p>Phone Number: <input placeholder="(xxx)-xxx-xxxx" type="text" id="phone" onChange={(e)=> validatePhone(e)}></input></p>
          <span style={{color:'red',}}>{phoneError}</span>
          <p>Email  <input type="text" placeholder="Enter Email" name="email" onChange={(e)=> validateEmail(e)}></input></p>
          <span style={{color:'red',}}>{emailError}</span>
          <br></br>
          <button title="Click this button to submit your information">Submit </button> 

          </div>
          <div class="col-lg-5">
            <img src={signupphoto} className="signupphotoClass" alt="Welcome"></img> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;