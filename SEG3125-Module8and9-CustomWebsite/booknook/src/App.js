import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import bookphoto from './assets/homepagebooks.png';

function App() {
  return (
    <div className="App">
     
    <Navbar/>

    <img src={bookphoto} className="bookphotoClass" alt="Welcome"></img> 
    <Footer />
    </div>
  );
}

export default App;
