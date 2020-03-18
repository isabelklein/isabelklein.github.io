import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import About from './About.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './home.js';
import Fade from 'react-reveal/Fade';
import data from '../data'

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
            {/* <Route path="/project3" component={Project3} /> */}

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