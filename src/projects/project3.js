import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import header from '../images/project3/header.png'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
// import images from '../components/images.js';
import page1 from '../images/project3/1.png';
import page2 from '../images/project3/2.png';
import page3 from '../images/project3/3.png';
import page4 from '../images/project3/4.png';
import page5 from '../images/project3/5.png';
import page6 from '../images/project3/6.png';
import page7 from '../images/project3/7.png';
import page8 from '../images/project3/8.png';
import page9 from '../images/project3/9.png';
import page10 from '../images/project3/10.png';
import page11 from '../images/project3/11.png';
import page12 from '../images/project3/12.png';
import page13 from '../images/project3/13.png';
import page14 from '../images/project3/14.png';
import page15 from '../images/project3/15.png';
import page16 from '../images/project3/16.png';
// import page17 from '../images/project3/17.png';
import page18 from '../images/project3/18.png';
import page19 from '../images/project3/19.png';
import page20 from '../images/project3/20.png';
import page21 from '../images/project3/21.png';
import page22 from '../images/project3/22.png';
import currentLogo from '../images/project3/currentLogo.png';
import logo from '../images/project3/logo.png';
import sketchbook1 from '../images/project3/sketchbook1.png';
import sketchbook2 from '../images/project3/sketchbook2.png';
import logoIterations1 from '../images/project3/logoIterations1.png';
import logoIterations2 from '../images/project3/logoIterations2.png';


class Project3 extends Component {
    state = {}

