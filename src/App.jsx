import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Reviews from './sections/Reviews';
import News from './sections/News';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Navigation />
      <center>
        <div className="header-container">
        <div class="card text-center mb-3" >
          <div class="card-body">
            <h5 class="card-title">Get Clarity on your <br></br>
            Fitness Goals</h5>
            <p class="card-text">Whether you're focused on your fitness goals or improving your form, Active Aura’s AR assistant ensures your workouts are effective, safe, and
            tailored just for you.</p>
          </div>
        </div>
        <div className="white-logo">
          <img src="./images/whiteauralogo.svg" alt="Active Aura Logo"/>
          </div>
          <h6>Download To Get Started</h6>

        <div className="download-container">
        <a href="https://www.apple.com/ca/app-store/" class="btn btn-primary">
        <img src="./images/appstore.svg" alt="Download on the App Store" style={{ width: "150px" }}/>
        </a>
        <a href="https://play.google.com/store/games?hl=en&pli=1" class="btn btn-primary">
        <img src="./images/googleplay.svg" alt="Download on the Google Play Store" style={{ width: "150px" }}/>
        </a>
        </div>
      </div>
      </center>

      <div id="features"></div>

      <Features />

      <div id="pricing"></div>
      <Pricing />
      <div id="reviews"></div>
      <Reviews />
      <News />

      <Footer />

    </>
  );
}

export default App;
