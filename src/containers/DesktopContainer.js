import React from 'react';
import classes from '../stylesheets/style.module.css';
import TaskBar from './TaskBar';
import DesktopIconContainer from './DesktopIconContainer';

function DesktopContainer() {
    return (
        <div className={classes.DesktopContainer}>
            <DesktopIconContainer></DesktopIconContainer>
            <TaskBar></TaskBar>
        </div>
    );
}

export default DesktopContainer;
