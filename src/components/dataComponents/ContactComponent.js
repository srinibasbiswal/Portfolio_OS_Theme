import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import styles from '../../stylesheets/style.module.css';

function ContactComponent(){

    const [emailResponse, setEmailResponse] = useState({
        name : '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const target = event.target;
        setEmailResponse({[target.name] : target.value});
    }

    const handleSubmit = () => {
        console.log('inside handle submit');
        const templateId = 'from_website';
        sendFeedback(templateId, {message_html: emailResponse.message, from_name: emailResponse.name, reply_to: emailResponse.email})
    }
    

    const sendFeedback =  (templateId, variables) => {
        console.log('inside sendFeedback');
        window.emailjs.send(
          'default_service', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }
    return(
        <Card className={`shadow-lg bg-white rounded m-3`}>
            <Card.Body>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <span> / <a href="mailto:srinibasbiswal02@gmail.com" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <span> / <a href="https://www.linkedin.com/in/srinibasbiswal/" className={`stretched-link text-decoration-none text-secondary`}>in/srinibasbiswal</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                <span> / <a href="https://github.com/srinibasbiswal" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
                                <span> / <a href="http://m.me/srinibas.biswal97" className={`stretched-link text-decoration-none text-secondary`}>srinibas.biswal97</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className={`row d-flex`}>
                    <Card className={`col-10 mx-auto mt-5`}>
                        <Card.Body>
                            <Form >
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="John Doe" value={emailResponse.name} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' placeholder="name@example.com" value={emailResponse.email} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" name='message' rows="3" value={emailResponse.message} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlButton">
                                    <Button class="btn btn-primary" onClick={handleSubmit}>Submit</Button>
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