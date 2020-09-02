import AboutMeIcon from '../../assets/images/AboutMeIcon.png';
import ExperienceIcon from '../../assets/images/ExperienceIcon.png';
import EducationIcon from '../../assets/images/EducationIcon.png';
import ContactMeIcon from '../../assets/images/ContactMeIcon.png';
import ProjectsIcon from '../../assets/images/ProjectsIcon.png';
import SkillsIcon from '../../assets/images/SkillsIcon.png';
import AboutComponent from './AboutComponent';
import ExperienceComponent from './ExperienceComponent';
import EducationComponent from './EducationComponent';
import ProjectComponent from './ProjectComponent';
import SkillsComponent from './SkillsComponent';
import ContactComponent from './ContactComponent';
import MapContainer from '../../containers/MapContainer';

export const dataConfig = {

    'thisPersonDataConfig' : {
        'showCaseComponents' : ['aboutMe', 'experience', 'education', 'contact']
    },

    'documentsDataConfig' : {
        'showCaseComponents' : ['projects', 'skills','location']
    }

};

export const showCaseComponentConfig = {
    'aboutMe' : {
        name: 'About Me',
        iconName: AboutMeIcon,
        id: 1,
        modalId: 'aboutMeModal',
        dataConfigId : 'aboutMe',
        modalShow: false ,
        modalType :'componentData',
        componentData : AboutComponent
    }, 

    'experience' : {
        name: 'Experience',
        iconName: ExperienceIcon,
        id: 2,
        modalId: 'experienceModal',
        dataConfigId : 'experience',
        modalShow: false ,
        modalType :'componentData',
        componentData : ExperienceComponent
    }, 

    'education' : {
        name: 'Education',
        iconName: EducationIcon,
        id: 3,
        modalId: 'EducationModal',
        dataConfigId : 'education',
        modalShow: false ,
        modalType :'componentData',
        componentData : EducationComponent
    },

    'contact': {
        name: 'Contact Me',
        iconName: ContactMeIcon,
        id: 4,
        modalId: 'ContactMeModal',
        dataConfigId : 'contact',
        modalShow: false ,
        modalType :'componentData',
        componentData : ContactComponent
    },

    'projects' : {
        name: 'Projects',
        iconName: ProjectsIcon,
        id: 5,
        modalId: 'ProjectsModal',
        dataConfigId : 'projects',
        modalShow: false ,
        modalType :'componentData',
        componentData : ProjectComponent
    },

    'skills' : {
        name: 'Skills',
        iconName: SkillsIcon,
        id: 6,
        modalId: 'SkillsModal',
        dataConfigId : 'skills',
        modalShow: false ,
        modalType :'componentData',
        componentData : SkillsComponent
    },
    'location' : {
        name: 'My Location',
        iconName: SkillsIcon,
        id: 7,
        modalId: 'LocationModal',
        dataConfigId : 'location',
        modalShow: false ,
        modalType :'componentData',
        componentData : MapContainer
    }
}
