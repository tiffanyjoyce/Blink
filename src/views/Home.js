import React from 'react'
import logo from '../images/blink.jpg'
import jerome1 from '../images/jerome1.JPEG'
import jerome2 from '../images/jerome2.JPEG'
import black from "../images/0e0e0e.png"
import './Home.css'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaAngleDown } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const { ref: meetRef, inView: meetInView } = useInView();
    const { ref: romeRef, inView: romeInView } = useInView();
    const { ref: comingRef, inView: comingInView } = useInView();

    const apiKey = process.env.REACT_APP_API_TOKEN;
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await fetch(
                "https://connect.mailerlite.com/api/subscribers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        Authorization: `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        email: email,
                        groups: ["127154008536123269"]
                    })
                }
            )
            const data = await response.json();
            console.log(data);

            if(data.errors){
                setErrorMessage(data?.message)
                return;
            }

            setSuccessMessage("Thank you for Subscribing!")
            
        } catch (error){
            console.error(error)
            setErrorMessage("Failed to subscribe. Please try again.")

        }
    }
    return (
        <div className='home-container'>
            <div className='logo-container'>
                <img className="logo" src={logo} />
                <div className='logo-title'>
                    blink
                </div>
                <div className='logo-title1'>A creative art company that specializes in filmmaking (directing, writing, screenwriting & producing), artistic direction & creative story-telling.</div>
                <div className='logo-title2'>
                    of an eye
                </div>
                <FaAngleDown className='down-arrow' />
                {/* <img className='logo' src={logo} /> */}
            </div>
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
            <div className='jerome-container'>
                <div className='image-container'>
                    <img className='jerome-image1' src={jerome1}></img>
                    <img className='jerome-image2' src={jerome2}></img>
                </div>
                <p className={`${'meet'} ${meetInView ? 'animateMeet' : ''}`} ref={meetRef}>Meet the Founder</p>
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
            <div className='outside-container'>
                <div className='next-container'>
                    <p ref={romeRef} className={`${'rome'} ${romeInView ? 'animateName' : ''}`}>Jerome K. Miller</p>
                    <div className='text-changer'>
                        <p className='titles'>
                            <span className='role'>Actor.</span>
                            <span className='role'>Producer.</span>
                            <span className='role'>Director.</span>
                            <span className='role'>Writer.</span>
                            <span className='role'>Creator.</span>
                            </p>
                            </div>
                    <p className='bio'>When I'm not acting in productions like "Cry", "Brothers’ Can you Hear me", or "1765 Cascade", you can catch me engaging in the creative aspects of storytelling. I delve into directing, producing, writing, narrating, and acting, as I did in documentaries like "Leaving it All Behind" and short films like "Therapy". Essentially, I'm an artist driven to master the art of interweaving these creative threads.</p>

                </div>
            </div>
            <div className='features-container'>
                {/* <div className='accordian-container'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                "Cry", 2020
                            </div>
                            <div className="collapse-content">
                                <p>A short film that captures the essence of cherishing life's vital elements - be it relationships, pivotal moments, or personal achievements. It serves as a poignant reminder to embrace these treasures, as neglecting them could lead to losing oneself and the valuable people in one's life. Ultimately, the film emphasizes the significance of not taking life's essentials for granted, highlighting the ease with which everything crucial can slip away in the blink of an eye</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                "Leave it all Behind", 2020
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                "Brothers, Can You Hear Me?", 2019
                            </div>
                            <div className="collapse-content">
                                <p>A short film portraying the harrowing reality of the school-to-prison pipeline, this film sheds light on how African-American males become primary targets within the systemic structure of the United States. It delves into the repercussions faced by these individuals; without access to proper education and opportunities to make positive choices, they risk being ensnared within America's prison system, unfairly labeled as criminals.</p>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className='phone-container'>
                    <div className="mockup-phone border-black">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">Hi.</div>
                        </div>
                    </div>
                </div> */}
                <h1 className='features'>Features</h1>
                <Carousel className='hmm' fade>
                    <Carousel.Item>
                        <img src={black} />
                        <Carousel.Caption className='idk'>
                            <h3>"Cry", 2020</h3>
                            <p>A short film that captures the essence of cherishing life's vital elements - be it relationships, pivotal moments, or personal achievements. It serves as a poignant reminder to embrace these treasures, as neglecting them could lead to losing oneself and the valuable people in one's life. Ultimately, the film emphasizes the significance of not taking life's essentials for granted, highlighting the ease with which everything crucial can slip away in the blink of an eye</p>
                            <a href='https://www.youtube.com/watch?v=Bb8-zSyKhBc'><button className='watch btn'>Watch</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={black} />
                        <Carousel.Caption className='idk'>
                            <h3>"Brothers, Can You Hear Me?", 2019</h3>
                            <p>A short film portraying the harrowing reality of the school-to-prison pipeline, this film sheds light on how African-American males become primary targets within the systemic structure of the United States. It delves into the repercussions faced by these individuals; without access to proper education and opportunities to make positive choices, they risk being ensnared within America's prison system, unfairly labeled as criminals.</p>
                            <a href='https://www.youtube.com/watch?v=TlZWgfEblvw'><button className='watch btn'>Watch</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={black}/>
                        <Carousel.Caption className='idk'>
                            <h3>Heart of Hollywood Magazine</h3>
                            <p>Jerome has earned himself two features in Heart of Hollywood Magazine:</p>
                            <p>"Inspiration Spotlight: Business Expert and Artist, Jerome K. Miller", 2023</p>
                            <a href='https://www.heartofhollywoodmagazine.com/post/inspiration-spotlight-business-expert-and-artist-jerome-k-miller'><button className='watch btn'>Read</button></a>
                            <p>"13 Great Ways to Prepare before Your Next Audition", 2023</p>
                            <a href='https://www.heartofhollywoodmagazine.com/post/13-great-ways-to-prepare-before-your-next-audition'><button className='watch btn'>Read</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={black}/>
                        <Carousel.Caption className='idk'>
                            <h3>Sheen Magazine</h3>
                            <p>"Introducing Producer, Actor, and Director Jeorme K. Miller", 2023</p>
                            <a href='https://www.sheenmagazine.com/introducing-producer-actor-and-director-jerome-k-miller/'><button className='watch btn'>Read</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={black}/>
                        <Carousel.Caption className='idk'>
                            <h3>The Eggcellent Life Podcast</h3>
                            <p>"True Happiness Comes With A Side Of Growing Pains", 2021</p>
                            <a href="https://podcasts.apple.com/us/podcast/the-eggcellent-life/id1506654969?i=1000516360151"><button className='watch btn'>Listen</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={black}/>
                        <Carousel.Caption className='idk'>
                            <h3>The Liberators Podcast</h3>
                            <p>"Episode 53: Mindset Needed to Excecl in Negative</p>
                            <a href='https://podcasts.apple.com/us/podcast/the-liberators-podcast/id1456011341?i=1000547145730'><button className='watch btn'>Listen</button></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <div className='carousel-box'>
                    <div className="thecarousel carousel">
                        <div id="slide1" className="item1 carousel-item relative w-full">
                            <h2 className='c-title'>"Cry", 2020</h2>
                            <p>A short film that captures the essence of cherishing life's vital elements - be it relationships, pivotal moments, or personal achievements. It serves as a poignant reminder to embrace these treasures, as neglecting them could lead to losing oneself and the valuable people in one's life. Ultimately, the film emphasizes the significance of not taking life's essentials for granted, highlighting the ease with which everything crucial can slip away in the blink of an eye</p>
                            <button className='watch btn'>Watch</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="item2 carousel-item relative w-full">
                            <h2 className='c-title'>"Brothers, Can You Hear Me?", 2019</h2>
                            <p>A short film portraying the harrowing reality of the school-to-prison pipeline, this film sheds light on how African-American males become primary targets within the systemic structure of the United States. It delves into the repercussions faced by these individuals; without access to proper education and opportunities to make positive choices, they risk being ensnared within America's prison system, unfairly labeled as criminals.</p>
                            <button className='watch btn'>Watch</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="item3 carousel-item relative w-full">
                            <h2 className='c-title'>"Leaving it All Behind", 2020</h2>
                            <p>A documentary chronicling the life of Jerome K. Miller, highlighting the adversities he overcame while growing up in Savannah, GA without a father. Despite the stacked odds against him, the film showcases his journey to break free from his neighborhood and hometown, shedding light on the traumas he faced and conquered.</p>
                            <button className='watch btn'>Watch</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="item4 carousel-item relative w-full">
                            <h2 className='c-title'>Heart of Hollywood Magazine</h2>
                            <p>Jerome has earned himself two features in Heart of Hollywood Magazine:</p>
                            <p>"Inspiration Spotlight: Business Expert and Artist, Jerome K. Miller", 2023</p>
                            <p>"13 Great Ways to Prepare before Your Next Audition", 2023</p>
                            <button className='watch btn'>Read</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="item5 carousel-item relative w-full">
                            <h2 className='c-title'>Sheen Magazine</h2>
                            <p>"Introducing Producer, Actor, and Director Jeorme K. Miller", 2023</p>
                            <button className='watch btn'>Read</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide6" className="item6 carousel-item relative w-full">
                            <h2 className='c-title'>The Eggcellent Life Podcast</h2>
                            <p>"True Happiness Comes With A Side Of Growing Pains", 2021</p>
                            <button className='watch btn'>Listen</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide7" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide7" className="item7 carousel-item relative w-full">
                            <h2 className='c-title'>The Liberators Podcast</h2>
                            <p>"Episode 53: Mindset Needed to Excecl in Negative</p>
                            <button className='watch btn'>Listen</button>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='comingsoon-container'>
                <div className='top'>
                    <p ref={comingRef} className={`${'comingsoon'} ${comingInView ? 'comingsoonAnimate' : ''}`}> Content Coming Soon</p>
                </div>
                <form className='bottom' onSubmit={handleSubmit}>
                    <p>Want to stay updated? Subcribe to our newsletter.</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="sub-input input input-bordered w-full max-w-xs" />
                    <button type="submit" className='subscribe-button btn'>Subscribe</button>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    {successMessage && <p className='success'>{successMessage}</p>}
                </form>
            </div>
            {/* <div className='features-container'>
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
            </div> */}
            {/* <div className='contact-container'>
                <h2 className="contact-title">Contact Us</h2>
                <p className='contact-subtitle'>Would you like to learn more about Blink of an Eye? Are you interested in working together? Fill out the information below and we will get back to you as soon as possible!</p>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="contact-card card-body">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name (required)</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name (required)</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email (required)</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Phone</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Message (required)</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <div className="card-actions justify-end">
                            <button className="contact-button btn">Send</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home;