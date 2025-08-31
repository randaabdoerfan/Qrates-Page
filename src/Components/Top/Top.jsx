import React from 'react'
import './Top.css'
import top1 from '../../Assests/top1.jpg'
import top2 from '../../Assests/top2.jpg'
import circle from '../../Assests/circle.jpg'
export const Top = () => {
  return (

        <div className="container">

    <div className="text">
      <div className='flex'>
        <div className='flex-content'>
      <p className='change'>WHY QRATES</p>
      <h2>Your music on <br/>vinyl.<br/> Without the <br/> barriers.</h2>
      <p>
        Full-service pressing, a global retail network, customer support — and 
        you keep up to 85% of profits.
      </p>
      </div>
       <div className="images1">
      <img className="bg-img" src={top1} alt="Vinyl Cover 1"/>
      </div>
      </div>
      <div className="images2">
      <img className="overlay-img" src={top2} alt="Vinyl Cover 2"/>
    </div>
    <div className="circle-img">
      <img src={circle} alt='' className='circle'/>
    <p>
      OVER $1 MILLION PAID TO ARTISTS
    </p>
    </div>
    <div className='bottom'>
    <div className='hr'></div>
    <p>
No matter where you're at in your career, we've got a production model to suit you.</p>
</div>
  </div>
    </div>
  )
}
