import React from 'react';
import styles from '../../stylesheets/timeline.module.css';
import bgstyles from '../../stylesheets/BGStyle.module.css';
import customStyles from '../../stylesheets/style.module.css';
import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from "@fortawesome/free-regular-svg-icons";
import {Experiences} from '../../dataSets/dataSet/dataSet';

function ExperienceComponent(){
    return(
        <Card className={`bg-white rounded m-md-5 ${bgstyles.ColorShadow_LG}  ${customStyles.M_SD}`}>
            <div className={`${bgstyles.area}`} >
                    <ul className={`${bgstyles.circles}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div > 
            <Card.Body className={`rounded row ${bgstyles.ripple_background}`}>
                
                <div className={`col-lg-10 mx-auto`}>  
                           
                    <ul className={`${styles.timeline}`}>       
                        {
                            Experiences.map((experience, index) => {                              
                                return(
                                
                                <li className={`${styles.timeline_item} bg-white rounded ml-3 p-4 shadow`}>
                                    <Image
                                        className={styles.before}
                                        src={experience.organizationPicture}
                                        height={50}
                                        alt={'Org Pic'}
                                    />
                                    <div className={`${styles.timeline_arrow}`}></div>
                                    <h2 className={`h5 mb-0`}>{experience.position}</h2>
                                    {experience.organization? 
                                        <span className={`font-weight-normal text-gray`}> 
                                            {experience.organization}
                                            <br/>
                                        </span>
                                    : null}                                                                           
                                         
                                    <span className={`small text-gray`}>
                                        <FontAwesomeIcon icon={faClock} className={`mr-1`}></FontAwesomeIcon>
                                        {experience.startDate ? experience.startDate : null} 
                                        {experience.endDate ? ' - '+experience.endDate : null}
                                    </span>
                                    <p className={`text-small mt-2 font-weight-light`}>
                                        {experience.description}
                                    </p>
                                </li>   
                                )                         
                            })
                        }
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );

}

export default ExperienceComponent;