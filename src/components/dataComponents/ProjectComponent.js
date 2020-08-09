import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';

function ProjectComponent(){
    return(
        <div className={`h-100 m-0 container`}>
            <div className={`text-center`}></div>
            <div className={`row`}>
                <div className={`col`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge} ${styles.ProjectCard}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >NoteStack</Card.Title>
                            <Card.Text>
                                A notes management platform/application where students can share their course notes easily with each other.<br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Android
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Java
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Firebase
                                </Badge>
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Firestore
                                </Badge>
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`col`}>
                <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge} ${styles.ProjectCard}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Bus Management</Card.Title>
                            <Card.Text>
                                A bus management system for ITER, BBSR which helps to know different bus routes and makes easy to decode which route to take.
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Python
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Tkinter
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Firebase
                                </Badge>
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className={`row`}>
                <div className={`col h-100`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge} ${styles.ProjectCard}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Flight Ticket Saver</Card.Title>
                            <Card.Text>
                                A flight booking system which was dealing with the bumping of seats with the help of Etherium Smart Contract. This was a project for IATA Hackathon.
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Python
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    DJANGO
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    HTML
                                </Badge>
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    CSS
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Javascript
                                </Badge>
                            </Card.Text>
                            <Button variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`col h-100`}>
                    <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge} ${styles.ProjectCard}`}>
                        <Card.Body className={`text-center`}>
                            <Card.Title >Seat Swapper</Card.Title>
                            <Card.Text>
                                A train seat swapping system where we can get our desired train seat without any extra payment. This was a project for IBS hackathon.
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Java
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    MYSql
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    BlockChain
                                </Badge>
                                <br/>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    HTML
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    CSS
                                </Badge>
                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                    Javascript
                                </Badge>
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