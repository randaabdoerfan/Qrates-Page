import React from 'react'
import logo from '../../Assests/Q.png'
import vinly from '../../Assests/vinly.png'
import './Footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <div className='footer'>
      <p className='start'>VINYL STUDIO</p>
      <h2 className='head'>Make it with <br/>Qrates Vinyl Studio</h2>
      <p class="description">
      Design the look and feel of your vinyl and use the profit calculator to 
      immediately see how much your project will cost, and how much you’ll earn.
      </p>
      <div class="hand-line"></div>
    
      <div class="vinyl-content">
      
      <img src="https://th.bing.com/th/id/R.9db01c40a777b06b3a34bba9318c0cec?rik=xy6esJGuRIejpQ&riu=http%3a%2f%2fversosperfectos.com%2fuploads%2falbum%2fcover%2f11948%2fmedium_4_DILLA_Vol._1_-_5_Cookin_Soul.jpg&ehk=sIfz73vwKzHtn%2bj4Ple61lRTcaNQhVDQavnYCK1UMGo%3d&risl=&pid=ImgRaw&r=0" alt="Album Cover" class="album"/>
      <img src={vinly} alt="Vinyl Record" class="vinyl"/>
    </div>

    <div class="dollar-icon">$</div>
    <div className='button-container'>
      <button className='button'>TRY IT NOW</button>
    </div>
    <div>

<footer class="footer">
  <div class="footer-container">

    <div class="footer-column">
      <h3>FOR ARTISTS</h3>
      <ul>
        <li><a  href="#">Why Qrates?</a></li>
        <li><a href="#">Crowdfunding</a></li>
        <li><a href="#">Press & Sell</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">Artist Toolkit</a></li>
        <li><a href="#">Referral Program</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>FOR FANS</h3>
      <ul>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Records</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Lists</a></li>
        <li><a href="#">Artists & Labels</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>OUR COMPANY</h3>
      <ul>
        <li><a href="#">About Qrates</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Partners</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>HELP</h3>
      <ul>
        <li><a href="#">Support Center</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Shipping </a></li>
      </ul>
    </div>


  </div>


</footer>


    </div>
<div class="footer-container2">

    <div class="footer-left">
      <div class="logo">
        <img src={logo} alt="QRATES Logo" />
      </div>
      <div class="footer-text">
        <h2 class="footer-title">QRATES</h2>
        <p>MUSIC IN<br />YOUR HANDS</p>
      </div>
    </div>


    <div class="footer-right">
      <div class="social-icons">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>
    </div>

    <div class="footer-center">
      <a href="#">Terms of Service</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Legal Information</a>
      <span>© TDMS Inc.</span>
    </div>
  </div>
        

        
    
    </div>
 



  )
}
