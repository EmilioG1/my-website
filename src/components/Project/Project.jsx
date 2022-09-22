import React from 'react';
import "./Project.css";

function Project({img,link,name}) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="project" className="p-img" />
      </a>
      <p>{name}</p>
    </div>
  )
}

export default Project;