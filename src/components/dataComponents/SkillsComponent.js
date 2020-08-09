import React from 'react';
import { Card, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons";

function SkillsComponent(){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            Always eager to learn more.
          </Popover.Content>
        </Popover>
      );

    return(
        <div className={`h-100 m-0 container`}>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Lanuage Proficiency</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Python</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Java</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>JavaScript</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>ReactJS</Button>
                                                
                    </div>                 
                    <div  className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Firebase</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>HTML</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>CSS</Button>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                        </OverlayTrigger>
                    </div>   
                </Card.Body>
            </Card>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Tools Proficiency</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Git</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>PyCharm</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Eclipse</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>IntelliJ IDEA</Button>                        
                                                
                    </div>                 
                    <div  className={`d-flex justify-content-center`}>
                    <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Postman</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                        </OverlayTrigger>
                    </div>   
                </Card.Body>
            </Card>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Database Proficiency</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>MySQL</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>MongoDB</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Firestore</Button>                                                
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                        </OverlayTrigger>
                    </div>   
                </Card.Body>
            </Card>

        </div>

    );
}

export default SkillsComponent;