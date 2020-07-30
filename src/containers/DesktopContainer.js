import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import TaskbarContainer from './TaskbarContainer';
import DesktopIconContainer from './DesktopIconContainer';

 function DesktopContainer(){
     return (
         <div>
             <Container className ={styles.DesktopContainer}>
                 <DesktopIconContainer></DesktopIconContainer>
                 <TaskbarContainer></TaskbarContainer>
             </Container>
         </div>
     );
 }

 export default DesktopContainer;