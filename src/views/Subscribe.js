import React, { Component } from 'react'
import "./Subscribe.css"
import { useState } from 'react';

function Subscribe() {
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
      <div>
         <form onSubmit={handleSubmit} className='bottom'>
                    <p>Want to stay updated? Subcribe to our newsletter.</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="sub-input input input-bordered w-full max-w-xs" />
                    <button type='submit' className='subscribe-button btn'>Subscribe</button>
                    {errorMessage && <p className='error'>{errorMessage}</p>}
                    {successMessage && <p className='success'>{successMessage}</p>}
                </form>
      </div>
    )
  }

export default Subscribe;
