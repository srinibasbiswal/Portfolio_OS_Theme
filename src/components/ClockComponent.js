import React from 'react';
import classes from '../stylesheets/style.module.css';

function ClockComponent() {
    var dateObj = new Date().toLocaleString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    var date = dateObj.split(',')[0].replace(new RegExp('/', 'g'), '-');
    var time = dateObj.split(',')[1];
    return (
        <div className={classes.ClockComponent}>
            <span className={classes.ClockInnerComponents}>
                {time}
            </span>
            <span className={classes.ClockInnerComponents}>
                {date}
            </span>
        </div>
    );
}

export default ClockComponent;
