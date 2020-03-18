import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class About extends Component {
    state = {  }
    render() { 
        return (<div><div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
                    <p>{data.abouttext2}</p> 
                    <button><a href='https://drive.google.com/file/d/1QxxnyexNA7lbzrygAExj9R67j87IGpzD/view?usp=sharing' rel="noopener noreferrer" target="_blank">Resume</a></button>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
        </div>
        </div>);
    }
}
 
export default About;