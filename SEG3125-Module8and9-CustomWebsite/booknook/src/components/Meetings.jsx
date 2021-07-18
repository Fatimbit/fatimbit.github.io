import React from "react";
import Footer from './Footer';
import meetingsphoto from '../assets/meetings.png';

function Meetings() {
  return (
    <div className="meetings">
      <div class="container">
 
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img src={meetingsphoto} className="meetingsphotoClass" alt="Meetings"></img> 
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Meetings</h1>
            <p>
              
              Members of Book Nook are invited to join scheduled 7oom meetings. If you are a book club member, please check your email for more info. If not, sign up now to gain access!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Meetings;