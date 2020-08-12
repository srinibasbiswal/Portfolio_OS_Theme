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
        message: '',
        response: '',
        errorMessage: ''
    });

    const ErrorCode = {
        NAME_EMPTY : 'Please enter name.',
        EMAIL_EMPTY : 'Please enter email',
        MESSAGE_EMPTY : 'Please enter message',
        EMAIL_FAILED : 'Sorry! Email sending failed. Please connect through other mediums.'
    }

    const handleChange = (event) => {
        const target = event.target;
        setEmailResponse({[target.name] : target.value});
    }

    const handleSubmit = () => {
        setEmailResponse({errorMessage : ''});
        setEmailResponse({response : ''});
        const templateId = 'from_website';
        let templateParams = {            
            message_html: (emailResponse.message != null && emailResponse.message != '') 
                ? emailResponse.message 
                : setErrorMessage(ErrorCode.MESSAGE_EMPTY),
            senders_email: (emailResponse.message != null && emailResponse.message != '') 
                ? emailResponse.message 
                : setErrorMessage(ErrorCode.MESSAGE_EMPTY),
            from_name: (emailResponse.name != null && emailResponse.name != '') 
                ? emailResponse.name 
                : setErrorMessage(ErrorCode.NAME_EMPTY)
       }
       if (emailResponse.errorMessage == null || emailResponse.errorMessage == ''){
            // sendFeedback(templateId,  templateParams)
       }
    }

    const setErrorMessage = (errorCode) => {
        // setEmailResponse({response : `<Alert variant={danger}> ${[ErrorCode.NAME_EMPTY]} </Alert>`});
        setEmailResponse({response : 'asdas'})
        console.log(emailResponse)
    }    

    const sendFeedback =  (templateId, variables) => {
        window.emailjs.send(
          'default_service', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
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
                                <span> / <a target="_blank"  href="mailto:srinibasbiswal02@gmail.com" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal02@gmail.com</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <span> / <a target="_blank" href="https://www.linkedin.com/in/srinibasbiswal/" className={`stretched-link text-decoration-none text-secondary`}>in/srinibasbiswal</a>
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
                                <span> / <a target="_blank" href="https://github.com/srinibasbiswal" className={`stretched-link text-decoration-none text-secondary`}>srinibasbiswal</a>
                                </span>                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={`col-6`}>
                        <Card className={`shadow text-center m-2 ${styles.shadowOnHoverLarge}`}>
                            <Card.Body  className={`${styles.ContactIndividual}`}>
                                <FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
                                <span> / <a target="_blank" href="http://m.me/srinibas.biswal97" className={`stretched-link text-decoration-none text-secondary`}>srinibas.biswal97</a>
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
                                    <span>dasda</span>
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