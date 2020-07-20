import React from 'react';
import classes from '../stylesheets/style.module.css';
import StartButtonIcon from '../components/StartButtonIcon';
import CortanaIcon from '../components/CortanaIcon';
import FileExplorerIcon from '../components/FileExplorerIcon';


function TaskBarStaticContainer() {
    return (
        <div className={classes.TaskBarContainer}>
            <StartButtonIcon></StartButtonIcon>
            <CortanaIcon></CortanaIcon>
            <FileExplorerIcon></FileExplorerIcon>
        </div>
    );
}

export default TaskBarStaticContainer;