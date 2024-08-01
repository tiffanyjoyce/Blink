import React, { Component } from 'react'
import "./About.css"

export class About extends Component {
  render() {
    return (
      <div>
        <div className='about-page'>
            <h1 className='about-header'>About</h1>
            <div className='about-container'>
                <div></div>
                <div></div>
                <div></div>
                <div className='inspiration'>
                    <h2 className='inspiration-t'>Inspiration</h2>
                    <p className='inspiration-p'>The legendary Spike Lee, with 40 acres and a mule created not only a production company, but a platform, where art was idiosyncratic to many, yet, relatable to few, such as myself. The blueprint that he provided is one that I followed and studied, with the inspiration to one day create something as such. Since, Spike Lee, there haven’t been many if any, artists who create art which encompass innuendos, outcasted projects, thought provoking topics, and longevity. That is where the inspiration behind Blink of An Eye stems. </p>
                </div>
                <div className='story'>
                    <h2 className='story-t'>Story</h2>
                    <p className='story-p'>In life, the objective should be to create something that you can leave behind. Not only leave behind, but something that people will remember, relate to, cope with, & utilize as a getaway for them to seek peace, love, and joy while living in this world. From my perspective, one of the few ways that can be achieved is through art, as it’s a space where one can express themselves, not be judged, and be free, to be themselves. Through art, my part, is to assist in creating that because art has become lost, and with Blink of Any Eye, I’m creating a platform where it will be revived for the masses. </p>
                </div>
                <div className='vision'>
                    <h2 className='vision-t'>Vision</h2>
                    <p className='vision-p'>You know there is a saying, and it states; top of mind, mean tip of the tongue. Essentially, the objective is to create something that act as a reminder to keep people talking. The idea, behind Blink of An Eye, stemmed from creating a distinguished concept to correlating it in conjunction with art that will be everlasting and leave an effect on people past the duration of my life.</p>
                </div>

            </div>

        </div>
      </div>
    )
  }
}

export default About
