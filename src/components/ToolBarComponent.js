import React from 'react';
import styles from '../stylesheets/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToolBarComponent(props) {
    return (
        <FontAwesomeIcon icon={props.iconName} className={styles.ToolBarSymbols}></FontAwesomeIcon>

    );
}

export default ToolBarComponent;
