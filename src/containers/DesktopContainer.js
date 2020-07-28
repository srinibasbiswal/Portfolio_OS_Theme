import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import TaskbarContainer from './TaskbarContainer';

 function DesktopContainer(){
     return (
         <div>
             <Container className ={styles.DesktopContainer}>
                 <TaskbarContainer></TaskbarContainer>
             </Container>
         </div>
     );
 }

 export default DesktopContainer;