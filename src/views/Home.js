import React from 'react'
import logo from '../images/blink.jpg'
import jerome from '../images/jerome.jpg'
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='logo-container'>
      <div className='logo-title'>
               <span>BLINK OF AN EYE</span>
            </div>
        <div className='logo-title title2'>
            <span> BLINK OF AN EYE</span>
        </div>
        <img className='logo' src={logo}/>
      </div>
      <div className='jerome-container'>
        <h2 className='jerome-title'>
            Jerome Miller
        </h2>
        <img className='jerome-img' src={jerome}/>
        <h3 className='jerome-headers'>Actor. Film Maker. Story-teller.</h3>
      </div>
    </div>
  )
}

export default Home;