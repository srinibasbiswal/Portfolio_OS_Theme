import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';

function AppExplorerTopPanel(props) {
    if (props.modaldetails.topPanel) {

        return (

            <div className={`${styles.AppExplorerTopPanel} mt-2 border-bottom`}>

                <Form inline className={`mb-2`}>
                    <div>
                        <FontAwesomeIcon icon={faAngleLeft} className={`${styles.ExplorerTopPanelIcons}`}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faAngleRight} className={`${styles.ExplorerTopPanelIcons}`}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faSyncAlt} className={`${styles.RefreshIcon}`}></FontAwesomeIcon>
                    </div>
                    <Form.Group className={`ml-2`}>
                        <Form.Control
                            type="text"
                            placeholder={'/' + props.name}
                            readOnly
                        />
                    </Form.Group>
                    <div className={`ml-auto mr-5`}>
                        <Button variant="outline-secondary" className={`${styles.AppExplorerTopPanelBtn} btn-sm active`}>File</Button>
                        <Button variant="outline-secondary" className={`${styles.AppExplorerTopPanelBtn} btn-sm`}>Home</Button>
                        <Button variant="outline-secondary" className={`${styles.AppExplorerTopPanelBtn} btn-sm`}>Share</Button>
                        <Button variant="outline-secondary" className={`${styles.AppExplorerTopPanelBtn} btn-sm`}>View</Button>
                    </div>
                </Form>
            </div>

        );

    } else {
        return null;
    }


}

export default AppExplorerTopPanel;
