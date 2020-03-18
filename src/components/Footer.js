import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';

class Footer extends Component {
    state = {  }
    render() { 
        return (  <div>
        <Fade bottom>
            <span className='footer'> © 2020 Isabel Klein • Website Created with React 
            <div className='icon'>
                <a href='mailto:isabelmklein@outlook.com'><img src={email} alt='email'></img></a>
                <a href='https://linkedin.com/in/isabelmklein' rel="noopener noreferrer" target="_blank"><img src={linkedin} alt='linkedin'></img></a>
            </div></span>
        </Fade>
        </div>
        );
    }
}
 
export default Footer;