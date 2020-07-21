import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskbarStaticContainer from './TaskBarStaticContainer';
import TaskBarDynamicContainer from './TaskBarDynamicContainer';
import ToolBarContainer from './ToolBarContainer';

function TaskBar() {
    return (
        <div className={classes.TaskBar}>
            <TaskbarStaticContainer></TaskbarStaticContainer>
            <TaskBarDynamicContainer></TaskBarDynamicContainer>
            <ToolBarContainer></ToolBarContainer>
        </div>
    );
}

export default TaskBar;