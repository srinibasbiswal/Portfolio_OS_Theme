import React from 'react';
import { Card, Image } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import bgstyles from '../../stylesheets/BGStyle.module.css';
import {Person,AboutMeData} from './dataSet';

function AboutComponent(){

    return(
        <Card className={` bg-white rounded m-md-5 h-md-75 ${bgstyles.ColorShadow_LG} ${styles.M_SD}`}>
            <Card.Body className={`row ${bgstyles.ripple_background} rounded`}>                
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
                <div className={`col-md-4 text-center ${styles.Hide_MD}`}>
                    <Image 
                        src={Person.profilePic}
                        height={100}
                        alt={'Profile Pic'}
                        className={`${styles.myPic} my-auto`}
                    />                    
                </div>
                <div className={`col-md-8 d-flex`}>                    
                    <blockquote className={`blockquote text-center my-auto`}>
                        <h2 className={`${styles.Hide_SD}`}>{Person.name}</h2>
                        <h3 className={`${styles.Hide_MD}`}>{Person.name}</h3>
                        <p className={`lead ${styles.SD_Lead}`}>
                            {AboutMeData.intro}
                        </p>
                        <p className={`${styles.P_Small}`}>
                            <small>
                                {AboutMeData.desc}
                            </small>
                        </p>
                        <p className={`${styles.P_Small}`}>
                            <small>
                                {AboutMeData.outro}
                            </small>
                        </p>
                    </blockquote>
                </div>
                <div className={`col-md-4 text-center d-md-flex ${styles.Hide_SD}`}>
                    <Image 
                        src={Person.profilePic}
                        height={200}
                        alt={'Profile Pic'}
                        className={`${styles.myPic} my-auto`}
                    />
                </div>
                <div></div>
            </Card.Body>
        </Card>
    );

}

export default AboutComponent;