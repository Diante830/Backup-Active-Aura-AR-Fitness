import React from 'react';
import './Footer.css';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return <>
  
    <div class="footer-basic">
      <footer class="footer">
        <ul class="list">
        <li><a href="#" className="footer-links">Terms of Service</a></li>
        <li><a href="#" className="footer-links">About</a></li>
        <li><a href="#" className="footer-links">FAQ</a></li>
        <li><a href="#" className="footer-links">Contact Us</a></li>
        <li><a href="#" className="footer-links">Privacy Policy</a></li>
      </ul>
      <p className="copyright">Copyright &copy; {currentYear} Active Aura AR Fitness Inc. All rights reserved.</p>
      </footer>
    </div>
    
  </>
}
