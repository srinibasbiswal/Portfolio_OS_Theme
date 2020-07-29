import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import CortanaIcon from '../assets/images/cortana.svg';
import FileExplorerIcon from '../assets/images/file_explorer.png';
import ToolBarContainer from './ToolBarContainer';
import TaskBarDynamicContainer from './TaskBarDynamicContainer';

function TaskbarContainer(){
    return(
        <div>
        <Navbar fixed="bottom" className={`${styles.TaskBar} ${styles.BackgroundBlur} shadow`}>
            <div className={`${styles.TaskBarIcon}`}> 
                <FontAwesomeIcon icon={faWindows} className={styles.TaskBarIconComponent}></FontAwesomeIcon> 
            </div> 
            <Nav className="mr-auto">
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={CortanaIcon} className= {styles.TaskBarIconComponent}></Image>
                </div>
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={FileExplorerIcon} className= {styles.TaskBarIconComponent}></Image>
                </div>
                <TaskBarDynamicContainer></TaskBarDynamicContainer>
            </Nav>

            <Nav>
                <ToolBarContainer></ToolBarContainer>
            </Nav>
            
        </Navbar>

        </div>
    );
}

export default TaskbarContainer;