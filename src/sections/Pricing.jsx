import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [] = useState(0);
  return (
    <center>

      <div className="pricing-container">
        <div className="price-card">
        
          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Starter</div>
            <h2>Start with a <br></br>5-day Free Trial </h2>
            <p>Enjoy full access to real-time AR form correction, personalized coaching, and premium workout sessions. Designed to help you achieve your fitness goals more effectively, with expert guidance and advanced technology. Unlock your potential with tailored plans and cutting-edge tools </p>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>Free Trial Includes</p>
            <p style={{ fontWeight: '600' }}>5-day Premium Access</p>
          </div>
        </div>
        <div className="price-card">
          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Popular</div>
            <h2>Get Our <br></br>Basic Plan</h2>
            <p>$12.99/month</p>
            <ul style={{ textAlign: 'left', fontWeight: '400', paddingLeft: '20px' }}>
              <li>20min & 30min workout sessions</li>
              <li>Real-time visual and verbal feedback</li>
              <li>Personalized training</li>
              <li>Sessions include a 10min Cool Down</li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>Basic Plan</p>
            <p style={{ fontWeight: '600' }}>$12.99</p>
          </div>
        </div>
        <div className="price-card">
          {/* Top Section */}
          <div className="card-top">
            <div className="card-tag">Best Value</div>
            <h2>Get Our <br></br>Premium Plan</h2>
            <p>$18.99/month</p>
            <ul style={{ textAlign: 'left', fontWeight: '400', paddingLeft: '20px' }}>
              <li>20min to 50 min workout sessions</li>
              <li>Real-time visual and verbal feedback</li>
              <li>Personalized training</li>
              <li>Sessions have a 10min Cool Down</li>
              <li>Weekly personalized meal plans</li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="card-bottom">
            <p>Premium Plan</p>
            <p style={{ fontWeight: '600' }}>$18.99</p>
          </div>
        </div>
      </div>
    </center>

  );
}

export default Pricing;