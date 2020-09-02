import justAPic from '../../assets/images/justAPic.svg';
import KloudGin from '../../assets/images/KloudGin.png';
import Talspo from '../../assets/images/Talspo.png';
import Freelance from '../../assets/images/Freelance.png';
import { faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";

export const Person = {
    name: 'Srinibas Biswal',
    profilePic : justAPic
};

export const AboutMeData = {
    intro: ' I\'m a techno-functional Software Developement Engineer from India.',
    desc : 'I enjoy taking complex problems and convertin to an usable format. My major domains are Web Devleopment and Python Prgramming.',
    outro: 'When I\'m not coding, you will find me watching an episode of The Office or travelling to a new place.'
};

export const Experiences = [
    {
        position : 'Associate Software Developer',
        organization : 'KloudGin',
        startDate : '17 June, 2019',
        endDate : 'Present',
        description : 'I am a part of the Product Development team at KloudGin, where I have developed multiple API and implementaion modules of EAM and FSM.',
        organizationPicture : KloudGin
    },
    {
        position : 'Web Developer',
        organization : 'Talspo',
        startDate : '5 April, 2019',
        endDate : '',
        description : 'I was a key member of the Frontend Development team where we developed the product from the initial phase.',
        organizationPicture : Talspo
    },
    {
        position : 'Freelance Developer',
        organization : '',
        startDate : '2017',
        endDate : '2019',
        description : 'I was a freelance developer during my Bachelor\'s degree where I worked with different established companies like Prelude, Ediolon and Youngster\'s Worldwide.',
        organizationPicture : Freelance
    }
];

export const EducationList = [
    {
        instituteName : 'ITER, Siksha \'O\' Anusandhan (Deemed to be University)',
        degree : 'Bachelor\'s Degree in Computer Science and Engineering',
        year : '2019',
        id : 1
    },
    {
        instituteName : 'O.D.M. Public School, Bhubaneswar',
        degree : 'Intermediate',
        year : '2015',
        id : 2
    },
    {
        instituteName : 'Prabhujee English Medium School, Bhubaneswar',
        degree : 'Matriculation',
        year : '2013',
        id : 3
    }
];

export const Projects = [
    {
        projectName : 'NoteStack',
        description : 'A notes management platform/application where students can share their course notes easily with each other.',
        technologyStack : ['Android','Java','Firebase','Firestore'],
        link : 'https://github.com/srinibasbiswal/NoteStack'
    },
    {
        projectName : 'Bus Management',
        description : 'A bus management system for ITER, BBSR which helps to know different bus routes and makes easy to decode which route to take.',
        technologyStack : ['Python','TKinter','Firebase'],
        link : 'https://iter-bus.firebaseapp.com/'
    },
    {
        projectName : 'Seat Swapper',
        description : 'A train seat swapping system where we can get our desired train seat without any extra payment. This was a project for IBS hackathon.',
        technologyStack : ['Java','MySQL','BlockChain','HTML','CSS','JavaScript'],
        link : 'https://github.com/srinibasbiswal/IBS-Hackathon'
    },
    {
        projectName : 'Flight Ticket Saver',
        description : 'A flight booking system which was dealing with the bumping of seats with the help of Etherium Smart Contract. This was a project for IATA Hackathon.',
        technologyStack : ['Python','DJANGO','HTML','CSS','JavaScript'],
        link : 'https://github.com/srinibasbiswal/IATA-Hackathon'
    }
]

export const SkillSet = [
    {
        name : 'Language Proficiency',
        values : [
            'Python',
            'Java',
            'JavaScript',
            'ReactJS',
            'Firebase',
            'HTML',
            'CSS'
        ]
    },
    {
        name : 'Tools Proficiency',
        values : [
            'Git',
            'PyCharm',
            'Eclipse',
            'IntelliJ IDEA',
            'Postman'
        ]
    },
    {
        name : 'Database Proficiency',
        values : [
            'MySQL',
            'MongoDB',
            'Firestore'
        ]
    }
]

export const ContactPoints = [
    {
        field : 'email',
        fieldName : 'Email',
        value : 'srinibasbiswal02@gmail.com',
        link : 'mailto:srinibasbiswal02@gmail.com',
        icon : faEnvelope
    },
    {
        field : 'linkedIn',
        fieldName : 'LinkedIn',
        value : 'in/srinibasbiswal',
        link : 'https://www.linkedin.com/in/srinibasbiswal/',
        icon : faLinkedin
    },
    {
        field : 'github',
        fieldName: 'GitHub',
        value : 'srinibasbiswal',
        link : 'https://github.com/srinibasbiswal',
        icon : faGithub
    },
    {
        field : 'twitter',
        fieldName: 'Twitter',
        value : 'srinibasbiswal',
        link : 'https://twitter.com/srinibasbiswal',
        icon : faTwitter
    }

]

export const LocationDetails = [
    {
        placeName: 'Current Location : Hyderabad, India',
        latitude : 17.3850,
        longitude : 78.4867,
        dx : -90,
        dy: -30
    },
    {
        placeName: 'Hometown : Bhubaneswar, India',
        latitude : 20.2961,
        longitude : 85.8245,
        dx : -30,
        dy: -90
    }
]


