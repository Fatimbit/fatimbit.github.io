import React from 'react'
import twitterLogo from '../assets/twitterlogo.png';
import facebookLogo from '../assets/facebooklogo.png';
import instagramLogo from '../assets/instagramlogo.png';


function Footer(){
    return(
        <div className="footer">
           Follow us on social media!         
     
           <img src={instagramLogo} className="instaId" alt="instagram"></img> 
           <img src={facebookLogo} className="facebookId" alt="facebook"></img> 
           <img src={twitterLogo} className="twitterId" alt="twitter"></img>  



        </div>
    )
}
export default Footer;