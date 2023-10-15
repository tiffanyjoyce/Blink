import React from 'react'
import logo from '../images/blink.jpg'
import jerome from '../images/jerome.jpg'
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='logo-container'>
        <h1 className='blink'>BLINK</h1>
        <img className='logo' src={logo}/>
            <h1 className='logo-title'>
                OF AN EYE
            </h1>
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