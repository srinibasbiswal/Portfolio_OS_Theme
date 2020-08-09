import React from 'react';
import styles from '../../stylesheets/timeline.module.css';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from "@fortawesome/free-regular-svg-icons";
import KloudGin from '../../assets/images/KloudGin.png';
import Talspo from '../../assets/images/Talspo.png';
import Freelance from '../../assets/images/Freelance.png';

function ExperienceComponent(){
    return(
    <Card className={`shadow-lg bg-white rounded m-3`}>
            <Card.Body className={`row`}>
                <div className={`col-lg-10 mx-auto`}>          
                    <ul className={`${styles.timeline}`}>                        
                        <li className={`${styles.timeline_item} bg-white rounded ml-3 p-4 shadow`}>
                            <Image
                                className={styles.before}
                                src={KloudGin}
                                height={50}
                            />
                            <div className={`${styles.timeline_arrow}`}></div>
                            <h2 className={`h5 mb-0`}>Associate Software Developer</h2>
                            <span className={`font-weight-normal text-gray`}>
                                KloudGin<br/>
                            </span>
                            <span className={`small text-gray`}>
                                <FontAwesomeIcon icon={faClock} className={`mr-1`}></FontAwesomeIcon>
                                17 June, 2019 - Present
                            </span>
                            <p className={`text-small mt-2 font-weight-light`}>
                                I am a part of the Product Development team at KloudGin, where I have developed multiple API and implementaion modules of EAM and FSM.
                            </p>
                        </li>
                        <li className={`${styles.timeline_item} bg-white rounded ml-3 p-4 shadow`}>
                            <Image
                                className={styles.before}
                                src={Talspo}
                                height={50}
                            />
                            <div className={`${styles.timeline_arrow}`}></div>
                            <h2 className={`h5 mb-0`}>Web Developer</h2>
                            <span className={`medium text-gray`}>
                                Talspo <br/>
                            </span>
                            <span className={`small text-gray`}>
                                <FontAwesomeIcon icon={faClock} className={`mr-1`}></FontAwesomeIcon>
                                5 April, 2019
                            </span>
                            <p className={`text-small mt-2 font-weight-light`}>
                                I was a key member of the Frontend Development team where we developed the product from the initial phase.
                            </p>
                        </li>
                        <li className={`${styles.timeline_item} bg-white rounded ml-3 p-4 shadow`}>
                            <Image
                                className={styles.before}
                                src={Freelance}
                                height={50}
                            />
                            <div className={`${styles.timeline_arrow}`}></div>
                            <h2 className={`h5 mb-0`}>Freelance Developer</h2>
                            <span className={`small text-gray`}>
                                <FontAwesomeIcon icon={faClock} className={`mr-1`}></FontAwesomeIcon>
                                2017 - 2019 
                            </span>
                            <p className={`text-small mt-2 font-weight-light`}>
                                I was a freelance developer during my Bachelor's degree where I worked with different established companies like Prelude, Ediolon and Youngster's Worldwide.
                            </p>
                        </li>
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );

}

export default ExperienceComponent;