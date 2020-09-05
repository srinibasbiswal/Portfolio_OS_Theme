import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import styles from '../../stylesheets/style.module.css';
import bgstyles from '../../stylesheets/BGStyle.module.css';
import {Projects} from '../dataComponents/dataSet';

function ProjectComponent(){

    return(
        <div className={`h-100 m-0 container ${bgstyles.ColorShadow_LG}`}>
            <Card>
                <div className={`row ${bgstyles.ripple_background} rounded`}>                
                    <ul className={`${bgstyles.circles}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>               
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
            </Card>
        </div>
    );
}

export default ProjectComponent;