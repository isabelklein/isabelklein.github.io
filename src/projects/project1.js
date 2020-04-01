import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import header from '../images/project1/header.png'
import image2 from '../images/project1/currentState.png';
import image3 from '../images/project1/whiteboard.png';
import image4 from '../images/project1/sketchbook.png';
import image5 from '../images/project1/designSystem.png';

class Project1 extends Component {
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
                        <h1>Tuberculosis Treatment Companion</h1>
                        <h2 style={{ fontSize: 1.7 + 'em', marginBottom: 2 + 'em' }}>A mobile web app to support tuberculosis patients and care providers</h2>

                    <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th style={{ width: 22 + 'em' }}>Background</th>
                            <th style={{ width: 9 + 'em' }}>My Role</th>
                            <th style={{ width: 9 + 'em' }}>Team</th>
                            <th style={{ width: 7 + 'em' }}>Timeline</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Treatment Companion is a mobile web app to help support tuberculosis patients and care providers and increase treatement completion rates. It was deployed in a 6-month pilot study in Argentina in 2019. My team redesigned the app based on pilot study feedback to prepare it for a second pilot study later in 2020.</td>
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
                    </Fade>
                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>Challenge</h2>
                        <p>Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from one person to another through respiratory droplets. TB is a top 10 leading cause of death by infection. Fortunately, it is highly treatable.</p>
                        <p>Social stigma and severe treatment side effects often deter patients from completing the 6+ month long treatment process, leading to further spread of the disease and at times even drug-resistant strains of TB.</p>
                        <p><span style={{ fontWeight: 'bold' }}>TB Treatment Companion</span> is a mobile web app that helps patients and care providers keep track of treatment though the use of both patient and coordinator interfaces and a test strip tracking system.</p>
                        <p>It aims to achieve this through 4 goals:</p>
                        <ol style={{ marginBottom: 3 + 'em' }}>
                            <li>Allow patients to track their medication intake and providers to monitor treatment progress, verified by use of urine test strips.</li>
                            <li>Facilitate communication between care providers and patients</li>
                            <li>Give patients a sense of community</li>
                            <li>Provide educational resources</li>
                        </ol>

                        <p>The version of the application that was deployed in Argentina, prior to my team's redesign:</p>
                        <img src={image2} alt='Treatment Companion App Current State' style={{ width: 100 + '%', marginBottom: 3 + 'em' }}></img>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2 style={{ fontWeight: 'bold' }}>Process</h2>
                        <table>
                            <thead>
                                <th>01 Research</th>
                                <th>02 Ideation</th>
                                <th>03 Design</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Prior to joining the team, the preliminary app underwent a 6-month pilot study in Argentina. Users and care providers were then interviewed in order to pinpoint the application's strengths and opportunities for improvement.<br></br><br></br>As a designer, it was my job to interpret these findings and incorporate them into design decisions for an improved user experience.</td>
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

                        <h3>Ideation</h3>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src={image3} alt='Treatement Companion App' style={{ width: 50 + '%' }}></img>
                            <img src={image4} alt='Treatement Companion App' style={{ width: 50 + '%' }}></img>
                        </div>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>Design</h2>
                        <h3>Design System</h3>
                        <p>After initial wire frames and user flows, the other designers and I collaborated to create a design system that would remain consistent across all hi-fidelity designs. This ensured a consistent, intuitive experience for users across the entire application.</p>
                        <img src={image5} alt='Treatment Companion App' style={{ width: 100 + '%', marginBottom: 3 + 'em' }}></img>

