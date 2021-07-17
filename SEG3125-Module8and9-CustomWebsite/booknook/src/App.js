import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import bookphoto from './assets/homepagebooks2.png';
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Playfair+Display:wght@700&display=swap');
</style> 

function App() {
  return (
    <div className="App">
     
    <Navbar/>

    <div>
    <img src={bookphoto} className="bookphotoClass" alt="Welcome"></img> 
    <div class="hometext1">Welcome to Book Nook!</div>
    <div class="hometext2">Feel free to browse our library, make reviews on our discussion board, or sign up to join our book club and gain access to our book club virtual meetings!</div>

    </div>

    <Footer />
    </div>
  );
}

export default App;
