import React from 'react';
import { Figure } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';

function DesktopIconComponent( props ){
    return(
        <Figure className={`${styles.DesktopIcon} rounded`} onClick={props.onClickEvent}>
            <Figure.Image
                width={props.iconwidth}
                alt={props.name}
                src={props.iconName}                
            />
            <Figure.Caption className={styles[props.captioncolor]}>
                {props.name}
            </Figure.Caption>
        </Figure>
    );
}

export default DesktopIconComponent;