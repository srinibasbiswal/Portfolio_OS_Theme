import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskbarStaticContainer from './TaskBarStaticContainer';
import TaskBarDynamicContainer from './TaskBarDynamicContainer';

function TaskBar() {
    return (
        <div className={classes.TaskBar}>
            <TaskbarStaticContainer></TaskbarStaticContainer>
            <TaskBarDynamicContainer></TaskBarDynamicContainer>
        </div>
    );
}

export default TaskBar;