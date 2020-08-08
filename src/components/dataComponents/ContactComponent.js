import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import styles from '../../stylesheets/style.module.css';

function ContactComponent(){
    return(
        <Card className={`shadow-lg bg-white rounded m-3`}>
            <Card.Body>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span> / <a href="" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span> / <a href="" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span> / <a href="" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span> / <a href="" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className={`row d-flex`}>
                    <Card className={`col-10 mx-auto mt-5`}>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="John Doe" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlButton">
                                    <Button type="submit" class="btn btn-primary">Submit</Button>
                                </Form.Group>

                            </Form>

                        </Card.Body>
                    </Card>
                </div>
            </Card.Body>

        </Card>
    );

}

export default ContactComponent;