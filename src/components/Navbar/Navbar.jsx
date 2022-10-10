import React, {useState} from 'react';
import './Navbar.css';
import letterE from '../../img/letterE.png';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <nav className='navBar'>
      <img className='n-img' src={letterE} alt="the letter e" />
      {/* <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button> */}
      <ul className={`n-ul ${navbarOpen ? " showMenu" : ""}`}>
        <a className='n-link' href='#intro'>Home</a>
        <a className='n-link' href='#about'>About</a>
        <a className='n-link' href='#projects'>Projects</a>
        <a className='n-link' href='#resume'>Resume</a>
        <a className='n-link' href='#contact'>Contact</a>
      </ul>
    </nav>
  )
}

export default Navbar;