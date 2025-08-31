import React from 'react'
import './Card2.css'
import man from '../../Assests/iphone.png'
export const Card2 = () => {
  return (
    <div className='card2'>
      <div className='left'>
        <p  className='start'>OUR SRVICES</p>
        <div className='footer-text'>
        <h2 className='footer-title'>YOU MAKE MUSIC. <br/>WE DO THE REST.</h2>
        </div>
        
        <img  src={man} alt=''/>
        
        <p className='p'>We want you to be able toput all enargy into the craetive side of making music.
           So created a one-stop for everything side</p>
           <button className='btn'>LEARN MORE</button>
           </div>
           <div className='right'>
            <table>
              <thead>
              <th>Making Records</th>
              </thead>
              <tbody>
              <tr>Design & Customization</tr>
              <tr>Mastering</tr>
              <tr>Artwork Assistance</tr>
              <tr>Pressing</tr>
              </tbody>
              <thead>
              <th>Storage & Distribution</th>
              </thead>
              <tbody>
              <tr>Free Storage</tr>
              <tr>Shop</tr>
              <tr>Digital Downloads</tr>
              <tr>Retails Distributions</tr>
              </tbody>
              <thead>
              <th>Support</th>
              </thead>
              <tbody>
              <tr>Custome Support</tr>
              <tr>Artist Support</tr>
              </tbody>
            </table>

           </div>
           </div>
  )
}
