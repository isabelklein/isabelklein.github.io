import React, { Component } from 'react';
import Project from './project';
import data from '../data';

class Work extends Component {
    state = {  }
    render() { 
        return (<div className='work'>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;