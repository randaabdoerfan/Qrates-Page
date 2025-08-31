import React from 'react'
import './Card3.css'
import cd1 from '../../Assests/watch.png'
import cd2 from '../../Assests/airpods.png'
export const Card3 = () => {
  return (
   <div className="page-grid2">
     <div className="left-side2">
        <div className='image-flex'>
        <img className="img1"  src={cd1} alt='CD1'/>
        <img className="img1"  src={cd1} alt='CD1'/>
        <img className="img1"  src={cd1} alt='CD1'/>
        </div>
                <div className='image-flex'>
        <img className="img1"  src={cd1} alt='CD1'/>
        <img className="img1"  src={cd1} alt='CD1'/>
        <img className="img1"  src={cd1} alt='CD1'/>
        </div>

       <p  className='start2'>RETAIL NETWORK</p>
       <h2>Worldwide distro,<br/> demystified.</h2>    
       <p className='content2'><b>Get direct access to over 150 of our retail partners across the globe. </b></p>
       
     </div>
   
     <div className="right-side2">
        <img className="img" src={cd2} alt="CD2"/>
        <p  className='start2'>CUSTOMER SUPPORT</p>
       <h2>Here to help,<br/>whenever you need it.
       </h2>
       <p className='content2'><b>Whether youre an artist in the middle od product , or  a fan with questions about your orderm our team is here to help.</b></p>


     </div>
   
   
     <div className='end-card2'>
        <p  className='start2'>COMMUNITY</p>
       <h3 className='left2'>Join a growing community.</h3>
       <p className='content2'><b>We re building a home for the next generation  of vinyl lovers. <br/>Get in the front f fans, connect with artist ,labels and stores.</b></p>
       <button className='btn2'>BROWSE ARTISTS</button>
     </div>
     </div>
  )
}
