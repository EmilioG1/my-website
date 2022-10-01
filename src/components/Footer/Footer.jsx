import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='f'>
      <footer>Copyright: Emilio Gonzales, <span>{new Date().getFullYear()}</span> ©</footer>
    </div>
  )
}

export default Footer