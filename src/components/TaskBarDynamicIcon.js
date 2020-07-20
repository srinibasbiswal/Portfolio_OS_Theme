import React, { useState } from 'react';
import classes from '../stylesheets/style.module.css';

function TaskBarDynamicIcon(props) {
    return (
        <div className={`${classes.TaskBarIcon}`}>
            <div className={classes[props.iconName]}></div>
        </div>
    );
}

export default TaskBarDynamicIcon;