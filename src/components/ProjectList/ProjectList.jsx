import React from 'react';
import Project from '../Project/Project';
import "./ProjectList.css";
import { projects } from "../../Data";

function ProjectList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Project List</h1>
        <p className="pl-desc">
          A few choice examples
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList;