import React from 'react'
import { Button } from './Button'
import './../App.css'
import './FrontPage.css'

const FrontPage = () => {
  return (
    <div className='frontPage-container'>
        <video src='./William-Portfolio/videos/video-4.mp4' autoPlay loop muted/>
        <h1>Hi! I'm William Nie! </h1>
        <p>Welcome to my site!</p>
        <span class="auto-type"> </span>
        <div className='frontPage-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Check out who I am!</Button>
        </div>
    </div>
  )
}

export default FrontPage