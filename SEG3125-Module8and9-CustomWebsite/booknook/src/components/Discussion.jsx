import React from "react";
import Footer from './Footer';

function Discussion() {
  return (
    <div className="discussion">
      <div class="container">

     
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          

          <div className="discussionheader">
        <p>
            
     <button title="Click this button to make a new post">Post </button> 
            
     &emsp;  Filter by:  &ensp;
            
            
            
                <select name="filterby" id="filterby">
                    <option value="1">All Threads</option>
                    <option value="2">Unread</option>
                    <option value="3">Following</option>
                   
                </select>



                &emsp; &emsp;Sort by:  &ensp;
             <select name="filterby" id="filterby">
                    <option value="1">Most Recent Activity</option>
                    <option value="2">Least Recent Activity</option>
                    <option value="3">Newest Thread</option>
                    <option value="4">Oldest Thread</option>
                </select>
                 
                 </p>
        
        <br></br>
        
      </div>
      <br></br>
      
          <p>
              <h2 class="font-weight-light">My Review of Little Women</h2>
            <h5 class="font-weight-light">Jane Doe posted June 24, 2021 2:34 AM</h5>
              I am crying as I type this,

              &emsp;<button title="Click this button to read the full review">Read More </button> 
              &emsp;<button title="Click this button to make a reply">Reply </button> 
            </p>
            <br></br>
            <p>
            <h2 class="font-weight-light">I'm Reading War and Peace</h2>
            <h5 class="font-weight-light">Maryam Z. posted June 24, 2021 1:00 AM</h5>
              Why is it so long.

              &emsp;<button title="Click this button to read the full review">Read More </button> 
              &emsp;<button title="Click this button to make a reply">Reply </button> 
            </p>
            <br></br>
            <p>
            <h2 class="font-weight-light">All of you are wrong and this book is good</h2>
            <h5 class="font-weight-light">Zayn Khan posted June 24, 2021 12:30 AM</h5>
              I don't understand why everybody keeps saying this book is bad.

              &emsp;<button title="Click this button to read the full review">Read More </button> 
              &emsp;<button title="Click this button to make a reply">Reply </button> 
            </p>
          </div>
          <br></br>
  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Discussion;