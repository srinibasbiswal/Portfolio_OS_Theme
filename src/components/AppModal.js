import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function AppModal(props){
    return(
        <Modal
        {...props}
        size="lg"
        backdrop="static"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.data}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> {props.data}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default AppModal;