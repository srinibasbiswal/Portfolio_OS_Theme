import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Card, Image, InputGroup, FormControl, Figure, Button } from 'react-bootstrap';
import MailIcon from '../assets/images/MailIcon.png';
import PowerOff from '../assets/images/PowerOff.png';
import AboutMe from '../assets/images/AboutMeIcon.png';
import CalendarIcon from '../assets/images/CalendarIcon.svg';
import NotesIcon from '../assets/images/NotesIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

function StartMenuContainer(props){
    return(
       <Card className={`${styles.StartMenu}`}>
           <Card.Body>
               <Card className={` ${styles.ProfileCard} d-flex ${styles.BackgroundBlur} m-2`}>
                   <Image className={`img-circle rounded-circle mx-auto ${styles.CardImgTop}`} src={AboutMe}></Image>
                    <span className={`small text-center`}>{props.greetingMsg} Srinibas</span>
                    <Image className={`${styles.CloseButton} img-circle rounded-circle`} src={PowerOff}></Image>
                    {/* <InputGroup className={`d-flex`}>                        
                        <FormControl
                        placeholder="Type here to search"
                        aria-label="Type here to search"
                        className={`col-md-8 ml-auto mr-0 text-center mt-2`}
                        />
                        <InputGroup.Append className={`mr-auto mt-2`}>
                            <InputGroup.Text id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> 
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}                    
                    <p className={`text-center small`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
               </Card>
               <Card className = {`${styles.PinnedAppsCard} ${styles.BackgroundBlur} m-2`}>
                   <div className={`m-2`}>
                        <span class="badge badge-dark"><FontAwesomeIcon icon={faThumbtack}></FontAwesomeIcon> Pinned Apps </span>
                   </div>
                   <div className={`d-flex justify-content-around shadow m-2`}>
                        <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                            <Figure.Image
                                width={50}
                                src={MailIcon}
                                className={`mb-0`}
                            />
                            <Figure.Caption className={styles.fontColorWhite}>
                                Mail
                            </Figure.Caption>
                        </Figure>
                        <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                            <Figure.Image
                                width={50}
                                src={CalendarIcon}
                                className={`mb-0`}
                            />
                            <Figure.Caption className={styles.fontColorWhite}>
                                Calendar
                            </Figure.Caption>
                        </Figure>
                        <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                            <Figure.Image
                                width={50}
                                src={NotesIcon}
                                className={`mb-0`}
                            />
                            <Figure.Caption className={styles.fontColorWhite}>
                                Notes
                            </Figure.Caption>
                        </Figure>                    

                    </div>

               </Card>
               <Card className = {`${styles.AllAppsCard} ${styles.BackgroundBlur} m-2`}>

               </Card>
           </Card.Body>
       </Card>
    );
}

export default StartMenuContainer;