                        <h3>My Designs</h3>
                        <p style={{ marginBottom: 4 + 'em' }}>My primary design contributions this quarter included redesign of the home page and of the primary user task: reporting medication, symptoms, and test strip results.</p>
                        <div className='project-gif'>
                            <div style={{ display: 'flex', width: 80 + '%', marginLeft: 3 + 'em' }}>
                                <img src='https://media.giphy.com/media/SqYdjEw2GOctNnV5n6/giphy.gif' alt='Treatment Update'></img>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Progress & Treatment Update</h4>
                                    <p>The Progress card on the Home page provides positive feedback when patients use the app and take their medication consistently.</p>
                                    <p>A Treatment Update on the Home page now gives users dynamic information on their treatment depending on where they are in the process.</p>
                                    <p>This helps patients feel better informed and know what to expect during their long treatment process, as symptoms and procedures change over time.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: 80 + '%', marginTop: 4 + 'em', marginLeft: 3 + 'em', marginBottom: 4 + 'em' }}>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Logging a Medication</h4>
                                    <p>Actions needed to report a treatment are clearly displayed in the blue buttons at the top of the Home page.</p>
                                    <p>By default, users are prompted to input when they took their medication, but in case they missed it, they can select "I didn't take my medication" and then must indicate a reason why. This can help care providers better understand barriers to treatment adherence.</p>
                                </div>
                                <img src='https://media.giphy.com/media/Xa9nmWAXnrYATRLsGZ/giphy.gif' alt='Medication Time'></img>
                            </div>
                            <div style={{ display: 'flex', width: 80 + '%', marginLeft: 3 + 'em', marginBottom: 4 + 'em' }}>
                                <img src='https://media.giphy.com/media/KEeDvBV4z6CJpE58Rl/giphy.gif' alt='Symptom Definition'></img>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Symptom Definitions</h4>
                                    <p>One of the largest issues found in the pilot study was that users often did not report any symptoms. Reporting symptoms is crucial for care providers to understand the effectiveness of treatment and when patients may require additional medical attention.</p>
                                    <p>Some users noted in interviews that they did not report symptoms because they did not understand what all of them meant.</p>
                                    <p>To address this, I added expandable symptom definitions.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: 80 + '%', marginTop: 4 + 'em', marginLeft: 3 + 'em', marginBottom: 4 + 'em' }}>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Symptom Reporting</h4>
                                    <p>In order to increase symptom reporting rates, I made the "Done" button disabled until at least one symptom is selected (No Symptoms is also an option).</p>
                                    <p>User interviews also indicated that it was unclear when symptoms were submitted successfully, leading to users making multiple identical entries that were confusing to care providers.</p>
                                    <p>I added a confirmation popup in order to clearly communicate that the symptoms were reported successfully.</p>
                                </div>
                                <img src='https://media.giphy.com/media/fZ98kbcBoOvtPQUlYW/giphy.gif' alt='Logging a Symptom'></img>
                            </div>
                            <div style={{ display: 'flex', width: 80 + '%', marginLeft: 3 + 'em' }}>
                                <img src='https://media.giphy.com/media/KziYiCrHSQMasNr1xI/giphy.gif' alt='Severe Symptoms'></img>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Severe Symptoms</h4>
                                    <p>In some cases, symptoms can indicate a critical health issue that requires immediate medical attention.</p>
                                    <p>However, at times care providers do not check the logged symptoms in time to alert them that they need medical attention.</p>
                                    <p>This redesign incorporates an automated popup whenever a user logs a severe symptom, so they do not need to wait for their care provider to alert them manually.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', width: 80 + '%', marginTop: 4 + 'em', marginLeft: 3 + 'em', marginBottom: 4 + 'em' }}>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Test Strip Photo</h4>
                                    <p>On certain days, users are prompted to upload a photo of a urine test strip, which allows care providers to verify the effectiveness of their treatment.</p>
                                    <p>The redesign includes clearer messaging about when this photo should be uploaded.</p>
                                    <p>In addition, there is a confirmation message at the end on the home screen, communicating that they are done with their tasks for the day.</p>
                                </div>
                                <img src='https://media.giphy.com/media/gIBWcWqFB6aE9Vl1RA/giphy.gif' alt='Test Strip Upload'></img>
                            </div>
                            <div style={{ display: 'flex',width: 80 + '%', marginLeft: 3 + 'em' }}>
                                <img src='https://media.giphy.com/media/Y34FaKHS9FdjvZIt5o/giphy.gif' alt='Test Strip Upload Later'></img>
                                <div style={{ flexDirection: 'column' }}>
                                    <h4>Taking the Test Strip Photo Later</h4>
                                    <p>The pilot study revealed that users often take the urine test after they log their medication and symptoms.</p>
                                    <p>I added an option to take the photo at a later time so that users do not have to click through the entire process manually when they take the photo later.</p>
                                    <p>When they elect to take take the test later that day, the Home screen clearly indicates it as a remaining task, while checking off the "Report Treatment" task.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>What I Learned</h2>
                        <p>I've learned so much through this project about both design and working with a team. Here are some of my key takeaways:</p>
                        <ul>
                            <li>Experience designing around development limitations. Some UI features the design team and I had hoped to include were limited due to overcomplicated development process of those features and too short a timeline. I’ve learned to be flexible and be ready to change directions when needed to meet both design and development needs.</li>
                            <li>The value of defining weekly deliverables with concrete goals. On this design team, we collaboratively decide on each individual’s deliverable each week as well as goals and justifications for those goals. This helps us keep the focus on the big goal when working on the details of a large-scale project.</li>
                            <li>Every week I presented my designs to the rest of the team and the research director, which is a valuable practice of justifying and communicating design decisions. It challenges me to make every component of the designs deliberate and serving user needs and results in more successful designs.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>Next Steps</h2>
                        <p>I'm excited to join the team again for Spring Quarter 2020 where we will continue iterate on the designs to create a more successful application that helps patients and doctors. Next steps for the team include:</p>
                        <ul style={{ marginLeft: 2 + 'em' }}>
                            <li>Usability testing</li>
                            <li>Further design iteration based on findings</li>
                            <li>Redeployment of the app for a second, larger pilot study in Argentina</li>
                            <li>Use of pilot-study feedback to continue improvements for the final version</li>
                        </ul>
                    </div>


                    <div className='project-links'>
                        <h2>Other Projects</h2>
                        <a href='/project2'>UWConnect / UX Design ›</a><br></br>
                        <a href='/project3'>Washington Trails Association / Brand Design ›</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project1;