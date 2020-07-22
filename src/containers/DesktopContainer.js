import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskBar from './TaskBar';

function DesktopContainer() {
    return (
        <div className={classes.DesktopContainer}>
            <TaskBar></TaskBar>
        </div>
    );
}

export default DesktopContainer;
