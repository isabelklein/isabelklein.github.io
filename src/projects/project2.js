import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import header from '../images/project2/header.png';
import image1 from '../images/project2/overview.png';
import image2 from '../images/project2/competitiveAnalysis.PNG';
import image3 from '../images/project2/sketchbookIdeation.png';
import image4 from '../images/project2/sketchbookOnboarding.png';
import image5 from '../images/project2/sketchbookWireframes.png';
import userFlow from '../images/project2/userFlow.png';
import wireframes from '../images/project2/wireframes.png';
import connect1 from '../images/project2/connect1.png';
import connect2 from '../images/project2/connect2.png';
import connect3 from '../images/project2/connect3.png';
import connect4 from '../images/project2/connect4.png';
import chat from '../images/project2/chat.png';
import discover from '../images/project2/discover.png';
import add from '../images/project2/add.png';
import save from '../images/project2/save.png';
import recap from '../images/project2/recap.png'

class Project2 extends Component {
    state = {}

    render() {
        return (
            // <div>
                <div className='project'><Fade bottom>
                    <div className='project-header'>
                        <img src={header} alt='header'></img>
                    </div>
                    </Fade>
                    <div className='project-body'>
                    <Fade bottom>
                    <h1>UWConnect</h1>
                    <h2 style={{ fontSize: 1.7 + 'em', marginBottom: 2 + 'em' }}>Building community through a mobile app</h2>

                    <table style={{ marginBottom: 2 + 'em' }}>
                        <thead>
                            <th style={{ width: 22 + 'em' }}>Background</th>
                            <th style={{ width: 9 + 'em' }}>My Role</th>
                            <th style={{ width: 7 + 'em' }}>Timeline</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>This was a personal project responding to the prompt: The University of Washington wants to strengthen the community by encouraging experienced students to connect with new students. Design an experience that allows mentors and mentees to discover each other.</td>
                                <td>
                                    <ul>
                                        <li>UX/UI Design</li>
                                        <li>User Research</li>
                                        <li>Competitive Analysis</li>
                                        <li>Hi-Fi Mockups</li>
                                    </ul>
                                </td>
                                <td>1 week</td>
                            </tr>
                        </tbody>
                    </table>
                    </Fade>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 4 + 'em' }}>
                        <img src={image1} alt='overview' style={{ width: 100 + '%' }}></img>
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
                                    <td>
                                        I conducted six user interviews in order to evaluate user needs, then used competitive analysis to understand strengths and weaknesses of existing solutions.
                            </td>
                                    <td>
                                        Based off of research findings, I brainstormed solutions using pen on paper. Then I identified the most promising designs and developed user flows and wireframes.
                            </td>
                                    <td>
                                        I refined wireframes and user flows into 20 high-fidelity mockups using consistent and intuitive UI.
                            </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 style={{ fontWeight: 'bold' }}>01 Research</h2>
                        <h3>Interview Methods</h3>
                        <p>I conducted four interviews with UW students to evaluate user needs. I chose interviewing as my user research method because interviews foster more personal and in-depth responses than online surveys. A semi-structured interview method also allowed for follow-up questions and clarification.</p>
                        <p>This process aimed to answer 2 main research questions: </p>
                        <ol>
                            <li>How might the UW community be stronger for new and experienced students?</li>
                            <li>What challenges do underclassmen and upperclassmen face?</li>
                        </ol>
                        <h3>Interview Findings</h3>
                            I parsed the interviews for common themes. Key findings include:
                        <ol>
                            <li>
                                Upperclassmen like helping freshmen because they enjoy “paying it forward.”
                    </li>
                            <li>The strongest communities come from shared interests. </li>
                            <li>Both new and experienced students wish finding clubs and events were easier. </li>
                            <li>Older students want more new students to join their organizations.</li>
                        </ol>
                        <h3 style={{ marginTop: 2 + 'em' }}>Notable Quotations</h3>
                        <table style={{ fontStyle: 'italic', borderSpacing: 1.5 + 'em' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <q>The hardest part of first coming to college for me was not having a network to depend on on a day-to-day basis and making new connections.</q>
                                    </td>
                                    <td>
                                        <q>More information would have helped me find my community sooner. Even now I want to join a club but don’t know how to find people and connect with them.</q>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <q>I like to help freshmen because I know adjusting can be hard. I like to give back like the upperclassmen who helped me my first year.</q>
                                    </td>
                                    <td>
                                        <q>Orientation helped me make friends, but those friendships didn’t last. My long-lasting friendships came from mutual connections and interests.</q>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>Competitive Analysis</h3>
                        <p style={{ marginBottom: 2 + 'em' }}>Several experiences aiming to strengthen UW’s community already exist. However interviews revealed that the University still lacks a strong sense of community. I researched existing orientation and peer-mentor programs at UW and evaluated strengths and weaknesses based on user interview findings.</p>
                        <img src={image2} alt='competitive analysis' style={{ width: 100 + '%' }}></img>

                        <h2 style={{ fontWeight: 'bold' }}>02 Ideation</h2>
                        <h3>Sketchbook</h3>
                        <p>I began by brainstorming solutions, considering both physical and digital possibilities. Based on product goals, user needs, and feasibility, I determined a mobile app experience would most successfully meet project goals.</p>
                        <img src={image3} alt='Sketchbook Ideation' style={{ width: 100 + '%' }}></img>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src={image4} alt='Onboarding flow' style={{ width: 30 + '%' }}></img>
                            <img src={image5} alt='Sketchbook wireframes' style={{ width: 70 + '%' }}></img>
                        </div>

                        <h3>User Flow</h3>
                        <p>Before getting into visuals, I mapped out the app’s user flow. The app has 4 main sections: </p>
                        <ol>
                            <li>Chat: talk with a mentor or mentee </li>
                            <li>Discover: find or create events and organizations </li>
                            <li>Likes: view liked events and organizations </li>
                            <li>Profile: edit preferences or manage created events and organizations</li>
                        </ol>
                        <img src={userFlow} alt='user flow' style={{ width: 100 + '%' }}></img>

                        <h3>Wireframes</h3>
                        <p>Low fidelity wireframes allow me to focus on the design concepts and flow before spending too much time on visual details. They also make iteration and exploration of design ideas more efficient.</p>
                        <img src={wireframes} alt='user flow' style={{ width: 100 + '%' }}></img>

                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2 style={{ fontWeight: 'bold' }}>03 Design</h2>

                        <div className='project-image-wide'>
                            <img src={image1} alt='overview'></img>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={connect1} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <h3>Connect</h3>
                                <p>Users sign up using their UW account.</p>
                                <p>They are then asked to complete a brief survey to match with their mentor or mentee.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={connect2} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <p>Survey fields were determined based on interview findings.</p>
                                <p>Interviewees indicated mentor/mentee relationships often help with adjusting to academic stress in college.</p>
                            </div>

                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={connect3} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <p>They also indicated importance of similar extracurricular interests and personalities.</p>
                                <p>The survey concludes with availability to ensure that and mentees will have compatible schedules.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={connect4} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <p>Users can select their top picks out of a list of generated matches.</p>
                                <p>The app will match them with a mentor/mentee who indicated mutual interest in order to foster more successful mentorships.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={chat} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <h3>Chat</h3>
                                <p>Once the final match is generated, users are notified.</p>
                                <p>The pair can talk and share events with each other in the Chat tab.</p>
                                <p>If a user is dissatisfied with their match, they can flag it with the “...” icon in the top right.</p>
                                <p>They will then be matched with a new mentor or mentee.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={discover} alt='Discover' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <h3>Discover</h3>
                                <p>Interviews indicated that a strong community is fostered through joining organizations and attending events.</p>
                                <p>In addition, both new and experienced students wish it were easier to find organizations and events at UW.</p>
                                <p>The Discover tab allows users to find events and organizations tailored to their interests.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={add} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <h3>Add</h3>
                                <p>Users can also add their own organizations and events to be suggested to other students. </p>
                                <p>This motivates experienced students to use the app, as interviews revealed that students often have difficulty promoting their organizations to prospective new members.</p>
                                <p>Users can manage their events, organizations, and settings in the Profile tab in the far right.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: 4 + 'em' }}>
                            <img src={save} alt='Connect' style={{ width: 60 + '%', marginRight: 4 + 'em' }}></img>
                            <div style={{ flexDirection: 'column' }}>
                                <h3>Save</h3>
                                <p>Users can easily view and keep track of liked events and organizations in the Likes tab.</p>
                                <p>This motivates continued use and makes the users more likely to participate in events and organizations, strengthening the UW community.</p>
                            </div>
                        </div>
                    </div>
                {/* </div> */}


