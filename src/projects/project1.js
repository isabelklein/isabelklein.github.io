import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import screen1 from '../images/project1/screen1.png';
import screen2 from '../images/project1/screen2.png';
import screen3 from '../images/project1/screen3.png';
import screen4 from '../images/project1/screen4.png';
import image2 from '../images/project1/currentState.png';
// import image3 from '../images/project1/whiteboard.png';
// import image4 from '../images/project1/sketchbook.png';

class Project1 extends Component {
    state = {}

    render() {
        return (
            <div className='project'><Fade bottom> 
            <h1>Tuberculosis Treatment Companion</h1>
            <h2 style={{fontSize: 1.7 + 'em', marginBottom: 2 + 'em'}}>A mobile web app to support tuberculosis patients and care providers</h2>
            </Fade>

            <table style={{marginBottom: 2 + 'em'}}>
                <thead>
                    <th style={{width: 16 + 'em'}}>Background</th>
                    <th style={{width: 10 + 'em'}}>My Role</th>
                    <th>Team</th>
                    <th style={{width: 10 + 'em'}}>Timeline</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Treatment Companion is a mobile web app to help support tuberculosis patients and care providers and increase treatement completion rates. It was deployed in a 6-month pilot study in Argentina in 2019. My team redesigned the app based on pilot study feedback.</td>
                        <td>
                            <ul>
                                <li>UX/UI Design</li>
                                <li>User Flows</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>4 UX Designers</li>
                                <li>1 Data Analyst</li>
                                <li>1 Faculty Director</li>
                                <li>1 Developer</li>
                            </ul>
                        </td>
                        <td>10 weeks</td>
                    </tr>
                </tbody>
            </table>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: 4 + 'em'}}>
                <img src={screen1} alt='Treatment Companion App' style={{height: 30 + 'em', marginBottom: 4 + 'em', marginRight: 2 + 'em'}}></img>
                <img src={screen4} alt='Treatment Companion App' style={{height: 30 + 'em', marginBottom: 4 + 'em', marginRight: 2 + 'em'}}></img>
                <img src={screen3} alt='Treatment Companion App' style={{height: 30 + 'em', marginBottom: 4 + 'em', marginRight: 2 + 'em'}}></img>
                <img src={screen2} alt='Treatment Companion App' style={{height: 30 + 'em', marginBottom: 4 + 'em', marginRight: 2 + 'em'}}></img>
            </div>

            <div style={{marginBottom: 4 + 'em'}}>
                <h2 style={{fontWeight: 'bold'}}>Challenge</h2>
                <p>Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from one person to another through respiratory droplets. TB is a top 10 leading cause of death by infection. Fortunately, it is highly treatable.</p>
                <p>Social stigma and severe treatment side effects often deter patients from completing the 6+ month long treatment process, leading to further spread of the disease and at times even drug-resistant strains of TB.</p>
                <p><span style={{fontWeight: 'bold'}}>TB Treatment Companion</span> is a mobile web app that helps patients and care providers keep track of treatment though the use of both patient and coordinator interfaces and a test strip tracking system.</p>
                <p>It aims to achieve this through 4 goals:</p>
                <ol style={{marginBottom: 3 + 'em'}}>
                    <li>Allow patients to track their medication intake and providers to monitor treatment progress, verified by use of urine test strips.</li>
                    <li>Facilitate communication between care providers and patients</li>
                    <li>Give patients a sense of community</li>
                    <li>Provide educational resources</li>
                </ol>
                
                <p>The version of the application that was deployed in Argentina, prior to my team's redesign:</p>
                <img src={image2} alt='Treatment Companion App' style={{height: 30 + 'em', marginBottom: 3 + 'em'}}></img>
    
            </div>

            <div style={{marginBottom: 4 + 'em'}}>
                <h2 style={{fontWeight: 'bold'}}>Process</h2>
                <table>
                    <thead>
                        <th>01 Research</th>
                        <th>02 Ideation</th>
                        <th>03 Design</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prior to joining the team, the preliminary app underwent a 6-month pilot study in Argentina. Users and care providers were then interviewed in order to pinpoint the application's strengths and opportunities for improvement.<br></br><br></br>As a designer, it was my job to interperet these findings and incorporate them into design decisions for an improved user experience.</td>
                            <td>
                                As a design team, we collaborated during weekly whiteboard sessions and structured our ideation process around weekly goals including:
                                <ul>
                                    <li>Encourage users to complete the entire treatment-logging process</li>
                                    <li>Improve feedback to better communicate what tasks need to be completed and when they are complete</li>
                                    <li>Redesign the UI to be more cohesive and intuitive</li>
                                </ul>
                            </td>
                            <td>Each designer took ownership over a certain section of the application. My tasks included:
                                <ul>
                                    <li>Map out the previous user flow and pinpoint opportunities for improvement based on pilot-study feedback</li>
                                    <li>Collaborate with team members to create a single design system</li>
                                    <li>Redesign Home page </li>
                                    <li>Redesign "Report treatment" task</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <div style={{marginBottom: 4 + 'em'}}>
                <h2 style={{fontWeight: 'bold'}}>Design</h2>
                </div>

                <div style={{marginBottom: 4 + 'em'}}>
                <h2 style={{fontWeight: 'bold'}}>What I Learned</h2>
                </div>

                <div style={{marginBottom: 4 + 'em'}}>
                <h2 style={{fontWeight: 'bold'}}>Next Steps</h2>
                </div>
        </div>
        );
    }
}
 
export default Project1;