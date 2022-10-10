import React from 'react';
import "./About.css";
import MeBG from '../../img/me-bg.png';
import Skills from '../Skills/Skills';

function About() {
  return (
    <div className='a' id='about'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={MeBG} alt="Me" className='a-img' />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a developer based out of Portland, OR with an interest in front-end, clean, and user-focused development and design.
        </p>
        <p className="a-desc">
          After stints in sports media and, most recently, the brewing industry, I decided to change career paths and dive into web and software development. If I'm not programming I'm likely spending time with my dog.
        </p>
        <div className="a-skill-list">
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default About