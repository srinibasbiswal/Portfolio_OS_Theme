import React from 'react';
import { Card, Image, InputGroup, FormControl, Figure, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../stylesheets/style.module.css';
import CortanaIcon from '../assets/images/cortana.svg';

function CortanaComponent(){
    return(
    
    <Card.Body>
        <Card className={`${styles.BackgroundBlur} ${styles.TaskBarPopupCard} m-2 d-flex`}>
            <InputGroup className={`d-flex my-auto`}>                        
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

        <Card className={`${styles.BackgroundBlur}`}>
            <Card.Body className={`text-center`}>
                <Figure>
                    <Figure.Image
                        width={100}
                        height={100}
                        alt="Cortana Icon"
                        src={CortanaIcon}
                    />
                    <Figure.Caption className={styles.CortanaText}>
                       Hello. What can I do for you ?
                    </Figure.Caption>
                </Figure>
            </Card.Body>
        </Card>

    </Card.Body>
    );

}

export default CortanaComponent;