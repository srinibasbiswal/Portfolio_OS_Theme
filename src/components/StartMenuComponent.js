import React from 'react';
import styles from '../stylesheets/style.module.css';
import { Card, Image, InputGroup, FormControl, Figure, Button } from 'react-bootstrap';
import MailIcon from '../assets/images/MailIcon.png';
import PowerOff from '../assets/images/PowerOff.png';
import AboutMe from '../assets/images/AboutMeIcon.png';
import CalendarIcon from '../assets/images/CalendarIcon.svg';
import CameraIcon from '../assets/images/CameraIcon.png';
import WeatherIcon from '../assets/images/WeatherIcon.png';
import VideoIcon from '../assets/images/VideoIcon.png';
import SettingsIcon from '../assets/images/SettingsIcon.png';
import NotesIcon from '../assets/images/NotesIcon.png';
import MusicIcon from '../assets/images/MusicIcon.png';
import CalculatorIcon from '../assets/images/CalculatorIcon.png';
import ClockIcon from '../assets/images/ClockIcon.png';
import ChromeIcon from '../assets/images/chrome.svg';
import ImagesIcon from '../assets/images/ImagesIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack, faRocket } from '@fortawesome/free-solid-svg-icons';

function StartMenuComponent(props){
    return(      
        
            <Card.Body>
                <Card className={` ${styles.ProfileCard} d-flex ${styles.TaskBarPopupCard} m-2`}>
                    <Image className={`img-circle rounded-circle mx-auto ${styles.CardImgTop}`} src={AboutMe}></Image>
                        <span className={`small text-center`}>{props.greetingMsg} Srinibas</span>
                        <Image className={`${styles.CloseButton} img-circle rounded-circle`} src={PowerOff}></Image>                    
                        <p className={`text-center small`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                </Card>
                <Card className = {`${styles.PinnedAppsCard} ${styles.TaskBarPopupCard} m-2`}>
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
                <Card className = {`${styles.AllAppsCard} m-2 ${styles.TaskBarPopupCard}`}>
                        <div className={`m-2`}>
                            <span class="badge badge-dark"><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> All Apps </span>
                    </div>
                    <div className={`d-flex justify-content-around shadow m-2`}>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={CameraIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Camera
                                </Figure.Caption>
                            </Figure>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={ClockIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Clock
                                </Figure.Caption>
                            </Figure>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={CalculatorIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Calculator
                                </Figure.Caption>
                            </Figure>                   
                        </div>

                        <div className={`d-flex justify-content-around shadow m-2`}>
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
                                    src={ChromeIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Chrome
                                </Figure.Caption>
                            </Figure>
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
                        </div>
                            
                        <div className={`d-flex justify-content-around shadow m-2`}>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={MusicIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Music
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
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={ImagesIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Photos
                                </Figure.Caption>
                            </Figure>                   
                        </div>

                        <div className={`d-flex justify-content-around shadow m-2`}>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={SettingsIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Settings
                                </Figure.Caption>
                            </Figure>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={VideoIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Video
                                </Figure.Caption>
                            </Figure>
                            <Figure className={`border rounded ${styles.StartMenuFigure} text-center`}>
                                <Figure.Image
                                    width={50}
                                    src={WeatherIcon}
                                    className={`mb-0`}
                                />
                                <Figure.Caption className={styles.fontColorWhite}>
                                    Weather
                                </Figure.Caption>
                            </Figure>                   
                        </div>

                                    
                </Card>
            </Card.Body>       

    );

}

export default StartMenuComponent;