    render() {
        return (
            <div className='project'>
                <Fade bottom>
                    <div className='project-header'>
                        <img src={header} alt='header'></img>
                    </div>
                </Fade>

                <div className='project-body'>
                    <Fade bottom>
                        <h1>Washington Trails Association Rebrand</h1>
                        <h2 style={{ fontSize: 1.7 + 'em', marginBottom: 2 + 'em' }}>Brand book and mobile site redesign</h2>
                    </Fade>
                    <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th style={{ width: 22 + 'em' }}>Background</th>
                            <th style={{ width: 11 + 'em' }}>My Role</th>
                            <th style={{ width: 5 + 'em' }}>Timeline</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>My task was to practice visual communication and branding skills through the planned rebranding, mobile site redesign, and creation of a brand book for Washington Trails Association (WTA). WTA is a Washington nonprofit dedicated to getting people outside. They provide information for online information for hikers and also build and maintain trails through a community of volunteers. This was a school project for HCDE308: Visual Communication in Human Centered Design.</td>
                                <td>
                                    <ul>
                                        <li>Logo Design</li>
                                        <li>Brand Voice</li>
                                        <li>Mobile Site Redesign</li>
                                        <li>Color, Typography, and Visual Guidelines</li>
                                        <li>Brand Book Layout Design</li>
                                    </ul>
                                </td>
                                <td>3 weeks</td>
                            </tr>
                        </tbody>
                    </table>

                    <table style={{marginTop: 5 + 'em', marginBottom: 5 + 'em'}}>
                        <td style={{ width: 30 + '%'}}>
                            <h2>The Brand Book</h2>
                            <p>This rebrand culminated in a 22-page brand book addressing organization voice, logo redesign, color, typography, digital design, and imagery.</p>
                            <p>See the brand book to the right, and scroll down for details on the design process.</p>
                        </td>

                        <td style={{ width: 70 + '%' }}>
                            <Carousel autoplay className='carousel'>
                                <div>
                                    {/* { images.map(({ id, src, alt}) => <img id={id} src={src} alt={alt} />)}  */}
                                    <img src={page1} alt='Cover'></img>
                                </div>
                                <div>
                                    <img src={page2} alt='Contents'></img>
                                </div>
                                <div>
                                    <img src={page3} alt='The Brand'></img>
                                </div>
                                <div>
                                    <img src={page4} alt='Purpose'></img>
                                </div>
                                <div>
                                    <img src={page5} alt='Brand Keywords'></img>
                                </div>
                                <div>
                                    <img src={page6} alt='Logo'></img>
                                </div>
                                <div>
                                    <img src={page7} alt='Logo Design'></img>
                                </div>
                                <div>
                                    <img src={page8} alt='Logo Usage'></img>
                                </div>
                                <div>
                                    <img src={page9} alt='Logo Donts'></img>
                                </div>
                                <div>
                                    <img src={page10} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page11} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page12} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page13} alt='Color'></img>
                                </div>
                                <div>
                                    <img src={page14} alt='Color Palette'></img>
                                </div>
                                <div>
                                    <img src={page15} alt='Color Usage'></img>
                                </div>
                                <div>
                                    <img src={page16} alt='Digital Design'></img>
                                </div>
                                {/* <div>
                                    <img src={page17} alt='Landing Page'></img>
                                </div> */}
                                <div>
                                    <img src={page18} alt='Mobile Site'></img>
                                </div>
                                <div>
                                    <img src={page19} alt='Mobile Site Details'></img>
                                </div>
                                <div>
                                    <img src={page20} alt='Imagery'></img>
                                </div>
                                <div>
                                    <img src={page21} alt='Imagery'></img>
                                </div>
                                <div>
                                    <img src={page22} alt='Thank You'></img>
                                </div>
                            </Carousel>
                        </td>
                    </table>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>Process</h2>
                        <table>
                            <thead>
                                <th>01 Research</th>
                                <th>02 Ideation</th>
                                <th>03 Design</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        I began by researching WTA's current brand, mission, and goals, identifying what should change and what should stay consistent throughout the design process.</td>
                                    <td>
                                        In developing the new brand, I created a design system, many sketches, and wireframes, then gathered feedback from peers and professors in critique sessions before proceeding to creating the final mobile site redesign and brand book.
                                </td>
                                    <td>I created a final brand book that addresses the brand voice, new logo, typography, colors, digital design, and use of imagery in one 22-page guide.</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>01 Research</h2>
                        <p>It is important to identify elements of the current brand that will remain constant throughout the rebranding. For instance, the organization’s purpose and audiences. I referred back to these when making design decisions to stay on-mission.</p>
                        <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th>Mission</th>
                            <th>Organization Goals</th>
                            <th>Audience</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <q style={{fontStyle: 'italic'}}>WTA believes that being in nature has a positive impact on people’s hearts, minds and bodies. It is vital for everyone to have the opportunity to access the outdoors, and we are committed to reducing barriers to hiking trails and lands. We strive to inspire people to go outside—giving them the skills and knowledge they need to recreate safely and sustainably.</q>
                                </td>
                                <td>
                                    <ul>
                                        <li>Make the outdoors accessible</li>
                                        <li>Inspire people to go outside</li>
                                        <li>Help people explore safely and sustainably</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Experienced hikers</li>
                                        <li>Amateur and first time-hikers</li>
                                        <li>All ages, youth through elderly</li>
                                        <li>Volunteers and prospective volunteers</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>02 Ideation</h2>
                        <h3>Logo</h3>
                        <p>With any redesign process, I find it helpful to begin with identifying the successes and areas for improvement of the current design, then moving forward with a more focused goal for the new version.</p>

                        <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th style={{color: 'black'}}>Logo Prior to Redesign</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={currentLogo} alt='current logo'></img>
                                </td>
                                <td>
                                    <h4>Successes</h4>
                                    <ul>
                                        <li>Simple use of colors creates eye-catching contrast</li>
                                        <li>Mountain and tree designs represent WTA’s purpose</li>
                                        <li>“EST. 1966” showcases the organizations long-standing roots</li>
                                    </ul>
                                    <h4>Opportunities for Improvement</h4>
                                    <ul>
                                        <li>Small details and full spelling of “Washington Trails Association” makes logo hard to scale down. It’s not readable on a small level.</li>
                                        <li>Typeface is quite traditional. A more modern feel could better attract a younger audience, as many hikers are in their teens and 20’s.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>I began the logo redesign with dozens of hand sketches. In any design process, I like to keep the initial ideas simple and focus on quantity over quality in the first stages. I began with divergent design, pinpointed the most successful idea, then created more iterations with a focus on convergent design. As with the entire brand book, I used Adobe Illustrator.</p>
                    <p>Below are examples of sketchbook pages and design iterations that helped lead to the final design.</p>
                    <table>
                        <thead>
                            <th></th>
                            <th style={{width: 32 + '%'}}></th>
                            <th style={{width: 36 + '%'}}></th>
                        </thead>
                        <tbody>
                            <td style={{padding: 0}}>
                                <img src={sketchbook1} alt="sketchbook" style={{width: 98 + '%'}}></img>
                            </td>
                            <td><img src={sketchbook2} alt="sketchbook" style={{width: 100 + '%'}}></img></td>
                            <td>
                            <img src={logoIterations1} alt="sketchbook" style={{width: 104.5 + '%'}}></img><img src={logoIterations2} alt="sketchbook" style={{width: 104.5 + '%'}}></img>
                            </td>
                        </tbody>
                    </table>
                    
                    <h3 style={{marginTop: 4 + 'em'}}>Other Brand Book Sections</h3>
                    <p>For the other sections of the brand book, such as color, typography, and digital design, I followed a similar ideation process that involved evaluating the current brand for strengths and opportunities, sketching and ideating with high volume, gathering feedback, then refining the most successful designs into the final product. Feel free to reach out to talk more in-depth about any of these other sections.</p>

                   </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>03 Design</h2>
                        <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th style={{color: 'black', width: 60 + '%'}}>Final Logo Redesign</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={logo} alt='logo' style={{width: 100 + '%', marginTop: 2 + 'em'}}></img>
                                </td>
                                <td>
                                    <p style={{marginTop: 2 + 'em'}}>I chose this design as my final logo. Here is the thought process behind some of my design decisions:</p>
                                    <ul>
                                        <li>It’s successful on both a large and small scale. The type and image are recognizable and readable even from far away.</li>
                                        <li>I designed the mountain to actually resemble Mt. Rainier, Washington’s most iconic natural landscape.</li>
                                        <li>The typeface, “Utopia Std”, is a more modern typeface that pairs will with most sans-serifs. I chose serif font, as it is more traditional and gives a nod to WTA’s long-standing establishment.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Final Brand Book</h3>
                    <Carousel autoplay className='carousel' style={{width: 80 + '%'}}>
                                <div>
                                    {/* { images.map(({ id, src, alt}) => <img id={id} src={src} alt={alt} />)}  */}
                                    <img src={page1} alt='Cover'></img>
                                </div>
                                <div>
                                    <img src={page2} alt='Contents'></img>
                                </div>
                                <div>
                                    <img src={page3} alt='The Brand'></img>
                                </div>
                                <div>
                                    <img src={page4} alt='Purpose'></img>
                                </div>
                                <div>
                                    <img src={page5} alt='Brand Keywords'></img>
                                </div>
                                <div>
                                    <img src={page6} alt='Logo'></img>
                                </div>
                                <div>
                                    <img src={page7} alt='Logo Design'></img>
                                </div>
                                <div>
                                    <img src={page8} alt='Logo Usage'></img>
                                </div>
                                <div>
                                    <img src={page9} alt='Logo Donts'></img>
                                </div>
                                <div>
                                    <img src={page10} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page11} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page12} alt='Typography'></img>
                                </div>
                                <div>
                                    <img src={page13} alt='Color'></img>
                                </div>
                                <div>
                                    <img src={page14} alt='Color Palette'></img>
                                </div>
                                <div>
                                    <img src={page15} alt='Color Usage'></img>
                                </div>
                                <div>
                                    <img src={page16} alt='Digital Design'></img>
                                </div>
                                {/* <div>
                                    <img src={page17} alt='Landing Page'></img>
                                </div> */}
                                <div>
                                    <img src={page18} alt='Mobile Site'></img>
                                </div>
                                <div>
                                    <img src={page19} alt='Mobile Site Details'></img>
                                </div>
                                <div>
                                    <img src={page20} alt='Imagery'></img>
                                </div>
                                <div>
                                    <img src={page21} alt='Imagery'></img>
                                </div>
                                <div>
                                    <img src={page22} alt='Thank You'></img>
                                </div>
                            </Carousel>
                    </div>


                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>What I Learned</h2>
                        <p>Creating this brand book was a great way to consider visual design and its impact on a company’s image and its user interaction. It helped me improve as a designer in a few ways:</p>
                        <ul>
                            <li>It prompted me to not only design, but to think about design in a greater context: how will the design be perceived by the organization? By the audience? What implications will it have on user participation and retention?</li>
                            <li>I also practiced considering my design decisions and the justifications for them. When dealing with an organization’s brand, it’s not enough to make designs that look objectively good. Everything has to reinforce that organization’s intended image and mission. Combining this strategic thinking with visual design skills deepened my understanding of visual communication and how visual design can truly impact human experiences.</li>
                        </ul>
                    </div>

                    <div className='project-links'>
                        <h2>Other Projects</h2>
                        <a href='/TreatmentCompanion'>Treatment Companion / UX Design ›</a><br></br>
                        <a href='/UWConnect'>UWConnect / UX Design ›</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project3;