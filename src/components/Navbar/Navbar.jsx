import React from 'react';
import './Navbar.css';
import letterE from '../../img/letterE.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='nav'>
      <img className='n-img' src={letterE} alt="the letter e" />
      <ul className='n-ul'>
        <CustomLink className="n-link" to='/'>Home</CustomLink>
    
        <CustomLink className="n-link" to='/about'>About</CustomLink>
    
        <CustomLink className="n-link" to='/projects'>Projects</CustomLink>

        <CustomLink className="n-link" to='/contact'>Contact</CustomLink>

        <CustomLink className="n-link" to='/resume'>Resume</CustomLink>
      </ul>
    </nav>
  )
}

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;