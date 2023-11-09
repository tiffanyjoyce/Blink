import React from 'react'
import logo from '../images/blink.jpg'
import logo2 from '../images/cropped-blink.PNG'
import jerome from '../images/jeromeoutline2.PNG'
import bg1 from '../images/blackwaves.jpeg'
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
                <img className='logo' src={logo} />
            </div>
            <div className='jerome-container'>
            <div className='image-container'>
                    <img className='jerome-image' src={jerome}></img>
                    <h1 className='name-text'>JEROME K. MILLER</h1>
                    </div>
            
                {/* <div className='top-container'>
                    <div className='image-container'>
                    <img className='jerome-image' src={jerome}></img>
                    </div>
                    <div className='writing'>
                        <div className='actor'>
                        <h2>Actor. Director. Producer. Story-Teller</h2>
                        </div>
                    <div className='about'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    </div>
                </div>
                <div className='jkm'>
                    <h1>JEROME K. MILLER</h1>
                </div> */}
            </div>
            <div className='features-container'>
                <div className='left-container'>
                    <div className='leaving'>
                        <p className='upper-t'>"Leaving It All Behind"</p>
                        <p className='lower-t'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className='cry'>
                        <p className='upper-t'>"Cry"</p>
                        <p className='lower-t'>A short film that captures the essence of cherishing life's vital elements - be it relationships, pivotal moments, or personal achievements. It serves as a poignant reminder to embrace these treasures, as neglecting them could lead to losing oneself and the valuable people in one's life. Ultimately, the film emphasizes the significance of not taking life's essentials for granted, highlighting the ease with which everything crucial can slip away in the blink of an eye</p>
                    </div>
                    <div className='brothers'>
                        <p className='upper-t'>"Brothers, Can You Hear Me?"</p>
                        <p className='lower-t'>A short film portraying the harrowing reality of the school-to-prison pipeline, this film sheds light on how African-American males become primary targets within the systemic structure of the United States. It delves into the repercussions faced by these individuals; without access to proper education and opportunities to make positive choices, they risk being ensnared within America's prison system, unfairly labeled as criminals</p>
                    </div>
                    <div className='brothers'>
                        <p className='upper-t'>"Brothers, Can You Hear Me?"</p>
                        <p className='lower-t'>A short film portraying the harrowing reality of the school-to-prison pipeline, this film sheds light on how African-American males become primary targets within the systemic structure of the United States. It delves into the repercussions faced by these individuals; without access to proper education and opportunities to make positive choices, they risk being ensnared within America's prison system, unfairly labeled as criminals</p>
                    </div>
                </div>
                <h1 className='features'>Features</h1>
                <div className='right-container'>
                    <div className="sheen card w-96 bg-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Sheen Magazine</h2>
                            <p>Introducing Producer, Actor, Director Jerome K. Miller</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="hoh1 card w-96 bg-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Heart of Hollywood Magazine</h2>
                            <p>Inspiration Spotlight</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                    <div className="hoh2 card w-96 bg-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Heart of Hollywood Magazine</h2>
                            <p>13 Great Ways to Prepare Before Your Next Audition</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;