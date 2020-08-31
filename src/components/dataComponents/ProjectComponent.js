import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import {Projects} from '../dataComponents/dataSet';

function ProjectComponent(){

    return(
        <div className={`h-100 m-0 container`}>
            <div className={`text-center`}></div>
            <div className={`row`}>
            {
                Projects.map((project, index) => {
                    return(
                    <div className={`col-sm-12 col-md-6`}>
                        <Card className={`m-4 rounded shadow ${styles.shadowOnHoverLarge} ${styles.ProjectCard}`}>
                            <Card.Body className={`text-center`}>
                                <Card.Title >{project.projectName}</Card.Title>
                                <Card.Text>
                                    <p>
                                        {project.description}
                                    </p>                               
                                    {project.technologyStack.map((tech, ind) => {
                                        return(
                                            <React.Fragment>
                                                <Badge  variant="primary" className={`${styles.UnsetLineHeight} m-1`}>
                                                    {tech}
                                                </Badge>
                                            </React.Fragment>
                                        )                                                                                
                                    })}
                                </Card.Text>
                                <Button variant="primary" href={project.link} target='_blank'>View Project</Button>
                            </Card.Body>
                        </Card>
                    </div>  
                    )                  
                })
            }                
            </div>
        </div>
    );
}

export default ProjectComponent;