import React from 'react'
import man from '../../Assests/man.jpeg'
import './Card5.css'
export const Card5 = () => {
  return (
    
    <div className="page-grid1">
          <div className="left-side1">
            <p  className='start1'>ATRIST ON QURATES</p>
   
            <p className='content1'><b>
"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."
<p>-SOL</p></b></p>

      <div className="stepper">
      <div className="step active">1</div>
      <div className="step">2</div>

    </div>
          </div>
        
          <div className="right-side1" style={{backgroundImage: `url(${man})` }}>
            
             
            
          
    </div>
    </div>
  )
}
