import React from 'react';
import ReactDOM from 'react-dom';
import classes from '../stylesheets/style.module.css';

function AppExplorerContainer(props) {

    const doShow = props.isShowing;

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
                            <div className={classes.SidePanel}>
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
