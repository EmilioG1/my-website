import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div id='resume'>
      <h1 id="name">Emilio Gonzales</h1>
        <p id="info"><strong>Email:</strong> <a href="mailto:emiliog1184@gmail.com">emiliog1184@gmail.com</a> | <strong>Phone:</strong> 916-601-4437</p>
        <div id="r-container">
        <div id="r-left">
          <div id="bio">
            <h2>About Me</h2>
            <p>Highly-motivated Web/Software Developer with a focus on user-centered design. Looking forward to putting my skillset to use at a great company.</p><br/>
          </div>
          <div id="exp"><br/>
            <h2>Applicable Experience</h2>
            <h3><strong><a href="https://opineschool.com/" target="_blank" rel='noreferrer'>Opine</a></strong></h3>
            <p><em>Front End Developer, September 2022 - Ongoing</em></p>
            <li>
              Working in React.js, Firebase/Firestore, and Material UI.
            </li>
            <li>
              Write production-ready code used in final product. 
            </li>
            <li>
              Helped to create Exhibits component used for adding images and documents.
            </li>
            <li>
              Created Settings component for optional Dyslexia font and other thoughtful design implementations.
            </li>
            <li>
              Added Random Name Generator component to add optional annonymity to classroom discourse.
            </li><br/>
          </div>
          <div id="ed"><br/>
            <h2>Education</h2>
            <p><strong>Epicodus</strong>
            <br/><em>Full Stack Development</em>
            <br/><a href="https://epicenter.epicodus.com/certificate" target="_blank" rel='noreferrer'>Certificate of Completion</a></p>
            <p><strong>Univeristy of Oregon</strong>
            <br/><em>Bachelors of Arts, History</em></p>
          </div>
        </div>
        <div id="r-right">
          <div id="r-links">
            <li>
              <a href="https://www.emiliog.com/" target="_blank" rel='noreferrer'>My Personal Website</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emilio-gonzales/" target="_blank" rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/EmilioG1" target="_blank" rel='noreferrer'>GitHub</a>
            </li>
          </div>
          <div id="proj">
            <h2>Personal Projects</h2>
            <li>
              <p>
              <a href="https://github.com/EmilioG1/all-tails" target="_blank" rel='noreferrer'>All Tails</a><br/>
              A dog-friendly hiking compendium used to store hiking trails for you and your furry best friends. Built in React with Firestore/Firebase. Created for my capstone project.
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/EmilioG1/marios-fine-foods" target="_blank" rel='noreferrer'>Mario's Fine Foods</a><br/>
                Website for a fictional grocery store utilizing Ruby on Rails, authentication, and authorization.
              </p>
            </li>
            <li>
              <p>
                <a href="https://emiliog1.github.io/pig-dice/" target="_blank" rel='noreferrer'>Pig Dice</a><br/>
                App that allows one-to-two users to play the game pig dice. Uses JavaScript, HTML, CSS, and a classic Nintendo CSS
                framework.
              </p>
            </li><br/>
          </div><br/>
          <h2>Skills/Technologies</h2>
          <div id="r-skills">
            <div id="front-end">
              <h3>FrontEnd</h3>
              <li id="s-li">HTML</li>
              <li id="s-li">CSS</li>
              <li id="s-li">JavaScript</li>
              <li id="s-li">React</li>
              <li id="s-li">jQuery</li>
              <li id="s-li">Bootsrap</li>
              <li id="s-li">MaterialUI</li>
            </div>
            <div id="back-end">
              <h3>BackEnd</h3>
              <li id="s-li">Ruby</li>
              <li id="s-li">Rails</li>
              <li id="s-li">Firebase</li>
              <li id="s-li">mySQL</li>
            </div>
            <div id="tools">
              <h3>Tools</h3>
              <li id="s-li">Git/GitHub</li>
              <li id="s-li">Jest</li>
              <li id="s-li">Rspec</li>
              <li id="s-li">Capybara</li>
              <li id="s-li">CLI</li>
              <li id="s-li">Photoshop</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume