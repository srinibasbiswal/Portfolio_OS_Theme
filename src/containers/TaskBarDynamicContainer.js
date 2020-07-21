import React, { useState } from 'react';
import classes from '../stylesheets/style.module.css';
import TaskBarDynamicIcon from '../components/TaskBarDynamicIcon';

function TaskBarDynamicContainer() {

    const [dynamicApps, setDynamicApps] = useState({
        apps: [
            { name: 'Chrome', iconName: 'ChromeIcon', id: 1 }
        ]
    });

    return (
        <div className={classes.TaskBarContainer}>
            {dynamicApps.apps.map((app) =>
                <TaskBarDynamicIcon iconName={app.iconName} key={app.id}></TaskBarDynamicIcon>
            )}
        </div >
    );
}

export default TaskBarDynamicContainer;
