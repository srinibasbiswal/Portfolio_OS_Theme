import BatmanEmojiIcon from '../../assets/images/BatmanEmojiIcon.png';

export const dataConfig = {

    'thisPersonDataConfig' : {
        'showCaseComponents' : ['aboutMe', 'experience', 'education', 'contact']
    },

    'documentsDataConfig' : {
        'showCaseComponents' : ['projects', 'skills']
    }

};

export const showCaseComponentConfig = {
    'aboutMe' : {
        name: 'About Me',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'aboutMeModal',
        dataConfigId : 'aboutMe',
        modalShow: false 
    }, 

    'experience' : {
        name: 'Experience',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'experienceModal',
        dataConfigId : 'experience',
        modalShow: false 
    }, 

    'education' : {
        name: 'Education',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'EducationModal',
        dataConfigId : 'education',
        modalShow: false 
    },

    'contact': {
        name: 'Contact Me',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'ContactMeModal',
        dataConfigId : 'contact',
        modalShow: false 
    },

    'projects' : {
        name: 'Projects',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'ProjectsModal',
        dataConfigId : 'projects',
        modalShow: false 
    },

    'skills' : {
        name: 'Skills',
        iconName: BatmanEmojiIcon,
        id: 1,
        modalId: 'SkillsModal',
        dataConfigId : 'skills',
        modalShow: false 
    }
}
