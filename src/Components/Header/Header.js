import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='header'>
    <div className='head'>
  <Link to={'/1'}><button className='buttons'>Newyork</button></Link>      
  <Link to={'/2'}><button className='buttons'>Mumbai</button></Link> 
  <Link to={'/3'}><button className='buttons'>Paris</button></Link> 
  <Link to={'/4'}><button className='buttons'>London</button></Link> 
        <div/>
        </div>
    </div>
    </>
  )
}

export default Header