import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-regular-svg-icons";
import styles from '../../stylesheets/style.module.css';

function ContactComponent(){

    const [emailResponse, setEmailResponse] = useState({
        template : {            
            name : '',
            email: '',
            message: '',
            response: ''
        }
    });

    const handleChange = (event) => {
        const target = event.target;
        var templateMeta = emailResponse.template;
        templateMeta[target.name] = target.value;
        setEmailResponse({template : templateMeta});
        console.log(emailResponse);
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();            
            setValidated(true);
        }else{
            event.preventDefault();
            event.stopPropagation();
            const templateId = 'from_website';
            let templateParams = {            
                message: emailResponse.template.message,
                sender_email: emailResponse.template.email,
                sender_name: emailResponse.template.name
            }
            console.log(templateParams);
            sendFeedback(templateId,  templateParams)
        }
    }  

    const sendFeedback =  (templateId, variables) => {
        window.emailjs.send(
          'default_service', templateId,
          variables
          ).then(res => {
            var templateMeta = {            
                name : '',
                email: '',
                message: '',
                response: <Alert variant="success" className={`mx-auto text-center`}> Message sent successfully! </Alert>
            }
            setEmailResponse({template : templateMeta});
            console.log(emailResponse);
        })
          .catch(err => {
              console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
              var templateMeta = emailResponse.template;
              templateMeta.response = <Alert variant="danger" className={`mx-auto text-center`}> Sorry! Couldn't send message. Please connect through other mediums. </Alert>
              setEmailResponse({template : templateMeta })
            })
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
                            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                                <Form.Group>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control required  type="text" name='name' placeholder="John Doe" value={emailResponse.template.name} onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control required type="email" name='email' placeholder="name@example.com" value={emailResponse.template.email} onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control required as="textarea" name='message' rows="3" value={emailResponse.template.message} onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the message.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {emailResponse.template.response}
                                <Form.Group controlId="exampleForm.ControlButton" className={`d-flex text-center`}>
                                    
                                    <button class="btn btn-primary mx-auto" type='submit' >Submit</button>                                    
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