import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';

 function DesktopContainer(){
     return (
         <div>
             <Container className ={styles.DesktopContainer}>
             </Container>
         </div>
     );
 }

 export default DesktopContainer;