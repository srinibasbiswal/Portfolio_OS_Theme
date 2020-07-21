import React from 'react';
import classes from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToolBarIcon(props) {
    return (
        <div className={`${classes.ToolBarIconBox}`}>
            <FontAwesomeIcon icon={props.iconName} className={classes.ToolBarIcon}></FontAwesomeIcon>
        </div >
    );
}

export default ToolBarIcon;
