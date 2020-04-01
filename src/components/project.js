import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { HashRouter, Route } from 'react-router-dom'; 
import Project1 from '../projects/project1.js';
import Project2 from '../projects/project2.js';
import Project3 from '../projects/project3.js';
// import Project4 from '../projects/project4.js';

class Project extends Component {
    state = {  }

    render() { 
        return ( 
        <HashRouter>

            <Route exact path={process.env.PUBLIC_URL + "/project1"} component={Project1} />
            <Route path={process.env.PUBLIC_URL + "/project2"} component={Project2} />
            <Route path={process.env.PUBLIC_URL + "/project3"} component={Project3} />
            {/* <Route path="/project4" component={Project4} /> */}
            
            <Fade bottom>
            <div className='thumbnail'>
            <a href={process.env.PUBLIC_URL + this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
            </div> 
            </Fade>
            
        </HashRouter>
        );
    }
}
 
export default Project;