import React from 'react';
import StartButtonComponent from '../components/StartButtonComponent';
import classes from '../stylesheets/style.module.css';

function TaskBarContainer() {
    return (
        <div className={classes.TaskBarContainer}>
            <StartButtonComponent></StartButtonComponent>
        </div>
    );
}

export default TaskBarContainer;