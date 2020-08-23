import React, { useState } from 'react';
import { Navbar, Nav, Image, Collapse } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import CortanaIcon from '../assets/images/cortana.svg';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import ToolBarContainer from './ToolBarContainer';
import TaskBarDynamicContainer from './TaskBarDynamicContainer';
import TaskBarComponentPopup from './TaskBarComponentPopup';
import {ComponentNames} from '../components/dataComponents/Enums';


function TaskbarContainer(){

    const [taskBarPopupShow, settaskBarPopupShow] = useState({
        popUpStates : {
            StartMenu : false,
            Cortana : false,
            Battery_Indicator : false,
            Wifi_Indicator : false,
            Volume_Indicator : false,
            ClockAndCalendar: false   
        }   
    });

    const handleTaskBarShow = (key) => {
        console.log(key)
        var popUpStatusMeta = taskBarPopupShow.popUpStates;
        console.log(typeof (popUpStatusMeta))
        if (popUpStatusMeta[key]){
            popUpStatusMeta[key] = !popUpStatusMeta[key];
            console.log(popUpStatusMeta);
            settaskBarPopupShow({popUpStates : popUpStatusMeta});
        }else{
            for (var k in popUpStatusMeta) { 
                if (popUpStatusMeta.hasOwnProperty(k)) { 
                    popUpStatusMeta[k] = false;
                } 
            } 
            popUpStatusMeta[key] = true;
            console.log(popUpStatusMeta);
            settaskBarPopupShow({popUpStates: popUpStatusMeta});
        }
    }

    return(
        <Navbar fixed="bottom" className={`${styles.TaskBar} ${styles.BackgroundBlur} shadow`}>
            <div className={`${styles.TaskBarIcon}`} onClick={() => handleTaskBarShow('StartMenu')}> 
                <FontAwesomeIcon icon={faWindows} className={styles.TaskBarIconComponent} ></FontAwesomeIcon> 
                {taskBarPopupShow.popUpStates.StartMenu
                ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.StartMenu}></TaskBarComponentPopup>
                : null}
            </div> 
            <Nav className="mr-auto">
                <div className={`${styles.TaskBarIcon}`} onClick={() => handleTaskBarShow('Cortana')}> 
                    <Image src={CortanaIcon} className= {styles.TaskBarIconComponent}></Image>
                    {taskBarPopupShow.popUpStates.Cortana 
                    ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.Cortana}></TaskBarComponentPopup>
                    : null}
                </div>
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={DocumentsIcon} className= {styles.TaskBarIconComponent}></Image>
                </div>
                <TaskBarDynamicContainer></TaskBarDynamicContainer>
            </Nav>

            <Nav>
                <ToolBarContainer 
                    taskBarComponentPopupStatus = {taskBarPopupShow}
                    onClickEvent={(value) => handleTaskBarShow(value)}
                />
            </Nav>
            
        </Navbar>

    );
}

export default TaskbarContainer;