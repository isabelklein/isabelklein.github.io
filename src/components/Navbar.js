import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import About from './About.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
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
        <BrowserRouter>

            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/project1" component={Project1} />
             <Route path="/project2" component={Project2} />
             <Route path="/project3" component={Project3} />
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

        </BrowserRouter>);
    }
}
 

export default Navbar;