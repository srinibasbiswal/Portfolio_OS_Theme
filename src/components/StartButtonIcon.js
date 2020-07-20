import React from 'react';
import classes from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

function StartButtonIcon() {
    return (
        <div className={`${classes.StartButton} ${classes.TaskBarIcon}`}>
            <FontAwesomeIcon icon={faWindows} className={classes.StartButtonIcon}></FontAwesomeIcon>
        </div>
    );
}

export default StartButtonIcon;