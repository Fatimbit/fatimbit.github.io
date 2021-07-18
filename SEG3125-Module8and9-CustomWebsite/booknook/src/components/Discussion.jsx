import React from "react";
import Footer from './Footer';

function Discussion() {
  return (
    <div className="discussion">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <button title="Click this button to make a new post">Post </button> 

          <div className="discussionheader">
        <p>Filter by:   <input type="text" placeholder="Search..." name="searchbooks"></input></p><p>Sort by:   <input type="text" placeholder="..." name="searchbooks"></input></p>
        

        
      </div>
          <p>
              <h2 class="font-weight-light">My Review of Little Women</h2>
            <h5 class="font-weight-light">Jane Doe posted June 24, 2021 2:34 AM</h5>
              I am crying as I type this,
            </p>
            <p>
            <h2 class="font-weight-light">I'm Reading War and Peace</h2>
            <h5 class="font-weight-light">Maryam Z. posted June 24, 2021 1:00 AM</h5>
              Why is it so long.
            </p>
            <p>
            <h2 class="font-weight-light">All of you are wrong and this book is good</h2>
            <h5 class="font-weight-light">Zayn Khan posted June 24, 2021 12:30 AM</h5>
              I don't understand why everybody keeps saying this book is bad.
            </p>
          </div>
  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discussion;