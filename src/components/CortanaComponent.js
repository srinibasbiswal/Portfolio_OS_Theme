import React from 'react';
import { Card, Image, InputGroup, FormControl, Figure, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function CortanaComponent(){
    return(
    
    <Card.Body>
        <Card>
            <InputGroup className={`d-flex`}>                        
                <FormControl
                    placeholder="Type here to search"
                    aria-label="Type here to search"
                    className={`col-md-8 ml-auto mr-0 text-center mt-2`}
                />
                <InputGroup.Append className={`mr-auto mt-2`}>
                    <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> 
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            
        </Card>

    </Card.Body>
    );

}

export default CortanaComponent;