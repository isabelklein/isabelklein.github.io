import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import header from '../images/project3/header.png'

class Project3 extends Component {
    state = {}

    render() {
        return (
            <div className='project'>
                <Fade bottom>
                <div className='project-header'>
                    <img src={header} alt='header'></img>
                </div>

                    <h1>Alumni Pathways</h1>
                    <h2 style={{ fontSize: 1.7 + 'em', marginBottom: 2 + 'em' }}>User research for the University of Washington HCDE Alumni Board</h2>
                </Fade>

                <table style={{ marginBottom: 2 + 'em' }}>
                    <thead>
                        <th style={{ width: 22 + 'em' }}>Background</th>
                        <th style={{ width: 11 + 'em' }}>My Role</th>
                        <th style={{ width: 11 + 'em' }}>Team</th>
                        <th style={{ width: 5 + 'em' }}>Timeline</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The primary goal of the research was to understand the experiences and needs of Human Centered Design & Engineering (HCDE) alumni as they navigate their careers  and highlight the key transitional moments in their journey. We wanted to unravel the ongoing learning, networking, and other needs and discover how alums are meeting or not meeting those needs today.</td>
                            <td>
                                <ul>
                                    <li>Interviewing</li>
                                    <li>Qualitative Analysis</li>
                                    <li>Personas</li>
                                    <li>User Journeys</li>
                                    <li>Presenting</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>2 Faculty Research Directors</li>
                                    <li>8 student researchers at the University of Washington</li>
                                </ul>
                            </td>
                            <td>9 weeks</td>
                        </tr>
                    </tbody>
                </table>

                <div style={{ marginBottom: 4 + 'em' }}>
                    <h2>Process</h2>
                    <table>
                        <thead>
                            <th>01 Research</th>
                            <th>02 Analysis</th>
                            <th>03 Deliverables</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    We began by conducting secondary research to observe existing alumni programs and their successes and opportunities for improvements. Then, we conducted primary research in the form of interviews.</td>
                                <td>
                                We parsed through the interview content to identify common themes and relevant content.
                                </td>
                                <td>We used the findings to create a persona and user journey, then presented the research and deliverables to the University of Washington HCDE Alumni Board.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div style={{ marginBottom: 4 + 'em' }}>
                    <h2>01 Research</h2>
                    <h3>Secondary Research</h3>
                    <p>After initial wire frames and user flows, the other designers and I collaborated to create a design system that would remain consistent across all hi-fidelity designs. This ensured a consistent, intuitive experience for users across the entire application.</p>

                    <h3>Interviews</h3>
                    <p>Info on interview process</p>
                </div>

                <div style={{ marginBottom: 4 + 'em' }}>
                    <h2>02 Analysis</h2>
                    <h3>Persona</h3>
                    <p>After initial wire frames and user flows, the other designers and I collaborated to create a design system that would remain consistent across all hi-fidelity designs. This ensured a consistent, intuitive experience for users across the entire application.</p>

                    <h3>User Journey</h3>
                    <p>Info on interview process</p>
                </div>

                <div style={{ marginBottom: 4 + 'em' }}>
                    <h2>03 Deliverables</h2>
                    <h3>Persona</h3>
                    <p>After initial wire frames and user flows, the other designers and I collaborated to create a design system that would remain consistent across all hi-fidelity designs. This ensured a consistent, intuitive experience for users across the entire application.</p>

                    <h3>User Journey</h3>
                    <p>Info on interview process</p>
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
               
                <div className='project-links'>
                    <a href='/project4'>Next Project: WTA Brand Book ›</a>
                </div>

            </div>
        );
    }
}

export default Project3;