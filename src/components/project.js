import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Project1 from '../projects/project1.js';
import Project2 from '../projects/project2.js';
import Project3 from '../projects/project3.js';
import Project4 from '../projects/project4.js';

class Project extends Component {
    state = {  }

    render() { 
        return ( 
        <BrowserRouter>

            <Route exact path="/project1" component={Project1} />
            <Route path="/project2" component={Project2} />
            <Route path="/project3" component={Project3} />
            <Route path="/project4" component={Project4} />
            
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

// class Project extends Component {
//     state = {  }

//     render() { 
//         return (          
//             <Fade bottom>
//             <div className='project'>
//             <a href='/Users/isabelklein/Documents/Github/Portfolio/src/projects/project1.html'>
//                 <img src={this.props.imageSrc} alt={this.props.title}></img>
//             </a>
//             </div> 
//             </Fade>
//         );
//     }
// }
 
export default Project;