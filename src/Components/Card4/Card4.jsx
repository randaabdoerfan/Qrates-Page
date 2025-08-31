import React from 'react'
import img1 from '../../Assests/img/airpods.png'
import img2 from '../../Assests/img/bag.png'
import img3 from '../../Assests/img/cream.png'
import img4 from '../../Assests/img/iphone.png'
import img5 from '../../Assests/img/watch.png'
import './Card4.css'
export const Card4 = () => {
  return (
    <div className='container1'>
    <div className='grid' >
        <img className='img3' src={img1} alt=''/>
        <div className='grid2'>
        <div className='grid3'>
        <img className='img2' src={img2} alt=''/>
        <img className='img2' src={img3} alt=''/>
        </div>
        <div className='grid3'>
        <img className='img2' src={img4} alt=''/>
        <img className='img2' src={img5} alt=''/>
        </div>
        </div>
        </div>
        <div class="artists-row">
          <p><a href="#">CHILLED COW</a> IS ON QRATES</p>
          <p><a href="#">SOL</a> IS ON QRATES</p>
          <p><a href="#">VULFPECK</a> IS ON QRATES</p>
        <p><a href="#">CHILLHOP</a> IS ON QRATES</p>
    </div>
    </div>
  )
}
