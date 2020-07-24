import React from 'react';
import classes from '../stylesheets/style.module.css';

function SidePanelRowComponent(props) {

    return (

        <div className={`${classes[props.hierarchyLevel]} ${classes.SidePanelRow}`}>
            <div className={`${classes[props.iconName]} ${classes.SidePanelIcon}`}></div>
            <div className={classes.SidePanelRowText}> {props.rowName} </div>
        </div>
    );

}
export default SidePanelRowComponent;
