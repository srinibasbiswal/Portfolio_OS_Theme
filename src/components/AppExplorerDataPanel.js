import React from 'react';
import styles from '../stylesheets/style.module.css';

function AppExplorerDataPanel(props) {
    return (
        <div className={`${styles.AppExplorerDataPanel}`}>
            {props.modaldetails.data}
        </div>

    );

}

export default AppExplorerDataPanel;
