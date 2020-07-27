import React from 'react';
import classes from '../stylesheets/style.module.css';

function TopPanelComponent(props) {
    return (
        <div>
            <div className={classes.AppHeader}>
                <div className={classes.AppNameHeader}> {props.AppName} </div>
                <div className={AppExplorerControlButtons}>
                    <div className={className.MinimizeButton}></div>
                    <div className={className.MaximizeButton}></div>
                    <div className={className.CloseButton}></div>
                </div>
            </div>
            <div className={classes.TopPanelStatic}>

            </div>
        </div>
    );
}

export default TopPanelComponent;
