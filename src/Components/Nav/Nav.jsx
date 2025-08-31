import React from 'react'
import logo from '../../Assests/Q.png'
import './Nav.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
  return (
    <div className='nav'>


    <div className='img'><img alt='' src={logo}></img></div>
    <div className='content' >
        <Link to='/'> DISCOVER</Link>
        <Link to='/'>SEARCH</Link>
        <Link to='/'>WHY QRATES</Link>
        <Link to='/'>CART</Link>
        </div>
        <div className='rightPart'>
          <Link to='/'>LOG IN</Link>
        
        <button>MAKE A RECORD</button>
        </div>

    </div>
  )
}
