import React from 'react'
import './Card.css'
import cd1 from '../../Assests/cd1.png'
import cd2 from '../../Assests/cd2.png'
export const Card = () => {
  return (
  <div className="page-grid">
  <div className="left-side">
    <p  className='start'>NO RISK, NO WASTE</p>
    <h2>Crowdfunding</h2>    
    <p className='content'><b>Rally your fans and gather pledges. Press the exact number of records you need, without having to pay anything upfront.</b></p>
    <img className="img" src={cd2} alt="CD2"/>
    <button className='btn'>LEARN MORE</button>
  </div>

  <div className="right-side">
        <p  className='start'>GET INTO IT</p>
    <h2>Press & Sell</h2>
    <p className='content'><b>Launch your record, sooner. Take pre-orders from fans and we'll take care of the rest.</b></p>
    <img className="img"  src={cd1} alt='CD1'/>
    <button className='btn'>LEARN MORE</button>
  </div>


  <div className='end-card'>
    <h3 className='left'>Just after straight up vinyl pressing? We do that too. Records are shipped in bulk to wherever you need.</h3>
    <span className='right'>START A PRESS ONLY PROJECT</span>
  </div>
  </div>

  
  )
}
