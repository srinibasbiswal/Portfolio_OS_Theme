import justAPic from '../../assets/images/justAPic.svg';
import KloudGin from '../../assets/images/KloudGin.png';
import Talspo from '../../assets/images/Talspo.png';
import Freelance from '../../assets/images/Freelance.png';

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
]