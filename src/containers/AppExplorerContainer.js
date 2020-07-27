import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../stylesheets/style.module.css';
import SidePanelRowComponent from '../components/SidePanelRowComponent';
import TopPanelComponent from '../components/TopPanelComponent';

function AppExplorerContainer(props) {

    const doShow = props.isShowing;

    const [sidePanelIcons, setSidePanelIcons] = useState({
        rowIcons: [
            { rowName: 'File Explorer', iconName: 'FileExplorerIconRow', id: 1, hierarchyLevel: 'hierarchy1' },
            { rowName: 'Quick Access', iconName: 'QuickAccessIconRow', id: 2, hierarchyLevel: 'hierarchy1' },
            { rowName: 'Desktop', iconName: 'DesktopIconRow', id: 3, hierarchyLevel: 'hierarchy2' },
            { rowName: 'This Person', iconName: 'ThisPersonIconRow', id: 4, hierarchyLevel: 'hierarchy2' },
            { rowName: 'Documents', iconName: 'DocumentsIconRow', id: 5, hierarchyLevel: 'hierarchy2' },
            { rowName: 'Pictures', iconName: 'PicturesIconRow', id: 6, hierarchyLevel: 'hierarchy2' }
        ]
    });

    if (doShow) {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className={classes.AppExplorerContainer} aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className={classes.AppExplorer}>
                            <div className={classes.TopPanel}>
                                <button type="button" className={classes.ModalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className={`${classes.SidePanel} ${classes.BlurEffect}`}>
                                <div className={classes.MarginMediumTop}>
                                    {sidePanelIcons.rowIcons.map((rowIcon) =>
                                        <SidePanelRowComponent
                                            iconName={rowIcon.iconName}
                                            rowName={rowIcon.rowName}
                                            key={rowIcon.id}
                                            hierarchyLevel={rowIcon.hierarchyLevel}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={classes.DataPanel}>
                                <p>
                                    {props.text}
                                </p>
                            </div>
                        </div>

                    </div>
                </React.Fragment>, document.body
            )

        );
    }
    return (null);
}
export default AppExplorerContainer;
