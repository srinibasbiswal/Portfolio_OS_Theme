import React from 'react';
import ReactDOM from 'react-dom';
import classes from '../stylesheets/style.module.css';

function AppExplorerContainer(props) {

    const doShow = props.isShowing;

    if (doShow) {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className={classes.ModalOverlay} />
                    <div className={classes.ModalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className={classes.Modal}>
                            <div className={classes.ModalHeader}>
                                <button type="button" className={classes.ModalCloseButton} data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <p>
                                {props.text}
                            </p>
                        </div>
                    </div>
                </React.Fragment>, document.body
            )

        );
    }
    return (null);
}
export default AppExplorerContainer;
