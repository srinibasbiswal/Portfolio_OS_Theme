import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskbarStaticContainer from './TaskBarStaticContainer';

function TaskBarContainer() {
    return (
        <div className={classes.TaskBar}>
            <TaskbarStaticContainer></TaskbarStaticContainer>
        </div>
    );
}

export default TaskBarContainer;