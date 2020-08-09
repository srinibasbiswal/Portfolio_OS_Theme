import React from 'react';
import { Card, Image } from 'react-bootstrap';
import justAPic from '../../assets/images/justAPic.svg';

function AboutComponent(){

    return(
        <Card className={`shadow-lg bg-white rounded m-5 h-75`}>
            <Card.Body className={`row`}>
                <div className={`col-md-8 d-flex`}>                    
                    <blockquote className={`blockquote text-center my-auto`}>
                        <h2>Srinibas Biswal</h2>
                        <p className={`lead`}>I'm a techno-functional Software Developement Engineer from India.</p>
                        <p><small>I enjoy taking complex problems and convertin to an usable format. My major domains are Web Devleopment and Python Prgramming.</small></p>
                        <p><small>When I'm not coding, you will find me watching an episode of The Office or travelling to a new place.</small></p>
                    </blockquote>
                </div>
                <div className={`col-md-4 text-center d-flex`}>
                    <Image 
                        src={justAPic}
                        height={200}
                        className={`my-auto`}
                    />
                </div>
                <div></div>
            </Card.Body>
        </Card>
    );

}

export default AboutComponent;