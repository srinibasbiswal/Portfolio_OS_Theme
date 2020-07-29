import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import CortanaIcon from '../assets/images/cortana.svg';
import FileExplorerIcon from '../assets/images/file_explorer.png';
import ClockComponent from '../components/ClockComponent';

function TaskbarContainer(){
    return(
        <div>
        <Navbar bg="dark" variant="dark" fixed="bottom" className={styles.TaskBar}>
            <div className={`${styles.TaskBarIcon}`}> 
                <FontAwesomeIcon icon={faWindows} className={styles.StartButtonIcon}></FontAwesomeIcon> 
            </div> 
            <Nav className="mr-auto">
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={CortanaIcon} className= {styles.CortanaIcon}></Image>
                </div>
                <div className={`${styles.TaskBarIcon}`}> 
                    <Image src={FileExplorerIcon} className= {styles.FileExplorerIcon}></Image>
                </div>
            </Nav>
            <Nav>
                <div> 
                    <ClockComponent></ClockComponent>
                </div>
            </Nav>
        </Navbar>

        </div>
    );
}

export default TaskbarContainer;