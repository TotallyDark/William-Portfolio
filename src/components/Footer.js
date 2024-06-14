import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Thank you for stopping by my website! 
            </p>
            <p className='footer-subscription-text'>
                {"Feel free to shoot me an email! :)"}
            </p>

        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact Me</h2>
                    <Link>25wnie@athenian.org</Link>
                    <Link>william2007nie@gmail.com</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>My Socials</h2>
                    <div className='social-icons'>

                    <a className='social-icon-link linkedin' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/william-nie-868433276/' 
                    aria-label='Linkedin'> <i className='fa-brands fa-linkedin'></i>
                    </a>

                    <a className='social-icon-link instagram' rel='noreferrer' target='_blank' href='https://www.instagram.com/this_is_wilam/' 
                    aria-label='Instagram'> <i className='fab fa-instagram'></i>
                    </a>
    
                </div>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <small className='website-rights'>
                    WILLIAM NIE @ 2024
                </small>
            </div>
        </section>
    </div>
  )
}

export default Footer