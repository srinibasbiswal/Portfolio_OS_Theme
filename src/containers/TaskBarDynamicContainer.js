import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css'; 
import ChromeIcon from '../assets/images/chrome.svg';
import AppModal from '../components/AppModal';
import ChromeComponent from '../components/ChromeComponent';

function TaskBarDynamicContainer(){

    const [taskBarDynamicApps, settaskBarDynamicApps] = useState({ 
        apps: [ 
            { 
                name: 'Chrome', 
                iconName: ChromeIcon, 
                id: 1 ,
                modalType : 'componentData',
                modalShow: false,
                modalId : 'chromeModal',
                componentData : ChromeComponent
            } 
        ] 
    }); 

    const setModalShowValue = (index) => {
        console.log("Changing")
        var appDetailMeta = taskBarDynamicApps.apps[index];
        appDetailMeta.modalShow = !appDetailMeta.modalShow;
        var appsMeta = taskBarDynamicApps.apps;
        appsMeta[index] = appDetailMeta;
        settaskBarDynamicApps({apps : appsMeta});
    }

    const closeModal = (index) => {
        var appDetailMeta = taskBarDynamicApps.apps[index];
        appDetailMeta.modalShow = false;
        var appsMeta = taskBarDynamicApps.apps;
        appsMeta[index] = appDetailMeta;
        settaskBarDynamicApps({apps : appsMeta});
    }

    return(
        <React.Fragment>
            {taskBarDynamicApps.apps.map((app, index) => {
                return(
                <React.Fragment>
                    <div className={`${styles.TaskBarIcon}`} key={index}  
                        onClick={() => setModalShowValue(index)}> 
                        <Image src={app.iconName} className= {styles.TaskBarIconComponent}></Image>
                    </div> 
                    <AppModal
                        name={app.name}
                        iconname={app.iconName}
                        show={app.modalShow}                            
                        onHide={() => closeModal(index)}
                        modaldetails={app}
                    />
                </React.Fragment>
                )}
            )}
        </React.Fragment>
    );
}

export default TaskBarDynamicContainer;