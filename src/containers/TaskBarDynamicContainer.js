import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import ChromeIcon from '../assets/images/chrome.svg';

function TaskBarDynamicContainer(){

    const [taskBarDynamicApps, settaskBarDynamicApps] = useState({ 
        apps: [ 
            { name: 'Chrome', iconName: ChromeIcon, id: 1 } 
        ] 
    }); 

    return(
        <React.Fragment>
            {taskBarDynamicApps.apps.map((app, index) => 
                <div className={`${styles.TaskBarIcon}`} key={index}> 
                    <Image src={app.iconName} className= {styles.TaskBarIconComponent}></Image>
                </div> 
            )}
        </React.Fragment>
    );
}

export default TaskBarDynamicContainer;