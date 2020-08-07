import React from 'react';
import { Card, Image } from 'react-bootstrap';
import justAPic from '../../assets/images/justAPic.svg';

function AboutComponent(){

    return(
        <Card className={`shadow-lg bg-white rounded m-5 h-75`}>
            <Card.Body className={`row`}>
                <div className={`col-md-6 d-flex`}>
                    <blockquote className={`blockquote text-center my-auto`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    Someone famous in Source Title 
                    </blockquote>
                </div>
                <div className={`col-md-6 text-center d-flex`}>
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