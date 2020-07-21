import React, { useState } from 'react';
import classes from '../stylesheets/style.module.css';
import ToolBarIcon from '../components/ToolBarIcon';
import ClockComponent from '../components/ClockComponent';
import NotificationIcon from '../components/NotificationIcon'
import { faChevronUp, faWifi, faVolumeUp, faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";


function ToolBarContainer() {
    const [toolBarIcons, setToolBarIcons] = useState({
        icons: [
            { name: 'Show More', iconName: faChevronUp, id: 1 },
            { name: 'Battery Indicator', iconName: faBatteryThreeQuarters, id: 2 },
            { name: 'Wifi Indicator', iconName: faWifi, id: 3 },
            { name: 'Volume Indicator', iconName: faVolumeUp, id: 4 }
        ]
    });

    return (
        <div className={classes.ToolBarContainer}>
            <NotificationIcon></NotificationIcon>
            <ClockComponent></ClockComponent>
            {toolBarIcons.icons.reverse().map((icon) =>
                <ToolBarIcon iconName={icon.iconName} key={icon.id}></ToolBarIcon>
            )}

        </div >
    );

}

export default ToolBarContainer;
