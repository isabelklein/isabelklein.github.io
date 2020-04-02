import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import About from './About.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import Home from './home.js';
import Fade from 'react-reveal/Fade';
import data from '../data'

import Project1 from '../projects/project1.js';
import Project2 from '../projects/project2.js';
import Project3 from '../projects/project3.js';
import Project4 from '../projects/project4.js';

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (
        <Router basename={process.env.PUBLIC_URL}>

            <Route path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/TreatmentCompanion" component={Project1} />
            <Route path="/UWConnect" component={Project2} />
            <Route path="/WTA" component={Project3} />
            <Route path="/project4" component={Project4} />

        <div>
        <nav>  
            <ul>
            <div>
                <h1><Fade bottom cascade>{data.name}</Fade></h1>
            </div>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Portfolio</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="/About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><a
                    className='link'
                    href="https://drive.google.com/file/d/1QxxnyexNA7lbzrygAExj9R67j87IGpzD/view?usp=sharing"
                    rel="noopener noreferrer" 
                    target="_blank"
                >Resume</a></li>
            </ul>
        </nav>
        </div>

        </Router>);
    }
}
 

export default Navbar;