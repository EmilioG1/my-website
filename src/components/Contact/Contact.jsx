import React, { useRef, useState } from 'react';
import "./Contact.css";
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../Footer/Footer.jsx';

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [clearName, setClearName] = useState('');
  const [clearSubject, setClearSubject] = useState('');
  const [clearEmail, setClearEmail] = useState('');
  const [clearMessage, setClearMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyhlo3q', 'template_5i292ae', formRef.current, 'oUknFYxSz6-a5OaQf')
      .then((result) => {
        console.log(result.text);
        setDone(true);
        setClearName('');
        setClearSubject('');
        setClearEmail('');
        setClearMessage('');
      }, (error) => {
        console.log(error.text);
        alert("Message Failed to Send");
      });
  }

  return (
    <div className='c' id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <EmailIcon fontSize='large' />
              <span className='c-info-span'>emiliog1184@gmail.com</span>
            </div>
            <div className="c-info-item">
              <PlaceIcon fontSize='large' />
              <span className='c-info-span'>Portland, OR</span>
            </div>
            <div className="c-info-item">
              <LinkedInIcon fontSize='large' />
              <span className='c-info-span'><a href="https://www.linkedin.com/in/emilio-gonzales/" target="_blank" rel="noreferrer">LinkedIn</a></span>
            </div>
            <div className="c-info-item">
              <GitHubIcon fontSize='large' />
              <span className='c-info-span'><a href="https://github.com/EmilioG1" target="_blank" rel="noreferrer">GitHub</a></span>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <strong>It's nice to meet you!</strong> Please feel free to reach out and get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <input type="text" placeholder='Name' name='user_name' onChange={e => setClearName(e.target.value)} value={clearName}/>
            <input type="text" placeholder='Subject' name='user_subject' onChange={e => setClearSubject(e.target.value)} value={clearSubject}/>
            <input type="text" placeholder='Email' name='user_email' onChange={e => setClearEmail(e.target.value)} value={clearEmail}/>
            <textarea name="message" placeholder='Message' rows="10" onChange={e => setClearMessage(e.target.value)} value={clearMessage}></textarea>
            <button className='i-submit'>SUBMIT</button>
            {done && "Thank you! Message Sent"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact