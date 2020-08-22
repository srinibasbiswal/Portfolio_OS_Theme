import React, { useState } from 'react';
import StartMenuComponent from '../components/StartMenuComponent';
import CortanaComponent from '../components/CortanaComponent';
import {ComponentNames} from '../components/dataComponents/Enums';
import styles from '../stylesheets/style.module.css';
import { Card } from 'react-bootstrap';

function TaskBarComponentPopup(props){

    const [greeting, setGreeting] = useState('Good Morning,');    

    switch (props.taskBarPopupData) {
        case ComponentNames.StartMenu:            
            return(
                <Card className={`${styles.StartMenu} ${styles.BackgroundBlur} ${styles.CustomScrollBar}`}>
                    <StartMenuComponent greetingMsg={greeting}></StartMenuComponent>
                </Card>
            );
            break;
        
        case ComponentNames.Cortana:
            return(
                <Card className={`${styles.StartMenu} ${styles.BackgroundBlur} ${styles.CustomScrollBar}`}>
                    <CortanaComponent></CortanaComponent>
                </Card>
            );
            break;
    
        default:
            break;
    }

}

export default TaskBarComponentPopup;