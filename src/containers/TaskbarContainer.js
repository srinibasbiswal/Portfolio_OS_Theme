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

    const [open, setOpen] = useState(false);

    const showStartmenu = () => {        
        setOpen(!open);
    }

    return(
        <React.Fragment>
        <Navbar fixed="bottom" className={`${styles.TaskBar} ${styles.BackgroundBlur} shadow`}>
            <div className={`${styles.TaskBarIcon}`} onClick={showStartmenu}> 
                <FontAwesomeIcon icon={faWindows} className={styles.TaskBarIconComponent} ></FontAwesomeIcon> 
                {open 
                ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.StartMenu}></TaskBarComponentPopup>
                : null}
            </div> 
            <Nav className="mr-auto">
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={CortanaIcon} className= {styles.TaskBarIconComponent}></Image>
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

        </React.Fragment>
    );
}

export default TaskbarContainer;