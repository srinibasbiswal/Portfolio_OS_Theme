import React from 'react';
import useModal from '../customHooks/useModal';
import AppExplorerContainer from '../containers/AppExplorerContainer';
import classes from '../stylesheets/style.module.css';

function DesktopIcon(props) {

    const { isShowing, toggle } = useModal();

    return (
        <div className={classes.DesktopIconBox} onClick={toggle}>
            <div className={`${classes[props.iconName]} ${classes.DesktopIcon}`}></div>
            <div className={classes.desktopIconName}>{props.name}</div>
            <AppExplorerContainer
                isShowing={isShowing}
                hide={toggle}
                text={props.name}
            />
        </div>
    );

}

export default DesktopIcon;
