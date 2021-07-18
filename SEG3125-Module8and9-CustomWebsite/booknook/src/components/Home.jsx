import React from "react";
import Footer from './Footer';
import bookphoto from '../assets/homepagebooks2.png';
function Home() {
  return (
    <div className="home">
      

    <div >
    <img src={bookphoto} className="bookphotoClass" alt="Welcome"></img> 
    <div class="hometext1">Welcome to Book Nook!</div>
    <div class="hometext2">Feel free to browse our library, make reviews on our discussion board, or sign up to join our book club and gain access to our book club virtual meetings!</div>

    </div>

    <Footer />
    </div>
       

  );
}

export default Home;