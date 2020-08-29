import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import styles from '../stylesheets/style.module.css';

function ClockAndCalendar(){

    return(
        <Card.Body>
            <Card className={`${styles.TaskBarPopupCard} m-2 d-flex`}>
                <InfiniteCalendar
                    width={400}
                    height={300}
                    selected={new Date()}
                    className={`p-2 mx-auto`}
                />
            </Card>
        </Card.Body>
    );

}

export default ClockAndCalendar;