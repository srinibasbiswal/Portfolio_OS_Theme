import React from 'react'
import { Card, Form } from 'react-bootstrap'
import styles from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function VolumeBarComponent (){

    return(
        <Card.Body>
            <Card className={`${styles.BackgroundBlur} p-2`}>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
                            <span> &nbsp; &nbsp;Volume</span>
                        </Form.Label>
                        <Form.Control type="range" />
                    </Form.Group>
                </Form>
            </Card>
        </Card.Body>
    );

}

export default VolumeBarComponent;