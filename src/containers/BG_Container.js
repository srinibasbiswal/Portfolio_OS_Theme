import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskBar from './TaskBar';

function BG_Container() {
    return (
        <div className={classes.BG_Container}>
            <TaskBar></TaskBar>
        </div>
    );
}

export default BG_Container;