import React from 'react'
import { Card, Form, Container, Row, Col, Button } from 'react-bootstrap'
import styles from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWifi } from "@fortawesome/free-solid-svg-icons";

function VolumeBarComponent (){

    return(
        <Card.Body>
            <Card className={`${styles.BackgroundBlur} p-2`}>
                <Container className={`row`}>
                    <Col md={2}><FontAwesomeIcon icon={faWifi} size="2x"></FontAwesomeIcon></Col>
                    <Col md={10}>
                        Pied Pieper<br/>
                        Connected, Secured<br/>
                        <Button variant="primary" className={`float-right`} size="sm">Disconnect</Button>
                    </Col>
                </Container>
                
            </Card>
        </Card.Body>
    );

}

export default VolumeBarComponent;