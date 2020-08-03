import React, { useState } from 'react';
import styles from '../stylesheets/style.module.css';
import DesktopIconComponent from './DesktopIconComponent';

function AppExplorerDataPanel(props) {
    
    return (        
        <div className={`${styles.AppExplorerDataPanel}`}>
            {
                  props.modaldetails.data.map((dataComponent, index) => {
                     return(
                        <DesktopIconComponent
                            className={`${styles.AppExplorerDataPanel}`}
                            captioncolor = 'fontColorBlack'                                
                            name={dataComponent.name}
                            iconName={dataComponent.iconName}
                        ></DesktopIconComponent>
                     )
                 })

            }
        </div>

    );

}

export default AppExplorerDataPanel;
