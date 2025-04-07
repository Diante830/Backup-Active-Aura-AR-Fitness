import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return <>
  <center>
    <nav>
    <a href="/">
          <img src="./images/logo.svg" alt="Logo" className="logo" />
        </a>
      <ul class="list">
        <li><a href="#features" className="nav-links">Features</a></li>
        <li><a href="#pricing" className="nav-links">Pricing</a></li>
        <li><a href="#reviews" className="nav-links">Reviews</a></li>
      </ul>
    </nav>
    </center>
  </>
}

