import React from 'react';
import classes from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from "@fortawesome/free-regular-svg-icons";

function NotificationIcon() {
    return (
        <div className={`${classes.NotificationIconBox}`}>
            <FontAwesomeIcon icon={faBell} className={classes.NotificationIcon}></FontAwesomeIcon>
        </div>
    );
}

export default NotificationIcon;
