import React from 'react';
import classes from '../stylesheets/style.module.css';

function DesktopIcon(props) {

    return (
        <div className={classes.DesktopIconBox}>
            <div className={`${classes[props.iconName]} ${classes.DesktopIcon}`}></div>
            <div className={classes.desktopIconName}>{props.name}</div>
        </div>
    );

}

export default DesktopIcon;
