import React from "react";
import Footer from './Footer';
import book1photo from '../assets/book1.png';
import book2photo from '../assets/book2.png';
import book3photo from '../assets/book3.png';
function Books() {
  return (
    <div className="books">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img src={book1photo} className="book1photoClass" alt="Welcome"></img> 

          </div>
          <div class="col-lg-5">
            <h2 class="font-weight-light">Percy Jackson & The Olympians The Lightening Thief</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. <button title="Click this button to start reading this book!">Read Now </button> 
            </p>
          </div>
          <div class="col-lg-7">
          <img src={book2photo} className="book2photoClass" alt="Welcome"></img> 
          </div>
          <div class="col-lg-5">
            <h2 class="font-weight-light">Airman</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.  <button title="Click this button to start reading this book!">Read Now </button> 
            </p>
            <p class="p1">People who read Airman also read Artemis Fowl</p>
          </div>
          <div class="col-lg-7">
          <img src={book3photo} className="book3photoClass" alt="Welcome"></img> 

          </div>


          <div class="col-lg-5">
            <h2 class="font-weight-light">Artemis Fowl</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.  <button title="Click this button to start reading this book!">Read Now </button> 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Books;