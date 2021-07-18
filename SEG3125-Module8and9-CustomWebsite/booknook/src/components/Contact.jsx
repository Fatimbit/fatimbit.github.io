import React from "react";
import Footer from './Footer';

function Contact() {
  return (
    <div className="contact">
        <br></br>
        <p>
              Got any questions, requests, or concerns? Enter your information below and our team will get back to you as soon as possible!
            </p>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <p>First Name   <input type="text" placeholder="Enter First Name" name="firstname"></input></p>
          <p>Last Name   <input type="text" placeholder="Enter Last Name" name="lastname"></input></p>
          <p>Phone Number   <input type="text" placeholder="Enter Phone Number" name="phonenum"></input></p>
          <p>Email  <input type="text" placeholder="Enter" name="email"></input></p>
          <p>Message  <input type="text" placeholder="Message" name="message"></input></p>
          </div>
          <div class="col-lg-5">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;