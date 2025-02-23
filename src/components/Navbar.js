import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton)

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Will Nie
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
              <li className='nav-item'>
              <div className='nav-links' onClick={() => {
                  const element = document.getElementById('home');
                  element?.scrollIntoView({
                    behavior:'smooth'
                  })
                }}>
                  Home
                </div>
              </li>
              <li className='nav-item'>
                <div className='nav-links' onClick={() => {
                  const element = document.getElementById('test');
                  element?.scrollIntoView({
                    behavior:'smooth'
                  })
                }}>
                  Projects
                </div>
              </li>
              <li className='nav-item'>
                <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                  Blogs
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about-me' className='nav-links-mobile' onClick={closeMobileMenu}>
                  About Me
                </Link>
              </li>
            </ul>
            
            {button && <Button buttonStyle='btn--primary'>About Me</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar