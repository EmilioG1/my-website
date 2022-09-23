import React from 'react'
import './Intro.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import kodi from '../../img/kodi-outline.png';


function Intro() {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className="i-left-wrapper">
          <h2 className='i-intro'>hello, my name is</h2>
          <h1 className='i-name'>Emilio Gonzales</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                Web Developer
              </div>
              <div className="i-title-item">
                Software Developer
              </div>
              <div className="i-title-item">
                UI/UX Designer
              </div>
            </div>
          </div>
          <p className="i-desc">
            I am a budding web and software developer focused on user-centered design.
          </p>
        </div>
      <KeyboardArrowDownIcon className='i-scroll' fontSize='large' color='primary' />
      </div>
      <div className='i-right'>
        <div className="i-bg"></div>
        <img src={kodi} alt="kodi" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;