                <div className='project-image-wide' style={{marginTop: 5 + 'em'}}>
                    <img src={recap} alt='recap'></img>
                </div>


                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>What I Learned</h2>
                        <p>I learned a lot from this project. even though it was only a week long. It definitely make me want to take on some more rapid side projects in the future! Here are a few of my key takeaways:</p>
                        <ul>
                            <li>When working on a tight timeline, planning is everything. Dedicating time on the first day of this project to establish a timeline helped me immensely in ensuring I could end up with a completed project in just one week. I didn't end up following my plan exactly to the hour, but it gave me the structure needed to end up with a finished product I could be proud of.</li>
                            <li>Establish a design system before actually prototyping. This was a mistake I made during this project. Because I was nervous about not completing the mocks in time, I decided to just figure out the details of the UI as I went rather than making a set design system from the beginning. This led me to have to spend extra time to go back and fix inconsistencies and mistakes later.</li>
                            <li>You can achieve more than you know in one week! I was admittedly so intimidated by the prospect of designing this experience in one week. Now that I've been through the process, I have the tools and knowledge needed to tackle other big tasks on tight deadlines in the future.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: 4 + 'em' }}>
                        <h2>Thank you to Google for inviting me to complete this design exercise!</h2>
                    </div>

                    <div className='project-links'>
                        <h2>Other Projects</h2>
                        <a href='/TreatmentCompanion'>Treatment Companion / UX Design ›</a><br></br>
                        <a href='/WTA'>Washington Trails Association / Brand Design ›</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Project2;