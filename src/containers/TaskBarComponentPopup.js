import React, { useState } from 'react';
import StartMenuComponent from '../components/StartMenuComponent';
import CortanaComponent from '../components/CortanaComponent';
import {ComponentNames} from '../components/dataComponents/Enums';
import styles from '../stylesheets/style.module.css';
import { Card } from 'react-bootstrap';
import ClockAndCalendar from '../components/ClockAndCalendar';
import VolumeBarComponent from '../components/VolumeBarComponent';
import WifiComponent from '../components/WifiComponent';

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

        case ComponentNames.ClockAndCalendar:   
            return(
                <Card className={`${styles.StartMenu} ${styles.BackgroundBlur} ${styles.CustomScrollBar} ${styles.RightZero}`}>
                    <ClockAndCalendar></ClockAndCalendar>
                </Card>
            );
            break;

        case ComponentNames.Volume_Indicator:   
            return(
                <Card className={`${styles.StartMenu} ${styles.BackgroundBlur} ${styles.CustomScrollBar} ${styles.RightZero}`}>
                    <VolumeBarComponent></VolumeBarComponent>
                </Card>
            );
            break;

        case ComponentNames.Wifi_Indicator:  
            return(
                <Card className={`${styles.StartMenu} ${styles.BackgroundBlur} ${styles.CustomScrollBar} ${styles.RightZero}`}>
                    <WifiComponent></WifiComponent>
                </Card>
            );
            break;
    
        default:   
            return null;
            break;
    }

}

export default TaskBarComponentPopup;