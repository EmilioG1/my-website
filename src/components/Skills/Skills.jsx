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
import photoshop from '../../img/photoshop.png';
import './Skills.css';

function Skills() {
  return (
    <div className="s-skill">
      <img src={html} alt="html" className='s-img' />
      <img src={css} alt="css" className='s-img' />
      <img src={javascript} alt="javascript" className='s-img' />
      <img src={react} alt="react" className='s-img' />
      <img src={node} alt="node" className='s-img' />
      <img src={ruby} alt="ruby" className='s-img' />
      <img src={rails} alt="rails" className='s-img' />
      <img src={github} alt="github" className='s-img' />
      <img src={firebase} alt="firebase" className='s-img' />
      <img src={photoshop} alt="photoshop" className='s-img' />
    </div>
  )
}

export default Skills