import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Project1 from '../projects/project1.js';
import Project2 from '../projects/project2.js';
import Project3 from '../projects/project3.js';

class Project extends Component {
    state = {  }

    render() { 
        return ( 
        <BrowserRouter>

            <Switch exact path="/project1" component={Project1} />
            <Route path="/project2" component={Project2} />
            <Route path="/project3" component={Project3} />
            
            <Fade bottom>
            <div className='project'>
            <Link to={this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
                </Link>
            </div> 
            </Fade>
        </BrowserRouter>);
    }
}
 
export default Project;