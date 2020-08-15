import React, { useState } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import CortanaIcon from '../assets/images/cortana.svg';
import DocumentsIcon from '../assets/images/DocumentsIcon.png';
import ToolBarContainer from './ToolBarContainer';
import TaskBarDynamicContainer from './TaskBarDynamicContainer';
import StartMenuContainer from './StartMenuContainer';

function TaskbarContainer(){

    const [greeting, setGreeting] = useState('Good Morning,');

    const showStartmenu = () => {
        var greeting;
        var time = new Date().getHours();
        if (time < 10) {
          greeting = "Good Morning,";
        } else if (time < 20) {
          greeting = "Good Day,";
        } else {
          greeting = "Good Evening,";
        }
        setGreeting(greeting);
    }
    return(
        <React.Fragment>
        <Navbar fixed="bottom" className={`${styles.TaskBar} ${styles.BackgroundBlur} shadow`}>
            <div className={`${styles.TaskBarIcon}`}> 
                <FontAwesomeIcon icon={faWindows} className={styles.TaskBarIconComponent} onClick={showStartmenu}></FontAwesomeIcon> 
                <StartMenuContainer greetingMsg={greeting}></StartMenuContainer>
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