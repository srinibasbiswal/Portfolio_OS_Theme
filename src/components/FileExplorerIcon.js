import React from 'react'
import classes from '../stylesheets/style.module.css';

function FileExplorerIcon() {
    return (
        <div className={`${classes.TaskBarIcon}`}>
            <div className={`${classes.FileExplorerIcon}`}></div>
        </div>
    );
}

export default FileExplorerIcon;