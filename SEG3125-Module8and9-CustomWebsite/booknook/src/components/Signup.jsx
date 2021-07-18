import React from "react";
import Footer from './Footer';
import signupphoto from '../assets/signup.PNG';


function Signup() {
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
          <p>Phone Number: <input placeholder="(xxx)-xxx-xxxx" type="text" id="phone" name="phonenum"></input></p>
          <p>Email  <input type="text" placeholder="Enter" name="email"></input></p>

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