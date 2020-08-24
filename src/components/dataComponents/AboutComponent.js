import React from 'react';
import { Card, Image } from 'react-bootstrap';

import {Person,AboutMeData} from './dataSet';

function AboutComponent(){

    return(
        <Card className={`shadow-lg bg-white rounded m-5 h-75`}>
            <Card.Body className={`row`}>
                <div className={`col-md-8 d-flex`}>                    
                    <blockquote className={`blockquote text-center my-auto`}>
                        <h2>{Person.name}</h2>
                        <p className={`lead`}>
                            {AboutMeData.intro}
                        </p>
                        <p>
                            <small>
                                {AboutMeData.desc}
                            </small>
                        </p>
                        <p>
                            <small>
                                {AboutMeData.outro}
                            </small>
                        </p>
                    </blockquote>
                </div>
                <div className={`col-md-4 text-center d-flex`}>
                    <Image 
                        src={Person.profilePic}
                        height={200}
                        alt={'Profile Pic'}
                        className={`my-auto`}
                    />
                </div>
                <div></div>
            </Card.Body>
        </Card>
    );

}

export default AboutComponent;