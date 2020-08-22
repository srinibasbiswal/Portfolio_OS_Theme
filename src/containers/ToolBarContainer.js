import React, { useState } from 'react';
import ClockComponent from '../components/ClockComponent';
import styles from '../stylesheets/style.module.css'; 
import { faChevronUp, faWifi, faVolumeUp, faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import ToolBarComponent from '../components/ToolBarComponent';
import TaskBarComponentPopup from './TaskBarComponentPopup';
import {ComponentNames} from '../components/dataComponents/Enums';

function ToolBarContainer( props ){
    console.log(props)

    const [toolBarIcons, setToolBarIcons] = useState({
        icons: [
            { name: 'Show More', iconName: faChevronUp, id: 1 },
            { name: 'Battery Indicator', iconName: faBatteryThreeQuarters, id: 2 },
            { name: 'Wifi Indicator', iconName: faWifi, id: 3 },
            { name: 'Volume Indicator', iconName: faVolumeUp, id: 4 }
        ]
    });

    return(
        <React.Fragment>
            {toolBarIcons.icons.map((icon, index) =>
                <div className={styles.ToolBarIcon} key={index}>
                    <ToolBarComponent iconName={icon.iconName}></ToolBarComponent>
                </div>
            )}
            <div  onClick={props.onClickEvent}> 
                <ClockComponent ></ClockComponent>
                {props.taskBarComponentPopupStatus.popUpStates.ClockAndCalendar
                    ? <TaskBarComponentPopup taskBarPopupData={ComponentNames.ClockAndCalendar}></TaskBarComponentPopup>
                    : null
                }
            </div>
        </React.Fragment>
        );
}

export default ToolBarContainer;