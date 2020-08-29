import React from 'react';
import { Card, OverlayTrigger, Button, Popover } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {SkillSet} from '../dataComponents/dataSet';

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
            {
                SkillSet.map((skill, index) => {
                    return(
                        <Card className={`row m-3 ${styles.SkillCard}`}>
                            <Card.Title className={`m-2 text-center`}>{skill.name}</Card.Title>
                            <Card.Body className={`d-flex`}>
                                <div className={`mx-auto d-flex flex-wrap justify-content-center w-75`}>
                                    {skill.values.map((value, index) => {
                                        return(
                                            <div>
                                                <Button className={`btn btn-primary m-2 ${styles.SkillBadge}`}>{value}</Button>
                                            </div>
                                        )
                                    })}
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <FontAwesomeIcon icon={faPlusCircle} className={`mt-3`}  size="2x" color="#0069d9"></FontAwesomeIcon>
                                    </OverlayTrigger>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>
    );
}

export default SkillsComponent;