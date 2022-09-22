import React from 'react';
import Project from '../Project/Project';
import "./ProjectList.css";
import { projects } from "../../Data";

function ProjectList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
          A few choice projects
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList;