import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter, Route} from 'react-router-dom'; 
import Project1 from '../projects/project1.js';
import Project2 from '../projects/project2.js';
import Project3 from '../projects/project3.js';
// import Project4 from '../projects/project4.js';

class Project extends Component {
    state = {  }

    render() { 
        return ( 
        // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>

            <Route exact path="/TreatmentCompanion" component={Project1} />
            <Route exact path="/UWConnect" component={Project2} />
            <Route exact path="/WTA" component={Project3} />
            {/* <Route path="/project4" component={Project4} /> */}
            
            <Fade bottom>
            <div className='thumbnail'>
            <a href={this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>

            </div> 
            </Fade>
            
        </BrowserRouter>
        );
    }
}
 
export default Project;