import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import TaskbarContainer from './TaskbarContainer';
import DesktopIconContainer from './DesktopIconContainer';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

 function DesktopContainer(){
     return (
         <div>
            <ContextMenuTrigger id="same_unique_identifier">
                <Container className ={styles.DesktopContainer}>
                    <DesktopIconContainer></DesktopIconContainer>
                    <TaskbarContainer></TaskbarContainer>
                </Container>
            </ContextMenuTrigger>

            <ContextMenu id="same_unique_identifier">
                <MenuItem data={'th1'}>
                ContextMenu Item 1
                </MenuItem>
                <MenuItem data={'th2'} >
                ContextMenu Item 2
                </MenuItem>
                <MenuItem divider />
                <MenuItem data={'th3'}>
                ContextMenu Item 3
                </MenuItem>
            </ContextMenu>
       </div>
     );
 }

 export default DesktopContainer;