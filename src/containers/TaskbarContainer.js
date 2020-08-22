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
            ClockAndCalendar: false   
        }   
    });

    const handleTaskBarShow = () => {
        var key = 'StartMenu';
        var popUpStatusMeta = taskBarPopupShow.popUpStates;
        if (popUpStatusMeta[key]){
            popUpStatusMeta[key] = !popUpStatusMeta[key];
            console.log(popUpStatusMeta);
            settaskBarPopupShow({popUpStates : popUpStatusMeta});
        }else{
            popUpStatusMeta.StartMenu = false;
            popUpStatusMeta.Cortana = false;
            popUpStatusMeta.ClockAndCalendar = false;
            popUpStatusMeta[key] = true;
            console.log(popUpStatusMeta);
            settaskBarPopupShow({popUpStates: popUpStatusMeta});
        }
    }

    return(
        <Navbar fixed="bottom" className={`${styles.TaskBar} ${styles.BackgroundBlur} shadow`}>
            <div className={`${styles.TaskBarIcon}`} onClick={handleTaskBarShow}> 
                <FontAwesomeIcon icon={faWindows} className={styles.TaskBarIconComponent} ></FontAwesomeIcon> 
                {taskBarPopupShow.popUpStates.StartMenu
                ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.StartMenu}></TaskBarComponentPopup>
                : null}
            </div> 
            <Nav className="mr-auto">
                <div className={`${styles.TaskBarIcon}`} onClick={handleTaskBarShow}> 
                    <Image src={CortanaIcon} className= {styles.TaskBarIconComponent}></Image>
                    {taskBarPopupShow.Cortana 
                    ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.Cortana}></TaskBarComponentPopup>
                    : null}
                </div>
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={DocumentsIcon} className= {styles.TaskBarIconComponent}></Image>
                </div>
                <TaskBarDynamicContainer></TaskBarDynamicContainer>
            </Nav>

            <Nav>
                <ToolBarContainer></ToolBarContainer>
            </Nav>
            
        </Navbar>

    );
}

export default TaskbarContainer;