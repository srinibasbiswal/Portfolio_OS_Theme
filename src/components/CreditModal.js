import React from 'react';
import { Modal, Button, Card, Tooltip, OverlayTrigger } from 'react-bootstrap';
import styles from '../stylesheets/style.module.css';
import bgstyles from '../stylesheets/BGStyle.module.css';

function CreditModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered        
      >
        <Modal.Header
        className={`${styles.OffWhite}`} 
        closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Credits
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
            className={`${styles.OffWhite}`}
        >
            <Card className={`text-center ${bgstyles.ColorShadow_LG}`}>
                <Card.Body className={`${bgstyles.ripple_background} rounded`}>                
                    <div>
                    <p>
                        <span className={`font-weight-bold`}>Icons Pack :</span>
                        <a href="https://icons8.com/" target='_blank' class="badge badge-info m-2">Icons8</a>
                        <a href="https://fontawesome.com/" target='_blank' class="badge badge-info m-2">Font Awesome</a>
                    </p>
                    <p>
                        <span className={`font-weight-bold`}>Framework :</span>
                        <a href="https://react-bootstrap.github.io/" target='_blank' class="badge badge-info m-2">React Bootstrap</a>
                    </p>
                    <p>
                        <span className={`font-weight-bold`}>Maps Plugin :</span>
                        <a href="https://www.react-simple-maps.io/" target='_blank' class="badge badge-info m-2">React Simple Maps</a>
                    </p>
                    <p>
                        <span className={`font-weight-bold`}>Other Plugins :</span>
                        <a href="https://www.npmjs.com/package/react-infinite-calendar" target='_blank' class="badge badge-info m-2">Calendar</a>
                        <a href="https://freefrontend.com/css-animated-backgrounds/" target='_blank' class="badge badge-info m-2">Background Designs</a>
                        <a href="https://www.npmjs.com/package/react-pdf" target='_blank' class="badge badge-info m-2">PDF Reader</a>
                    </p>
                    <p>
                        <span className={`font-weight-bold`}>Legendary Mentions:</span>
                        <a href="https://github.com/" target='_blank' class="badge badge-info m-2">GitHub</a>
                        <a href="https://stackoverflow.com/" target='_blank' class="badge badge-info m-2">stackoverflow</a>
                    </p>
                    </div>                    
                </Card.Body>

            </Card>
        </Modal.Body>
        <Modal.Footer
            className={`${styles.OffWhite}`}
        >
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}>
                       That's what she said !! 
                    </Tooltip>
                }
                >
                <span className={`${styles.FooterText}`} >
                    Made with <span className={`${styles.fontColorRed}`}>&hearts;</span> by Srinibas Biswal
                </span>
            </OverlayTrigger>
            
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CreditModal;