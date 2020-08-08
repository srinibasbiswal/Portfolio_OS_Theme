import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';

function ProjectComponent(){
    return(
        <div className={`h-100 m-0 container`}>
            <div className={`text-center`}></div>
            <div className={`row`}>
                <div className={`col`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`col`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className={`row`}>
                <div className={`col h-100`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`col h-100`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProjectComponent;