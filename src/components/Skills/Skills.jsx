import React from 'react';
import html from '../../img/html.png';
import css from '../../img/css.png';
import javascript from '../../img/javascript.png';
import node from '../../img/node.png';
import react from '../../img/react.png';
import github from '../../img/github.png';
import firebase from '../../img/firebase.png';
import rails from '../../img/rails.png';
import ruby from '../../img/ruby.png';
import './Skills.css';

function Skills() {
  return (
    <div className="s-skill">
      <img src={html} alt="skill" className='s-img' />
      <img src={css} alt="skill" className='s-img' />
      <img src={javascript} alt="skill" className='s-img' />
      <img src={react} alt="skill" className='s-img' />
      <img src={node} alt="skill" className='s-img' />
      <img src={ruby} alt="skill" className='s-img' />
      <img src={rails} alt="skill" className='s-img' />
      <img src={github} alt="skill" className='s-img' />
      <img src={firebase} alt="skill" className='s-img' />
    </div>
  )
}

export default Skills