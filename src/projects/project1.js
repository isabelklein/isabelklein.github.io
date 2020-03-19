import React, { Component } from 'react';
import image1 from '../images/project1/Home.png'

class Project1 extends Component {
    state = {}

    render() {
        return (
            //Project Title
            <div className='project'> 
            <h1>Tuberculosis Treatment Companion</h1>
            <h2>A mobile web app to support tuberculosis patients and care providers</h2>

            <table>
                <thead>
                    <th>Background</th>
                    <th>My Role</th>
                    <th>Team</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Treatment Companion is a mobile web app to help support tuberculosis patients and care providers and increase treatement completion rates. It was deployed in a 6-month pilot study in Argentina in 2019. My team redesigned the app based on pilot study feedback.</td>
                        <td>
                            UX Design Team Member
                            <ul>
                                <li>UX/UI Design</li>
                                <li>User Flows</li>
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                            </ul>
                        </td>
                        <td>Design team of UW students and faculty including
                            <ul>
                                <li>4 UX Designers</li>
                                <li>1 User Researcher</li>
                                <li>1 Data Analyst</li>
                                <li>1 Faculty Director</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <img src={image1} alt='Treatment Companion App' style={{height: 30 + 'em'}}></img>
            </div>
        );
    }
}
 
export default Project1;