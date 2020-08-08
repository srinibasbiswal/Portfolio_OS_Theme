import React from 'react';
import { Card, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons";

function SkillsComponent(){
    const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );

    return(
        <div className={`h-100 m-0 container`}>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Card Title</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                                                
                    </div>                 
                    <div  className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                        </OverlayTrigger>
                    </div>   
                </Card.Body>
            </Card>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Card Title</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                                                
                    </div>                 
                    <div  className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                        </OverlayTrigger>
                    </div>   
                </Card.Body>
            </Card>
            <Card className={`row m-3 ${styles.SkillCard}`}>
                <Card.Title className={`m-2 text-center`}>Card Title</Card.Title>
                <Card.Body>
                    <div className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                                                
                    </div>                 
                    <div  className={`d-flex justify-content-center`}>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
                        <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>Profile</Button>
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