import headshot from './images/headshot.jpeg'
import project1 from './images/treatmentCompanion.png'
import project2 from './images/UWConnect.png'
import project3 from './images/WTA.png'
// import project4 from './images/alumniPathways.png'
// import project5 from './images/project5.png'
export default

    {
        name :'Isabel M. Klein',
        headerTagline: [
                        'Hi, I\'m Isabel,',
                        'User Experience Designer from Seattle.',
                        'I\'ll be joining Amazon this summer as a',
                        'UX Design Intern in the Bay Area, California.',
                        '',
                        "Scroll down to see my work.",
    ],
        contactEmail:'isabelmklein@outlook.com',
        abouttext: "Hi, I’m Isabel. I'm a junior at the University of Washington majoring in Human Centered Design and Engineering. I'm also an artist, illustrator, and student-athlete on University of Washington's Division-I men's rowing team 🚣‍♀️. When I'm not designing or training, you can probably find me on a run 🏃‍♀️ or on a hike 🏔.",
        abouttext2: "Thank you for visiting my portfolio! Please feel free to reach out - Isabelmklein@outlook.com.",
        aboutImage: headshot,
        ShowAboutImage:true,
        projects:[
           {
            id: 1,
            title:'Tuberculosis Treatment Companion',
             service:'UI/UX Design',
             imageSrc: project1,
             url: '/project1'
            },
            {
                id: 2,
                title: 'UWConnect',
                service: 'UX Design',
                imageSrc: project2,
                url: '/project2'
            },
            { 
                id: 3,
                title: 'WTA Brand Book',
                service: 'Brand Design',
                imageSrc: project3,
                url: '/project3'
            },
        //     {
        //         id: 4,
        //         title: 'Alumni Pathways',
        //         service: 'User Research',
        //         imageSrc: project4,
        //         url: '/project4'
        //    },
        //     {
        //         id: 5,
        //         title: 'Project Five',
        //         service: 'Branding',
        //         imageSrc: project5,
        //         url: 'http://chetanverma.com/'
        // },
    //     {
    //         id: 6,
    //         title: 'Project Six',
    //         service: 'Branding',
    //         imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //         url: 'http://chetanverma.com/'
    //    }

        ],
        social: [
            {   name:'Github',
                url:'https://github.com/isabelklein'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/isabelmklein/'
            }

        ]
    }